function playerView() {
    return /*HTML*/ `
        <div class="player-container">
            <button class="player-button" style="background-image: url('images/Ola.png');" onclick="selectPlayer(2)"></button>
            <button class="player-button" style="background-image: url('images/Vujan2.png');" onclick="selectPlayer(3)"></button>
            <button class="player-button" style="background-image: url('images/Kenneth2.png');" onclick="selectPlayer(1)"></button>
        </div>
    `;
}
function selectPlayer(playerId) {
    model.inputs.selectedPlayerId = playerId;
    model.app.currentPage = 'playerInfo';
    updateView();
}
