//the game starts with a function that has already been load that runs both random functions
$(document).ready(function () {

    //Variable that shows the number the user will have and will need to add to = the random number
    var userNumber = 0
    //add this value to the HTML
    $("#userNumbertxt").text(userNumber);


    //Generate a random number between 19-120 for randomNumber 
    //Create a function that creates random numbers
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Create function that give us random number between two numbers
    function createRandomNumber(x,y) {
        var randomNumber = "";
        for (var i = 0; i < y; i++) {
            randomNumber = getRandomNumber(x,y);
        }
        return randomNumber;
    }

    //Refresh this whenever the page starts o the user has won or lose
    var currentRandomNumber = createRandomNumber(19,20)
    //Print this result on HTML
    $("#randomNumbertxt").text(currentRandomNumber);

    //Generate a random number between for 1-12 randomNumberGem createRandomNumberGem
    var pinkRandomNumber = createRandomNumber(1,12)
    var purpleRandomNumber = createRandomNumber(1,12)
    var blueRandomNumber = createRandomNumber(1,12)
    var yellowRandomNumber = createRandomNumber(1,12)
    //Assigns that value to 
    //we run randomNumberGem to all this variables
    //pinkRandomNumber 
    //purpleRandomNumber
    //blueRandomNumber
    //yellowRandomNumber





});





//Generate a random number between for 1-12 randomNumberGem createRandomNumberGem
    //Assigns that value to 
    //we run randomNumberGem to all this variables
    //pinkRandomNumber 
    //purpleRandomNumber
    //blueRandomNumber
    //yellowRandomNumber

// Create .click functions for each gem
// When you click on it you activate a function addingNumber(pinkRandomNumber){}
//takes the value of that random number and add it on to the userNumber
//that value to userNumber + numberToAdd

//Create IF statements for wining and losing
// we can create a script for this part
//If the randomNumber<userNumber (user loses)
// we i++ to loses
// ! we refresh the function of random number but not the score
//else if (randomNumber===userNumber)(user wins)
// we i++ to wins
// ! we refresh the function of random number but not the score