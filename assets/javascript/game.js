//the game starts with a function that has already been load that runs both random functions
$(document).ready(function () {

    //Variable that shows the number the user will have and will need to add to = the random number
    var userNumberAdding = 0
    $("#userNumbertxt").text(userNumberAdding);


    //variables for winings and looses
    var wins = 0;
    var looses = 0;

    $("#looses").text(looses);
    $("#wins").text(wins);

    //Create a function that creates random numbers

    //Generate a random number between 19-120 for randomNumber

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

    if (looses++ || wins++ || looses || wins) {
        //Create a random number between 19-20 for the user to try to reach it
        //TO.DO: Refresh this whenever the page starts or the user has won or lose
        var currentRandomNumber = createRandomNumber(19, 120);
        //Print this result on HTML
        $("#randomNumbertxt").text(currentRandomNumber);

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

            console.log("------")
            console.log("PiNK GEM" + newUserValue)
            ifstatement(newUserValue);
        })


        $("#purpleGem").click(function () {
            //We change the user value so it can be add to as a new value with the + of the last interaction
            var newUserValue = addingNumbers(purpleRandomNumber);
            $("#userNumbertxt").text(userNumberAdding);

            newUserValue = parseInt(newUserValue)
            userNumberAdding += newUserValue

            console.log("------")
            console.log("Purple GEM" + newUserValue)
            ifstatement(newUserValue);

        })


        $("#blueGem").click(function () {
            //We change the user value so it can be add to as a new value with the + of the last interaction
            var newUserValue = addingNumbers(blueRandomNumber);
            $("#userNumbertxt").text(userNumberAdding);

            newUserValue = parseInt(newUserValue)
            userNumberAdding += newUserValue

            console.log("------")
            console.log("Blue GEM" + newUserValue)
            ifstatement(newUserValue);
        })

        $("#yellowGem").click(function () {
            //We change the user value so it can be add to as a new value with the + of the last interaction
            var newUserValue = addingNumbers(yellowRandomNumber);
            $("#userNumbertxt").text(userNumberAdding);

            newUserValue = parseInt(newUserValue)
            userNumberAdding += newUserValue

            console.log("------")
            console.log("Yellow GEM" + newUserValue)
            ifstatement(newUserValue);
        })

    }



    //Create a function that creates an if stamtent that can give the mis and looses
    function ifstatement(i) {
        if (i > currentRandomNumber) {
            looses++
            $("#looses").text(looses)
            
            //Refresh and add the values to HTML so they game starts again
            userNumberAdding = 0
            $("#userNumbertxt").text(userNumberAdding);
            currentRandomNumber = createRandomNumber(19, 120);
            $("#randomNumbertxt").text(currentRandomNumber);

        }
        else if (currentRandomNumber === i) {
            wins++
            $("#wins").text(wins);
            
            //Refresh and add the values to HTML so they game starts again
            userNumberAdding = 0
            $("#userNumbertxt").text(userNumberAdding);
            currentRandomNumber = createRandomNumber(19, 120);
            $("#randomNumbertxt").text(currentRandomNumber);
        }
    }


});






//Create IF statements for wining and losing
// we can create a script for this part
//If the randomNumber<userNumber (user loses)
// we i++ to loses
// ! we refresh the function of random number but not the score
//else if (randomNumber===userNumber)(user wins)
// we i++ to wins
// ! we refresh the function of random number but not the score