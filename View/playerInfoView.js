function playerInfoView() {
    const playerId = model.inputs.selectedPlayerId;
    const player = model.data.players.find(p => p.id === playerId);

    const imageMap = {
        2: "images/Ola.png",
        3: "images/Vujan2.png",
        1: "images/Kenneth2.png"
    };

    let score = 0;
    const results = model.data.results || [];

    // 🏆 Find all activities the player won (1st place)
    const wonActivities = [];

    for (let result of results) {
        if (result.first === playerId) {
            const activity = model.data.activities.find(a => a.id === result.activityId);
            if (activity) wonActivities.push(activity.sport);
            score += 3;
        } else if (result.second === playerId) {
            score += 2;
        } else if (result.third === playerId) {
            score += 1;
        }
    }

    // 🧾 Format best-in list or fallback text
    const bestText = wonActivities.length > 0
        ? wonActivities.join(', ')
        : "Ikke best i noe... enda!";

    return /*HTML*/ `
        <div class="player-info-container">
            <img class="player-profile" src="${imageMap[playerId]}" alt="${player.username}">
            <h2>${player.username}</h2>
            <p>Poeng: <strong>${score}</strong></p>
            <p><strong>Best i:</strong> ${bestText}</p>
            <button onclick="model.app.currentPage = 'players'; updateView()">⬅ Tilbake</button>
        </div>
    `;
}
