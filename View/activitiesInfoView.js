function activitiesInfoView() {
    const activityId = Number(model.inputs.selectedActivityId);

    const activity = model.data.activities.find(a => a.id === activityId);
    const results = model.data.results.filter(r => r.activityId === activityId);
    const bgImage = activity?.image || '';

    if (!activityId) return `<p>Ingen aktivitet valgt. selectedActivityId = ${activityId}</p>`;
    if (!activity) return `<p>Fant ikke aktivitet med ID: ${activityId}</p>`;
    if (results.length === 0) return `<p>Ingen resultater for ${activity.sport} (ID: ${activityId})</p>`;

    let html = `
     <div class="activity-info-view" style="height: 700px;  background-image: url('${bgImage}');background-size:contain;
    background-repeat: no-repeat;
    background-position: center top  ;">
        <h2>${activity.sport}</h2>
        <table>
            <tr>
                <th>Runde</th>
                <th>1. plass</th>
                <th>2. plass</th>
                <th>3. plass</th>
            </tr>
    `;

    for (let i = 0; i < results.length; i++) {
        const result = results[i];
        const first = model.data.players.find(p => p.id === result.first)?.username || '–';
        const second = model.data.players.find(p => p.id === result.second)?.username || '–';
        const third = model.data.players.find(p => p.id === result.third)?.username || '–';

        html += `
            <tr>
                <td>Runde ${i + 1}</td>
                <td>${first}</td>
                <td>${second}</td>
                <td>${third}</td>
            </tr>
        `;
    }

    html += `</table>`;

    
    const lastResult = results.at(-1);
    if (lastResult?.location || lastResult?.weather || lastResult?.summary) {
        html += `
            <div class="activity-extra" style="float: left; width: 600px; margin-right: 20px;">
                <h3>Ekstrainfo for siste runde:</h3>
                ${lastResult.location ? `<p><strong>Sted:</strong> ${lastResult.location}</p>` : ''}
                ${lastResult.weather ? `<p><strong>Vær:</strong> ${lastResult.weather}</p>` : ''}
                ${lastResult.summary ? `<p><strong>Oppsummering:</strong> ${lastResult.summary}</p>` : ''}
            </div>
        `;
    }

    html += `
        <button onclick="model.app.currentPage = 'activities'; updateView()"></button>
    `;
    return html;
}
