//the game starts with a function that has already been load that runs both random functions
$(document).ready(function () {

    //Variable that shows the number the user will have and will need to add to = the random number
    var userNumberAdding = 0

    //variables for winings and looses
    var wins = 0;
    var looses = 0;

    // * QUESTION: can i create an if statment with on click "if a click the valu is, if not"

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

    // * QUESTION: can i create an I make the three variables in just one line

    //Generate a random number between for 1-12 for each Gem
    var pinkRandomNumber = createRandomNumber(1, 12)
    var purpleRandomNumber = createRandomNumber(1, 12)
    var blueRandomNumber = createRandomNumber(1, 12)
    var yellowRandomNumber = createRandomNumber(1, 12)



    //takes the value of that random number and add it on to the userNumber
    //that value to userNumber + numberToAdd
    function addingNumbers(gemValue) {
        newValue = userNumberAdding + gemValue
        return newValue;
    }

    //We create a function that transform the user values into numbers so we can use them in If statments
    /*function creatingNewValues(){
        newUserValue = parseInt(newUserValue)
        userNumberAdding += newUserValue
    }*/

    // Create .click functions for each gem
    // When you click on it you activate a function addingNumber(pinkRandomNumber){}
    $("#pinkGem").click(function () {
        //We change the user value so it can be add to as a new value with the + of the last interaction
        var newUserValue = addingNumbers(pinkRandomNumber);
        $("#userNumbertxt").text(newUserValue);

        newUserValue = parseInt(newUserValue)
        userNumberAdding += newUserValue
    })

    /*$("#purpleGem").click(function () {
        //We change the user value so it can be add to as a new value with the + of the last interaction
        var newUserValue = addingNumbers(purpleRandomNumber);
        $("#userNumbertxt").text(userNumberAdding);
        
        creatingNewValues(newUserValue);
    })

    $("#blueGem").click(function () {
        //We change the user value so it can be add to as a new value with the + of the last interaction
        var newUserValue = addingNumbers(blueRandomNumber);
        $("#userNumbertxt").text(userNumberAdding);

        creatingNewValues(newUserValue);
    })

    $("#yellowGem").click(function () {
        //We change the user value so it can be add to as a new value with the + of the last interaction
        var newUserValue = addingNumbers(yellowRandomNumber);
        $("#userNumbertxt").text(userNumberAdding);

        creatingNewValues(newUserValue);
    })*/

   
console.log(userNumberAdding);

    //Create IF statements for wining and losing
    //If the randomNumber<userNumber (user loses)
    // we i++ to loses

    if (currentRandomNumber<userNumberAdding){
        alert("you lose")
        looses++
    }
    //else if (randomNumber===userNumber)(user wins)
    // we i++ to wins
    else if (currentRandomNumber===userNumberAdding){
        alert("you win")
        wins++
    }
 
    $("#wins").text(wins);
    $("#looses").text(looses);


    // We refresh the page of random number but not the score
    //if(wins++||looses++){
        //location.reload();
    //}
    // * QUESTION: can i create an if statment with on click "if a click the valu is, if not"

 



    // we can create a script for this part

    // ! we refresh the function of random number but not the score
    // ! we refresh the function of random number but not the score









});






//Create IF statements for wining and losing
// we can create a script for this part
//If the randomNumber<userNumber (user loses)
// we i++ to loses
// ! we refresh the function of random number but not the score
//else if (randomNumber===userNumber)(user wins)
// we i++ to wins
// ! we refresh the function of random number but not the score