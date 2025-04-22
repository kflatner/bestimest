function activitiesView() {
    let html = `
        <table>
            <tr>
                <th>Sport</th>
                <th>1. plass</th>
                <th>2. plass</th>
                <th>3. plass</th>
            </tr>
    `;

    for (let result of model.data.results) {
        const activity = model.data.activities.find(a => a.id === result.activityId);
        const first = model.data.players.find(p => p.id === result.first)?.username || '–';
        const second = model.data.players.find(p => p.id === result.second)?.username || '–';
        const third = model.data.players.find(p => p.id === result.third)?.username || '–';

        html += `
            <tr>
                <td>${activity?.sport || ''}</td>
                <td>${first}</td>
                <td>${second}</td>
                <td>${third}</td>
            </tr>
        `;
    }

    html += `</table>`;
    return html;
}
