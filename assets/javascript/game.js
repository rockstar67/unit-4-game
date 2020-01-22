// GLOBAL VARIABLES
//-----------------------------------------------------------------------------

// CRYSTALS VARIABLES
var crystal = {
    blue:
    {
        name: "Blue",
        value: 0   
    },
    green:
    {
        name: "Green",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    }

};

// Scores
var currentScore = 0;
var targetScore  = 0;

// Wins and Losses
var winCount     = 0;
var lossCount    = 0;

// FUNCTIONS
//-----------------------------------------------------------------------------

// Helper Functions for getting random numbers.
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Starts the Game (and restarts the game)
 startGame = function(){



// Reset the Current Score
var currentScore = 0;

// Set a new Target Score (between 19 and 120)

targetScore = getRandom(19, 120);

// Set different values for each of the crystals (between 1 and 12)
    crystal.blue.value      = getRandom(1, 12);
    crystal.red.value       = getRandom(1, 12);
    crystal.yellow.value    = getRandom(1, 12);
    crystal.green.value     = getRandom(1, 12);

    
// Change the HTML to reflect all of these changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
    
//Testing Console
console.log("---------------------------")
console.log("Target Score: " + targetScore);
console.log("Blue: " + crystal.blue.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value + " | Green: " + crystal.green.value);
console.log("----------------------------")
}

// Respond to clicks on the crystals
    var addValues = function(crystal) {

        // Change currentScore
        currentScore = currentScore + crystal.value;

        // Change the HTML to reflect changes in currentScore
        $("#yourScore").html(currentScore);

        // Call the checkWin function
        checkWin();

    
        //Testing Console
        console.log("Your Score: " + currentScore);
    
    }
// Check if User Won or Loss and Reset the game
var checkWin = function() {

    //Check if currentScore is larger than targetScore
    if(currentScore > targetScore) {
        alert("Sorry, You Lost!");
        console.log("You Lost");

        // Add to loss Counter
        lossCount++;

        // Change Loss Count HTML
        $("#lossCount").text("Losses: " + lossCount);

        // Restart the game
        startGame();
    }

    else if (currentScore == targetScore) {
        alert("Congratulations! You Won!");
        console.log("You Won!");


        // Add to the Win Counter
        winCount++;

        // Change Win Count HTML
        $("#winCount").text("Wins: " + winCount);
    
        // Restart the game
        startGame();
    }

}
// MAIN PROCESS
//-----------------------------------------------------------------------------

// Starts the Game the First Time.
startGame();

$("#blue").click(function() {
    addValues(crystal.blue);
});

$("#red").click(function() {
    addValues(crystal.red);
});

$("#yellow").click(function() {
    addValues(crystal.yellow);
});

$("#green").click(function() {
    addValues(crystal.green);
});
