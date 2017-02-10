var the_number = null;

$(document).ready(function() {
    the_number = pick_number();
});
//Hide the input field and button on page load
// $('input').hide();
// $('button').hide();

//hide lamp and show a genie image in it's place for a second
//hide the genie image and bring back the lamp

//when the lamp is clicked or tapped
    //hide lamp and show a genie image in it's place for a second
    //hide the genie image and bring back the lamp
    //Show input field and button


//if the user guesses close to the number,
    //hide the lamp
    // show the genie
    // the text says warm

//if the user guesses cold,
    // the genie gets opaque
    //too cold and the genie disapears
    //the lamp comes back


//aDD THE PICK NUMBER FUNCTION


function pick_number() {
    var random_number;
    random_number = Math.floor((Math.random() * 20) + 1);
    console.log("random_number : ",random_number);
    return random_number;
};


//MODIFY THE MAKE GUESS FUNCTION
function make_guess() {
    var the_guess = $('#guess_input').val();
    the_guess = parseInt(the_guess);
    var wayTooHighRange = the_number + 5;
    var wayTooLowRange = the_number - 5;
    console.log('Here is the guess : ',the_guess);
    console.log('Here is the wayTooHighRange : ', wayTooHighRange);
    if(the_guess > the_number && the_guess >= wayTooHighRange) {
        $("#response_div").text("Way Too High!");
    } else if(the_guess > the_number && the_guess < wayTooHighRange) {
        $("#response_div").text("Getting Warmer");
    } else if(the_guess < the_number && the_guess <= wayTooLowRange) {
        $("#response_div").text("Way Too Low!");
    } else if(the_guess >  wayTooLowRange && the_guess < the_number) {
        $("#response_div").text("Too Low!");
    } else if (the_guess == the_number ){
        $("#response_div").text("You guessed it!");
    } else {
        $("#response_div").text("I'm not sure what you mean.");
    }
};

//add click event to the button
$("button").click(function(){
    make_guess();
    $('input').val('');
});