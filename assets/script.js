


    var RPS = ["R", "P","S"];

    var scoreComp = 0;
    var scorePlayer = 0;
    var scoreTie = 0;
    var scoreCard =( "\nyour score: " + scorePlayer +
    "\nmy score: " + scoreComp +
    "\nwe've tied " + scoreTie + " times."
    );
    // var scoreCard2 = scoreCard();

   var inputPrompt  = function() {
      var inInput = prompt("choose R P or S:", "put it here");
       return inInput;
    };
   

   var input = inputPrompt();

    console.log(input);
    
    var randomizer = function(){
    i = Math.floor(Math.random() * RPS.length);
    return RPS[i];
    };

    var randomIndex = randomizer();

    if (input === ("R" || "S" || "P")){
        randomIndex;
    } else {alert("you dont want to play with me? uwu")}


    console.log(randomIndex);

    
    // if (input === randomIndex) 
    //     scoreTie++;
    //     if ((scoreTie.valueOf + 1)===scoreTie){
    //     confirm("You tied! Do you want to play again? " + scoreCard);
    //     if (confirm === true) {inputPrompt()};
    //     } else if ((input === "R" && randomIndex === "S") 
    //         || (input === "S" && randomIndex  === "P") 
    //         || (input === "P" && randomIndex === "R")) 
    //         {
    //     scorePlayer++; 
    //     if ((scorePlayer.valueOf + 1)===scorePlayer) {
    //     confirm("You win! Do you want to play again? " + scoreCard);
    //     if (confirm === true) {inputPrompt()};
    //     }} else {
    //     scoreComp++; 
    //     if ((scoreComp.valueOf + 1)===scoreComp){
    //     confirm("You lose! Do you want to play again? " + scoreCard);
    //     if (confirm === true) {inputPrompt()};
    //     }};

    if (input === randomIndex) {
        scoreTie++;
        
        confirm("You tied! Do you want to play again? " + scoreCard);
        // if (confirm === true) {inputPrompt()
    }
         else if ((input === "R" && randomIndex === "S") 
            || (input === "S" && randomIndex  === "P") 
            || (input === "P" && randomIndex === "R")) 
            {
        scorePlayer++; 
        confirm("You win! Do you want to play again? " + scoreCard);
        // if (confirm === true) {inputPrompt()};
        } else {
        scoreComp++; 
        confirm("You lose! Do you want to play again? " + scoreCard);
        // if (confirm === true) {inputPrompt()};
        };

        console.log(scorePlayer);
        console.log(scoreComp);
        console.log(scoreTie);

    