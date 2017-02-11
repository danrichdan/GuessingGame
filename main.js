var the_number = null;

//CREATE FUNCTIONS FOR EACH SCENARIO IN GUESS
//completelyOpaque(), midOpacity(), lowOpacity()
//remove excess code
//remove click handler from magic lamp on doc ready
//add click handler to magic lamp after everything has faded in and out
//after win, add button to play again?
//either change the range from 20 to 10 and the other values too
// OR come up with a way of saying warmer, colder, red hot, with each new guess
//maybe store the value of each guess? or just the first
// start with a null value
// Styling issues with the height of the image div and the two different images
// also if the text is the same, "getting Warm" from one guess to the next,
//have the previous one dissappear and then the new one reapear


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
};

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
        if($('img[src*="magic_lamp"]').hasClass('mid-opacity')) {
            //if they do then remove them
            $('img[src*="magic_lamp"]').removeClass('mid-opacity');
        } else if($('img[src*="magic_lamp"]').hasClass('low-opacity')) {
            $('img[src*="magic_lamp"]').removeClass('low-opacity');
        };
    } else if(the_guess > the_number && the_guess >= tooHigh && the_guess < wayTooHighRange) {
        $("#response_div").text("Too High");
        //mid-opacity
        //see if the img does not have the class for mid-opacity
        if(!$('img[src*="magic_lamp"]').hasClass('mid-opacity')) {
            //if not, then add it
            $('img[src*="magic_lamp"]').addClass('mid-opacity');
        }
        //see if img has the class for low opacity
        if($('img[src*="magic_lamp"]').hasClass('low-opacity')) {
        // if it does, then remove it
            $('img[src*="magic_lamp"]').removeClass('low-opacity');
        };
    } else if(the_guess > the_number && the_guess < tooHigh) {
        $("#response_div").text("Getting Warm");
        //little opacity
        //see if the img does not have the class for low-opacity
        if(!$('img[src*="magic_lamp"]').hasClass('low-opacity')) {
            //if not, then add it
            $('img[src*="magic_lamp"]').addClass('low-opacity');
        }
            //see if img has the class for mid-opacity
        if($('img[src*="magic_lamp"]').hasClass('mid-opacity')) {
            // if it does, then remove it
            $('img[src*="magic_lamp"]').removeClass('mid-opacity');
        };

    }else if(the_guess < the_number && the_guess < tooLow && the_guess <= wayTooLowRange) {
        $("#response_div").text("Way Too Low!");
        //completely opaque
        //see if img has the classes for mid-opacity or little opacity
        if($('img[src*="magic_lamp"]').hasClass('mid-opacity')) {
            //if they do then remove them
            $('img[src*="magic_lamp"]').removeClass('mid-opacity');
        } else if($('img[src*="magic_lamp"]').hasClass('low-opacity')) {
            $('img[src*="magic_lamp"]').removeClass('low-opacity');
        };
    } else if(the_guess < the_number && the_guess <= tooLow && the_guess > wayTooLowRange ) {
        $("#response_div").text("Too Low!");
        //mid-opacity
        //see if the img does not have the class for mid-opacity
        if(!$('img[src*="magic_lamp"]').hasClass('mid-opacity')) {
            //if not, then add it
            $('img[src*="magic_lamp"]').addClass('mid-opacity');
        }
        //see if img has the class for low opacity
        if($('img[src*="magic_lamp"]').hasClass('low-opacity')) {
            // if it does, then remove it
            $('img[src*="magic_lamp"]').removeClass('low-opacity');
        };
    } else if(the_guess < the_number && the_guess >= tooLow) {
        $("#response_div").text("Getting Warm");
        //little opacity
        //see if the img does not have the class for low-opacity
        if(!$('img[src*="magic_lamp"]').hasClass('low-opacity')) {
            //if not, then add it
            $('img[src*="magic_lamp"]').addClass('low-opacity');
        }
        //see if img has the class for mid-opacity
        if($('img[src*="magic_lamp"]').hasClass('mid-opacity')) {
            // if it does, then remove it
            $('img[src*="magic_lamp"]').removeClass('mid-opacity');
        };
    }else if (the_guess == the_number ){
        $("#response_div").text("You guessed it!");
        // lamp fades out and
        $('img[src*="magic_lamp"]').fadeOut().addClass('fadeOut');
        setTimeout(function(){
            //genie apears
            $('img[src*="genie"]').fadeIn().toggleClass('fadeIn');
        },1000);
        setTimeout(function(){
            //genie apears
            $('#response_div').fadeIn().toggleClass('fadeIn').text("Uh, yeah... Sorry... I'm not a wish granting " +
                "Genie....");
        },2000);
            // genie says something(new text next to him) and he and text vanish
        setTimeout(function() {
            $('img[src*="genie"]').fadeOut(1000).toggleClass('fadeOut');
        }, 5000);
    } else {
        $("#response_div").text("I'm not sure what you mean.");
        //completely opaque
        //see if img has the classes for mid-opacity or little opacity
        if($('img[src*="magic_lamp"]').hasClass('mid-opacity')) {
            //if they do then remove them
            $('img[src*="magic_lamp"]').removeClass('mid-opacity');
        } else if($('img[src*="magic_lamp"]').hasClass('low-opacity')) {
            $('img[src*="magic_lamp"]').removeClass('low-opacity');
        };
    }
};

//add click event to the button
$("button").click(function(){
    make_guess();
    $('input').val('');
});