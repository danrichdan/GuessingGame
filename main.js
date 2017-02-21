var the_number = null;

$(document).ready(function() {
    the_number = pick_number();
    hideElements();
    glimpseGenie();

});

function assignClickEvent() {
    $("button").on('click',function(){
        make_guess();
        $('input').val('');
    });
};

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
        //game area not immediately viewable on mobile, so added the anchor
        $('a').attr('href','#game');
        assignClickEvent();
    },6000);
};

//when the lamp is clicked or tapped
$('img[src*="magic_lamp"]').on("click", function() {
    $("#game").scrollTop();
    //Show input field and button
    $('input').fadeIn();
    $('button').fadeIn();
});

function pick_number() {
    var random_number;
    random_number = Math.floor((Math.random() * 10) + 1);
    console.log("random_number : ",random_number);
    return random_number;
};


// Three functions that add classes and remove classes which increase or decrease the magic lamp's opacity
// depending on how warm or cold there guesses are
function completelyOpaque() {
    //see if img has the classes for mid-opacity or little opacity
    if($('img[src*="magic_lamp"]').hasClass('mid-opacity')) {
        //if they do then remove them
        $('img[src*="magic_lamp"]').removeClass('mid-opacity');
    } else if($('img[src*="magic_lamp"]').hasClass('low-opacity')) {
        $('img[src*="magic_lamp"]').removeClass('low-opacity');
    };
};

function midOpacity() {
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
};

function lowOpacity() {
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
};

function correctGuess() {
    $("#response_div").text("You guessed it!");
    // lamp fades out and
    $('img[src*="magic_lamp"]').fadeOut().addClass('fadeOut');
    setTimeout(function(){
        //genie apears
        $('img[src*="genie"]').fadeIn().toggleClass('fadeIn');
    },1000);
    setTimeout(function(){
        //Genie text apears
        $('#response_div').fadeIn().toggleClass('fadeIn').text("Uh, yeah... Sorry... I'm not a wish granting " +
            "Genie....");
    },2000);
    // genie vanishes
    setTimeout(function() {
        $('img[src*="genie"]').fadeOut(1000).toggleClass('fadeOut');
    }, 5000);
    setTimeout(function(){
        //lamp apears
        $('img[src*="magic_lamp"]').fadeIn().toggleClass('fadeIn');
    },6000);
    completelyOpaque();
};

function make_guess() {
    var the_guess = $('#guess_input').val();
    the_guess = parseInt(the_guess);
    var wayTooHighRange = the_number + 5;
    var wayTooLowRange = the_number - 5;
    var tooHigh = the_number + 2;
    var tooLow = the_number - 2;
    console.log('Here is the guess : ',the_guess);
    console.log('Here is the wayTooHighRange : ', wayTooHighRange);

    if(the_guess > the_number && the_guess > tooHigh && the_guess >= wayTooHighRange) {
        $("#response_div").text("Way Too High!");
        completelyOpaque();

    } else if(the_guess > the_number && the_guess >= tooHigh && the_guess < wayTooHighRange) {
        $("#response_div").text("Too High");
        midOpacity();

    } else if(the_guess > the_number && the_guess < tooHigh) {
        $("#response_div").text("Pretty Close.");
        lowOpacity();

    } else if(the_guess < the_number && the_guess < tooLow && the_guess <= wayTooLowRange) {
        $("#response_div").text("Way Too Low!");
        completelyOpaque();

    } else if(the_guess < the_number && the_guess <= tooLow && the_guess > wayTooLowRange ) {
        $("#response_div").text("Too Low!");
        midOpacity();

    } else if(the_guess < the_number && the_guess >= tooLow) {
        $("#response_div").text("Pretty Close.");
        lowOpacity();

    } else if (the_guess == the_number ){
        correctGuess();

    } else {
        $("#response_div").text("I'm not sure what you mean.");
        completelyOpaque();
    }
};

