/*
We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. 
It''s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them.
For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/

const team = {
  _players: [
    {firstName: "Alex",
    lastName: "Zhong",
    age: 23
    },
    {firstName: "Nash",
    lastName: "Liu",
    age: 20
    },
    {firstName: "Bob",
    lastName: "Zhang",
    age: 25}
  ],
  _games: [
    {opponent: "Broncos",
    teamPoints: 42,
    opponentPoints: 27},
    {opponent: "Suns",
    teamPoints: 20,
    opponentPoints: 18},    
    {opponent: "Nuggets",
    teamPoints: 30,
    opponentPoints: 28},    
  ],

  get players() {
    return this._players;
  },
  get games () {
    return this._games;
  },
  // add an .addPlayer method
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoint, opponentPoint) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoint,
      opponentPoints: opponentPoint,
    };
    this._games.push(game);
  }
};

team.addPlayer("Lisa", "Ku", 80);
team.addPlayer("Bugs", "Li", 12);
team.addPlayer("Ross", "Geller", 50);

console.log(team.players);

team.addGame("A", 10, 20);
team.addGame("B", 78, 79);
team.addGame("C", 28, 20);

console.log(team.games);