//the game starts with a function that has already been load that runs both random functions
$(document).ready(function () {

    //Variable that shows the number the user will have and will need to add to = the random number
    var userNumberStart = 1
    var userNumberAdding = 1
    //add this value to the HTML
    $("#userNumbertxt").text(userNumberStart);

    //QUESTION: can i create an if statment with on click "if a click the valu is, if not"


    //Generate a random number between 19-120 for randomNumber 
    //Create a function that creates random numbers
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Create function that give us random number between two numbers
    function createRandomNumber(min, max) {
        var randomNumber = "";
        for (var i = 0; i < max; i++) {
            randomNumber = getRandomNumber(min, max);
        }
        return randomNumber;
    }

    //Create a random number between 19-20 for the user to try to reach it
    //TO.DO: Refresh this whenever the page starts or the user has won or lose
    var currentRandomNumber = createRandomNumber(19, 120);
    //Print this result on HTML
    $("#randomNumbertxt").text(currentRandomNumber);

    //Generate a random number between for 1-12 for each Gem
    var pinkRandomNumber = createRandomNumber(1, 12)
    console.log("-----");
    console.log("Pink Value "+ pinkRandomNumber);
    var purpleRandomNumber = createRandomNumber(1, 12)
    console.log("-----");
    console.log("Purple Value "+ purpleRandomNumber);
    var blueRandomNumber = createRandomNumber(1, 12)
    console.log("-----");
    console.log("Blue Value "+ blueRandomNumber);
    var yellowRandomNumber = createRandomNumber(1, 12)
    console.log("-----");
    console.log("Yellow value "+ yellowRandomNumber);

    // Create .click functions for each gem
    // When you click on it you activate a function addingNumber(pinkRandomNumber){}
    //takes the value of that random number and add it on to the userNumber
    //that value to userNumber + numberToAdd
    function addingNumbers(gemValue){
        newValue = userNumberAdding + gemValue
        return newValue;        
    }

    $("#pinkGem").click(function () {
        //We change the user value so it can be add to as a new value with the + of the last interaction
        userNumberAdding = addingNumbers(pinkRandomNumber);
        console.log("-----");
        console.log("New Value  1 + " + pinkRandomNumber + "=" + userNumberAdding);
    })
    $("#purpleGem").click(function () {
        //We change the user value so it can be add to as a new value with the + of the last interaction
        userNumberAdding = addingNumbers(purpleRandomNumber);
        console.log("-----");
        console.log("New Value  1 + " + purpleRandomNumber + "=" + userNumberAdding);
    })
    $("#blueGem").click(function () {
        //We change the user value so it can be add to as a new value with the + of the last interaction
        userNumberAdding = addingNumbers(blueRandomNumber);
        console.log("-----");
        console.log("New Value  1 + " + blueRandomNumber + "=" + userNumberAdding);
    })
    $("#yellowGem").click(function () {
        //We change the user value so it can be add to as a new value with the + of the last interaction
        userNumberAdding = addingNumbers(yellowRandomNumber);
        console.log("-----");
        console.log("New Value  1 + " + yellowRandomNumber + "=" + userNumberAdding);
    })

    $("#userNumbertxt").text(userNumberAdding);







});






//Create IF statements for wining and losing
// we can create a script for this part
//If the randomNumber<userNumber (user loses)
// we i++ to loses
// ! we refresh the function of random number but not the score
//else if (randomNumber===userNumber)(user wins)
// we i++ to wins
// ! we refresh the function of random number but not the score