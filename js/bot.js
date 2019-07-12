const { Neat, Network, architect } = require("@liquid-carrot/carrot");
/*
	var trex = Runner.instance_.tRex;
	var game = Runner.instance_;
	toJump : trex.startJump(game.currentSpeed);
	toDuck : trex.setDuck(true)
	obstacles array : game.horizon.obstacles
	to check crashed : game.crashed
	to restart : game.restart()
	trex:
		jumping
		ducking
		status {
  			CRASHED: 'CRASHED',
  			DUCKING: 'DUCKING',
  			JUMPING: 'JUMPING',
  			RUNNING: 'RUNNING',
  			WAITING: 'WAITING'
	 	}
	obstacles:
		xPos
		yPos
		width
	*/
/* window.onload By default, it is fired when the entire page loads, including its content (images, css, scripts, etc.)
In some browsers it now takes over the role of document.onload and fires when the DOM is ready as well. */	
window.onload = function(){
	let population = new Neat(3,2, { population_size: 100 });
	let newpopulation;


	

	while(deads < population.population.length) {
		const game = Runner.instance_;
		const trex = game.tRex;
		const results = population.population.map((tRex) => {
    	// have the network / genome / dino take an action and see what happens i.e. the game returns dead / not dead
    		return trex.status;
		  })
		  
		newpopulation = results.map((result, index)=> {
    		const genome = population.population[index]
    		const individuallyDead = genome.dead;
    		// not dead
    		if(game.crashed === true && !genome[index].dead) {
      			genome.dead = true;
	  			deads++;
	  			//save the score in its player
      			return genome.score =Math.ceil(game.distanceRan);
    		}
			// already dead	
			return genome;
	
	  })
 
 	// set Neat population to newPopulation
 	population.population = newpopulation;
 	// generate new genomes within the population	 
	population.sort(); // sort by fitness
 	// Elitism, assumes population is sorted by fitness
 	let elitists = [];
 	for (let index = 0; index < population.elitism; index++) elitists.push(newpopulation[index]);

 // Provenance
 const new_population = Array(self.provenance).fill(Network.fromJSON(self.template.toJSON()));
 // Breed the next individuals
 for (let i = 0; i < self.population_size - self.elitism - self.provenance; i++) {
	new_population.push(self.getOffspring());
  }
  check_game = setInterval(function(){
	if(!game.activated){
		game.restart(); //Restarts the game if the trex crashed
	}
},3000);
}


}
