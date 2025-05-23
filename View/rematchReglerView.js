function rematchReglerView(){
     
    return /*HTML*/ `
            <div class="rules-container">
            <h1>Regler</h1>
                <p>Aktivitets dag skal settes minimum 2 dager før Game day.</p>
                <p>For sen til oppmøte tid, blir 2 minus poeng </p>
                
                <h1> Rematch</h1>
                <p> Rematch kan kun bli brukt av en som ikke har vunnet gjeldene aktivitet</p>
                <h2>Poengregning</h2>
                <p>Utfordreren (den som ba om rematch):</p>
                <p> Forbedrer plassering = +1 poeng</p>
                <p> Samme plassering = 0 poeng</p>
                <p> Dårligere plassering = -2 poeng</p>
                <p>De andre deltakerne:</p>
                <p> Forbedrer plassering = +1 poeng</p>
                <p> Samme plassering = 0 poeng</p>
                <p> Dårligere plassering = -1 poeng</p>
                  </div>
        `;
    }