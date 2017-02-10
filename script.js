// Create a Random Number for the User to try to Guess
var the_number = null;
function pick_number(){
    var randomNumber;
    randomNumber = Math.floor((Math.random() * 10) + 1);
    console.log('Here is a Random Number : ' + randomNumber);
    console.log
    return randomNumber;
};

//GET USER INPUT
$('button').click(function(){
    make_guess();
});

//Compare user's guess with random number
function make_guess(){
    var $divResponse = $('#response_div');
    var the_guess = $('#guess_input').val();
    console.log('Here is the user\'s guess: ' + the_guess);

    // If the_guess is higher than the_number, it changes the contents of #response_div to "Too High!"
    if(the_guess > the_number){
        $divResponse.text('Too High!');
    } else if(the_guess < the_number){
        // If the_guess is lower than the_number, it changes the contents of #response_div to "Too Low!"
        $divResponse.text('Too Low!');
    } else {
        // If the_guess is the same as the_number, it changes the contents of #response_div to "You guessed it!"
        $divResponse.text('You guessed it!');
    }

};

