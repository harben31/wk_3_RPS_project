

    var RPS = ["R", "P","S"];
    
    var scoreComp = 0;
    var scorePlayer = 0;
    var scoreTie = 0;
    

var mainFun = function(){

   var inputPrompt  = function() {
      var inInput = prompt("choose R P or S:", "put it here");
      inInput = inInput.toUpperCase();
       return inInput;
       console.log(inInput);
    };

   var input = inputPrompt();

    console.log(input);
    
    var randomizer = function(){
    i = Math.floor(Math.random() * RPS.length);
    return RPS[i];
    };

    var randomIndex = randomizer();

    if (input === "S" ||
        input === "R" ||
        input === "P"){
        randomIndex;
    } else {alert("you dont want to play with me? uwu");
    return;
};

    

    console.log(randomIndex);
    alert("I picked " + randomIndex);

    if (input === randomIndex) {
        scoreTie++;
        
       var conTie = alert("You tied! Do you want to play again? ");
       
     } else if ((input === "R" && randomIndex === "S") 
          || (input === "S" && randomIndex  === "P") 
          || (input === "P" && randomIndex === "R")) 
          {
      scorePlayer++; 
      var conWin = alert("You win! Do you want to play again? ");
    
      } else {
      scoreComp++; 
      var conLose = alert("You lose! Do you want to play again? ");
    
      };

      console.log(scorePlayer);
      console.log(scoreComp);
      console.log(scoreTie);

      var scoreCard =( "\nyour score: " + scorePlayer +
    "\nmy score: " + scoreComp +
    "\nwe've tied " + scoreTie + " times."
    );  

      
      var playAgain = confirm("the score is:" + scoreCard);

      if (playAgain){
          mainFun();
      }
    }

    

    mainFun();



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