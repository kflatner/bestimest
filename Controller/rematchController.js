function rematchController() {
    const lastRematch = model.data.rematchResults?.at(-1);
    if (!lastRematch) return;

    const activityId = lastRematch.activityId;
    const previousResults = model.data.results.filter(r => r.activityId === activityId);

    const points = {};
    for (let player of model.data.players) {
        points[player.id] = 0;
    }

    for (let result of previousResults) {
        if (result.first) points[result.first] += 3;
        if (result.second) points[result.second] += 2;
        if (result.third) points[result.third] += 1;
    }

    const rematchPositions = {
        [lastRematch.first]: 1,
        [lastRematch.second]: 2,
        [lastRematch.third]: 3,
    };

    for (let player of model.data.players) {
        let bestPrev = Infinity;
        for (let result of previousResults) {
            if (result.first === player.id) bestPrev = Math.min(bestPrev, 1);
            else if (result.second === player.id) bestPrev = Math.min(bestPrev, 2);
            else if (result.third === player.id) bestPrev = Math.min(bestPrev, 3);
        }

        const current = rematchPositions[player.id] || Infinity;
        if (current > bestPrev) {
            points[player.id] -= 1;
        }
    }

    // 🔁 Store result in model for later use in view
    model.rematchPoints = points;
    rematchController();
document.getElementById('output').innerHTML = tabelView();

}
