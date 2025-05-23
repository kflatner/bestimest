function activitiesView() {
    // Finn siste indeks for hver aktivitet
    const lastIndexes = {};
    for (let i = 0; i < model.data.results.length; i++) {
        const activityId = model.data.results[i].activityId;
        lastIndexes[activityId] = i; // lagrer siste forekomst
    }

    // Tell hvor mange ganger hver aktivitet forekommer
    const activityCount = {};
    for (let result of model.data.results) {
        if (!result.activityId) continue;
        activityCount[result.activityId] = (activityCount[result.activityId] || 0) + 1;
    }

    let html = `
        <table>
            <tr>
                <th>Sport</th>
                <th>1. plass</th>
                <th>2. plass</th>
                <th>3. plass</th>
            </tr>
    `;

    for (let i = 0; i < model.data.results.length; i++) {
        const result = model.data.results[i];
        const activity = model.data.activities.find(a => a.id === result.activityId);
        const first = model.data.players.find(p => p.id === result.first)?.username || '–';
        const second = model.data.players.find(p => p.id === result.second)?.username || '–';
        const third = model.data.players.find(p => p.id === result.third)?.username || '–';

        // Bare merk "Rematch" hvis det er flere resultater og dette er den siste
        const isLastOfMultiple =
            activityCount[result.activityId] > 1 && i === lastIndexes[result.activityId];

        const clickableActivity = `
            <span 
                class="clickable-activity" 
                onclick="model.inputs.selectedActivityId = ${result.activityId}; model.app.currentPage = 'activitiesInfo'; updateView()"

            >
                ${activity?.sport || ''}
            </span>
            ${isLastOfMultiple ? ' <span style="color:red;">Rematch</span>' : ''}
        `;

        html += `
            <tr>
                <td>${clickableActivity}</td>
                <td>${first}</td>
                <td>${second}</td>
                <td>${third}</td>
            </tr>
        `;
    }

    html += `</table>`;
    return html;
}
