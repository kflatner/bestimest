function tabelView() {
    // Initialiser poeng for hver spiller
    const points = {};
    for (let player of model.data.players) {
        points[player.id] = 0;
    }

    // Regn ut poeng basert på plasseringer
    for (let result of model.data.results) {
        if (result.first) points[result.first] += 3;
        if (result.second) points[result.second] += 2;
        if (result.third) points[result.third] += 1;
    }

    // Lag HTML for tabellen
    let html = `
        <h2>Poengtavle</h2>
        <table>
            <tr>
                ${model.data.players.map(p => `<th>${p.username}</th>`).join('')}
            </tr>
            <tr>
                ${model.data.players.map(p => `<td>${points[p.id]}</td>`).join('')}
            </tr>
        </table>
    `;

    return html;
}
