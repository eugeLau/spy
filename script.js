
// click event, listen to what the user has clicked
// listen clicked answer then add value to an empty array
// once clicked complete button compare the new array and see which value is most common. 
// add the totally amount of the most occured spy 
// display the results for the 

$(function(){
console.log("it works!")

    //event listener on submit button!
    $('form').on('submit', function(e){
        e.preventDefault();
        // console.log('form submitted!');
        

        //record what did the user answered and store the value of the answer
        const answerQuestionOne = $('input[name=questionOne]:checked').val();
        const answerQuestionTwo = $('input[name=questionTwo]:checked').val();
        const answerQuestionThree = $('input[name=questionThree]:checked').val();
        const answerQuestionFour = $('input[name=questionFour]:checked').val();
        const answerQuestionFive = $('input[name=questionFive]:checked').val();
        
        //empty array to store the users answers
        const answerArray = [];

        //push all user's answer into an array
        answerArray.push(answerQuestionOne, answerQuestionTwo, answerQuestionThree, answerQuestionFour, answerQuestionFive);

        // console.log(answerArray);

        // find the most appeared user choice 
        var less = 1;
        var most = 0;
        var item = [];

        //if all the answers doesn't equal to undefined then you can continue
        if (answerQuestionOne != undefined && answerQuestionTwo != undefined && answerQuestionThree != undefined && answerQuestionFour != undefined && answerQuestionFive != undefined) {
            
            for(var i = 0; i < answerArray.length; i++) {
                for (var j=i; j< answerArray.length; j++) {
                    if (answerArray[i] == answerArray[j]) {
                        most = most + 1; 
                        // console.log(most); 
                    }  
                    if (less<most){
                        less = most;
                        item = answerArray[i];
                    }
                    //final display
                }
                most=0;
                
                
            } //console.log(item);

            // Once everything has been calculated, log all results
            if(item === 'misunderstood') {
                console.log('misunderstood');
                $('.results').html(`<img src="images/johnnyEnglish.jpg" alt=""><p>You’re a focused and dedicated individual who puts a lot of hard work when it’s needed. You are very innovative and resourceful and sometimes even fall into the bad guys’ trap – but you will always find a way to get out of it.</p>`);
                $('.playAgainSection').css("display", "block");
                $('form').css("display", "none");
                $('header').css("padding", "5%");
                $('h1').css("width", "80%");
                $('.headerText').css("display", "none");
                $('.start').css("display", "none");
                $('.results').css("border", "1px solid white");
            } else if (item === 'curious'){
                console.log('curious');
                $('.results').html(`<img src="images/manFromUncle.jpg" alt=""><p>You’re a bit of a jokester and you think you’re the best when doing things solo, but secretly you’ll never admit that you work best in a duo. You do what is right by the book and is what all that matters.</p>`);
                $('.playAgainSection').css("display", "block");
                $('form').css("display", "none");
                $('header').css("padding", "5%");
                $('h1').css("width", "80%");
                $('.headerText').css("display", "none");
                $('.start').css("display", "none");
                $('.results').css("border", "1px solid white");
            } else if (item === 'classy') {
                console.log('classy');
                $('.results').html(`<img src="images/kingsman.jpg" alt=""><p>Being a gentleman has always been your first priority but doesn’t get in the way of your job. No matter how physical the situation gets, not a strand of hair is out of place. You’re one classy spy.</p>`);
                $('.playAgainSection').css("display", "block");
                $('form').css("display", "none");
                $('header').css("padding", "5%");
                $('h1').css("width", "80%");
                $('.headerText').css("display", "none");
                $('.start').css("display", "none");
                $('.results').css("border", "1px solid white");
            } else if (item === 'funny') {
                console.log('funny');
                $('.results').html(`<img src="images/susanCooper.jpg" alt=""><p>You might be a little bit clumsy, dropping your weapon, getting caught by your attire, or be underestimated – but having sad that, you’re lots of fun! Most importantly you complete your missions.</p>`);
                $('.playAgainSection').css("display", "block");
                $('form').css("display", "none");
                $('header').css("padding", "5%");
                $('h1').css("width", "80%");
                $('.headerText').css("display", "none");
                $('.start').css("display", "none");
                $('.results').css("border", "1px solid white");
            }else {
                console.log('adventure');
                $('.results').html(`<img src="images/jamesBond.jpg" alt=""><p>You’re a fist class spy. When you walk into the room, women want to be with you and the men want to be you. You know your craft very well, nothing to worry about.</p>`);
                $('.playAgainSection').css("display", "block");
                $('form').css("display", "none");
                $('header').css("padding", "5%");
                $('h1').css("width", "80%");
                $('.headerText').css("display", "none");
                $('.start').css("display", "none");
                $('.results').css("border", "1px solid white");
            }
        }else {
            alert('Please answer all questions');
        };

    });

    //click on each label and change the out look to let user know they have chosen their answer
    $('label').on('click', function () {
        $(this).addClass("active").
            siblings("fieldset .active").removeClass("active");

        $('html, body').animate({
            scrollTop: $($(this).data('href')).offset().top
        }, 800);
    });

    //when click on Play again. The whole game resets
    $('.reset').on('click', function () {
        location.reload();
        $('form').css("display", "block");
    })

    //when the button is clicked the timer will start!
    $('.start').on('click', function () {
        // console.log('hi');

        //set total amount of seconds 
        var seconds = 140;

        // start the countdown of seconds.
        var countdown = window.setInterval(function () {
            $('span').html(`<h3 class="secondNum">${seconds}<h3><p class="secondText">seconds Left!<p>`);
            seconds = seconds - 1;
            // console.log(seconds);

            // if there is 10 seconds left, timer will show
            if (seconds < 15) {
                $('.timer').css("display", "block");
            }

            //if the timer reaches 0, fail message will show up
            if (seconds < 0) {
                seconds = 0;
                $('.timer').css("display", "none");
                $('.fail').css("display", "block");
                $('form').css("display", "none");
                $('header').css("padding", "5%");
                $('h1').css("width", "80%");
                $('.headerText').css("display", "none");
                $('.start').css("display", "none");
            }

        }, 1000);

        $('form').on('submit', function () {
            clearInterval(countdown);
            // $('span').css("display", "none");
        });
    });


    //when you press the restart button it'll send you back to the form

    $('.retake').on('click', function () {
        location.reload();
        $('form').css("display", "block");
        $('.fail').css("display", "none");
    });

    
});
