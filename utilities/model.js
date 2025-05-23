const model = {
    app: {
      currentPage: 'tabell',
    },

inputs: {
    selectedPlayerId: '',
    selectedActivityId: null,

},

data: {
    players:[
        {
        id:1,
        username: 'Kenneth',
        },
        {
        id:2,
        username: 'Ola',
        },
        {
        id:3,
        username: 'Vujan',
        },

    ],
    activities:[
        {id:1, sport: "Discgolf"},
        {id:2, sport: "Bordtennis"},
        {id:3, sport: "Dart"},
        {id:4, sport: "Bowling"},
        {id:5, sport: "Kubb"},
        {id:6, sport: "Lek i vannet"},
        {id:7, sport: "Bueskyting"},
        {id:8, sport: "Worms"},
        {id:9, sport: "Sjakk"},
    ],
    
    results: [
        {
            activityId: 1, // discgolf
            first: 2,      // Ola
            second: 3,     // Vujan
            third: 1 ,      // Kenneth
            location:"Sandefjord, Bugården DiscGolf Bane",
            weather:"Sol",
            summary:"Ola viser tydelig at han har noen timer mer enn oss i DG, utklassing!" 
        },
        {
            activityId: 2, 
            first: 3,
            second: 2,
            third: 1,
            location:"Sandefjord,Fjellsport`s lokaler",
            weather:"Husker ikke,var inne..",
            summary:"Tett kamp mellom Vujan og Ola, Ola mistet hode og tapte på slutten" 
        },
        {
            activityId: 3,
            first: 2,
            second: 1,
            third: 3,
            location:"Sandefjord,Corner Pub",
            weather:"Sol da vi kom,mørkt da vi dro..",
            summary:"Vujan ga opp, Mellom Ola og Kenneth var det første man som traff Dobbel 2 som ble vinner." 
        },
        {
            activityId: 4, 
            first: 2,
            second: 3,
            third: 1,
            location:"Sandefjord, Metro Bowling hall",
            weather:"Var vel sol,men inne aktivitet",
            summary:"Her kom Ola sine mange timer i bowlinghallen til gode, dette var utklassing"
             
        },
        {
            activityId: 5, 
            first: 2,
            second: 3,
            third: 1,
            location:"Sandefjord,Vujans hage",
            weather:"Sol og litt god vind",
            summary:"Ola og Kenneth spilte jevnt,desverre tapte Kenneth  begge mot Vujan og Ola tok begge mot Vujan" 
        },
        {
            activityId: 6, 
            first: 2,
            second: 1,
            third: 3,
            location:"Sandefjord,Ranvik Svømmehall",
            weather:"Inne aktivitet",
            summary:"Her var Kenneth desidert den beste svømmeren, Men Ola viste hvem som var det største barnet, og tok runde seier med lek i vannet" 
        },
        {
            activityId: 7, 
            first: 2,
            second: 1,
            third: 3,
            location:"Sandefjord,Ola`s hage",
            weather:"Sol",
            summary:"Ola var skuffet over egen skyting, men Vujan og Kenneth følte seg som Indianere å gjorde så godt vi kunne å traff som regel Blink!" 
        },
        {
            activityId: 8, 
            first: 3,
            second: 2,
            third: 1,
            location:"Vujans residence",
            weather:"Overskyet",
            summary:"Her var det jevnt mellom Vujan og Ola lenge, Men da det gjaldt tapte Ola den avgjørnde kampen mot Kenneth" 
        },
        {
            activityId: 1, 
            first: 2,
            second: 3,
            third: 1,
            location:"Bugården DiscGolf bane.",
            weather:"Sol og litt overskyet",
            summary:"Ola var overlegen, men Vujan og Kenneth kjempet om andre plass!" 
        },
        
],
rematchResults:[
    {
            activityId: 1, // discgolf
            first: 2,      // Ola
            second: 3,     // Vujan
            third: 1       // Kenneth
        },
]
}
}