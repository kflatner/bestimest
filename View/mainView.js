function updateView(){
    let currentView = '';

    switch (model.app.currentPage) {
        case 'tabell':
            currentView = tabelView();
            break;
            case 'activites':
                currentView = activitiesView();
                break;
            case 'nextActivites':
                currentView = nextActivityView();
                break;
    }

    document.getElementById('app').innerHTML = /*HTML*/`
    <header class="header-banner">
    
  
    <h1>Best i mest</h1>
    </header>

        <main id="content"> 
        ${currentView}
        </main>
        
        <footer>

        <button onclick="model.app.currentPage='tabell'; updateView()"> Tabell</button>
        <button onclick="model.app.currentPage='activites'; updateView()"> idretter</button>
        <button onclick="model.app.currentPage='nextActivites'; updateView()"> Neste Aktivitet</button>
      
        
        </footer>
    
    `
}
