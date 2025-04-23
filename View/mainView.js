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
            case 'players':
                currentView = playerView();
                break;
            case 'playerInfo':
                currentView = playerInfoView();
                break;
    }

    document.getElementById('app').innerHTML = /*HTML*/`
    <header onclick="model.app.currentPage='tabell'; updateView()" class="header-banner">
    
  
    <h1>🏆 Best i Mest 🏆</h1>


    </header>

        <main id="content"> 
        ${currentView}
        </main>
        
        <footer>

        <button onclick="model.app.currentPage='tabell'; updateView()"> Tabell</button>
        <button onclick="model.app.currentPage='activites'; updateView()"> idretter</button>
        <button onclick="model.app.currentPage='nextActivites'; updateView()"> Neste Aktivitet</button>
        <button onclick="model.app.currentPage='players'; updateView()"> Spillere</button>
        
      
        
        </footer>
    
    `
}
