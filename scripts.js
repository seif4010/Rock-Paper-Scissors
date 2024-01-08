var choices = ["rock", "paper", "scissors"];
var map = {};

choices.forEach(function(choice, i) {
    map[choice] = {};
    map[choice][choice] = "Was a tie"
    map[choice][choices[(i+1)%3]] = choices[(i+1)%3] + " wins"
    map[choice][choices[(i+2)%3]] = choice + " wins"
})

function compare(choice1, choice2) {
    return (map[choice1] || {})[choice2] || "Invalid choice";
}
