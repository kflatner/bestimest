function playerInfoView() {
    const playerId = model.inputs.selectedPlayerId;
    const player = model.data.players.find(p => p.id === playerId);

    // Optional player-image mapping (based on id or username)
    const imageMap = {
        2: "images/Ola.png",
        3: "images/Vujan2.png",
        1: "images/Kenneth2.png"
    };

    let score = 0;
    const results = model.data.results || [];

    for (let result of results) {
        if (result.first === playerId) score += 3;
        else if (result.second === playerId) score += 2;
        else if (result.third === playerId) score += 1;
    }

    return /*HTML*/ `
        <div class="player-info-container">
            <img class="player-profile" src="${imageMap[playerId]}" alt="${player.username}">
            <h2>${player.username}</h2>
            <p>Poeng: <strong>${score}</strong></p>
            <button onclick="model.app.currentPage = 'players'; updateView()">⬅ Tilbake</button>
        </div>
    `;
}
