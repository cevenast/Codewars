/*Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

    if x > y: 3 points (win)
    if x < y: 0 points (loss)
    if x = y: 1 point (tie)

We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

    our team always plays 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4*/

// P: An array of 10 strings. Each of the strings have the following format: x:y, where x and y are numbers. Can they be two digits numbers?
// R: A number, representing the total amount of points in the season.
// E: [["3:1", "2:2", "0:1", "0:0", "1:0", "2:3", "2:2", "1:0", "1:0", "1:1"] --> 16

function points(games) {
    // Starts with 0 points
    let points = 0
    games.forEach(result => { // Iterates through each match
      let score = result.split(':') // Separates our team's score from the opponent's score
      // Compares our team's score with the opponent's score
      if (score[0] > score[1]){ 
        points += 3
      }
      else if (score[0] == score[1]){
        points += 1
      }
    })
    return points
  }