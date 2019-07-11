var game, trex;
var rl_bot, check_game, cur_state, prev_state, prev_action, reward, isPunished;

var state = {
	speed: "",
	dist: "",
	width: "",
}
var bins = {
	speed: [9,13,14], // min:6, max: 13
	dist: [75, 100, 150, 200, 250, 300, 650],  // min = -75, max: 600
	width: [20,30,40,50,60,80,90,100], //possible values: [17,25,34,46,50,51,75], here 46 is bird
	action: ["jump", "not jump"]
}

