var the_number = null;

$(document).ready(function() {
    the_number = pick_number();
    hideElements();
    glimpseGenie();
});

//Hide the genie, the paragraph, input field
//and the button on page load
function hideElements() {
    $('img[src*="genie"]').hide();
    $('input').hide();
    $('button').hide();
    $('p').addClass('hidden');
};

function glimpseGenie() {
    //hide lamp and show a genie image in it's place for a second
    setTimeout(function() {
        $('img[src*="magic_lamp"]').fadeOut(700);
    }, 1000);
    setTimeout(function() {
        $('img[src*="genie"]').fadeIn(700);
    }, 2000);

    //hide the genie image and bring back the lamp
    setTimeout(function() {
        $('img[src*="genie"]').fadeOut(700);
    }, 4000);
    setTimeout(function() {
        $('img[src*="magic_lamp"]').fadeIn(700);
    }, 5000);
    setTimeout(function() {
        $('p').fadeIn(700).removeClass('hidden');
    },6000);
}

//when the lamp is clicked or tapped
$('img[src*="magic_lamp"]').on("click", function() {
    //Show input field and button
    $('input').fadeIn();
    $('button').fadeIn();
});

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
    var wayTooHighRange = the_number + 10;
    var wayTooLowRange = the_number - 10;
    var tooHigh = the_number + 5;
    var tooLow = the_number - 5;
    console.log('Here is the guess : ',the_guess);
    console.log('Here is the wayTooHighRange : ', wayTooHighRange);

    // Add classes and remove classes which increase or decrease the image's(magic lamp) opacity
    // depending on how warm or cold there guesses are
        //Create two classes
            //mid-opacity
            //little opacity
    if(the_guess > the_number && the_guess > tooHigh && the_guess >= wayTooHighRange) {
        $("#response_div").text("Way Too High!");
        //completely opaque
            //see if img has the classes for mid-opacity or little opacity
                //if they do then remove them
    } else if(the_guess > the_number && the_guess >= tooHigh && the_guess < wayTooHighRange) {
        $("#response_div").text("Too High");
        //mid-opacity
            //see if img has the class for little opacity
                // if it does, then remove it and add the class for mid-opacity
        //else
            //see if the img does not have the class for mid-opacity
                //if not, then add it
    } else if(the_guess > the_number && the_guess < tooHigh) {
        $("#response_div").text("Getting Warm");
        //little opacity
            //see if img has the class for mid-opacity
                // if it does, then remove it and add the class for little opacity
            //else
                //see if the img does not have the class for little opacity
                 //if not, then add it
    }else if(the_guess < the_number && the_guess < tooLow && the_guess <= wayTooLowRange) {
        $("#response_div").text("Way Too Low!");
        //completely opaque
            //see if img has the classes for mid-opacity or little opacity
                //if they do then remove them
    } else if(the_guess < the_number && the_guess <= tooLow && the_guess > wayTooLowRange ) {
        $("#response_div").text("Too Low!");
        //mid-opacity
            //see if img has the class for little opacity
                // if it does, then remove it and add the class for mid-opacity
            //else
                //see if the img does not have the class for mid-opacity
                    //if not, then add it
    } else if(the_guess < the_number && the_guess >= tooLow) {
        $("#response_div").text("Getting Warm");
        //little opacity
            //see if img has the class for mid-opacity
                // if it does, then remove it and add the class for little opacity
            //else
                //see if the img does not have the class for little opacity
                    //if not, then add it
    }else if (the_guess == the_number ){
        $("#response_div").text("You guessed it!");
        // lamp fades out and genie apears
            // genie says something(new text next to him) and he and text vanish
    } else {
        $("#response_div").text("I'm not sure what you mean.");
        //completely opaque
    }
};

//add click event to the button
$("button").click(function(){
    make_guess();
    $('input').val('');
});