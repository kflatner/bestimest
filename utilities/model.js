const model = {
    app: {
      currentPage: 'tabell',
    },

inputs: {

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
        {id:1, sport: "discgolf"},
        {id:2, sport: "tabletennis"},
        {id:3, sport: "dart"},
        {id:4, sport: "bowling"},
        {id:5, sport: "kubb"},
        {id:6, sport: "swimming"},
    ],
    
    results: [
        {
            activityId: 1, // discgolf
            first: 2,      // Ola
            second: 3,     // Vujan
            third: 1       // Kenneth
        },
        {
            activityId: 2, 
            first: 3,
            second: 2,
            third: 1
        },
        {
            activityId: 3,
            first: 2,
            second: 1,
            third: 3
        },
        {
            activityId: 4, 
            first: 2,
            second: 3,
            third: 1
        },
        {
            activityId: 5, 
            first: 2,
            second: 3,
            third: 1
        },
        {
            activityId: 6, 
            first: 2,
            second: 1,
            third: 3
        },
        {
            activityId: '', 
            first: '',
            second: '',
            third: ''
        },
        
]
}
}