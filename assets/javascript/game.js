var goalNum =0;
var userScore = 0;
var wins;
var gemVal;
var gemNum = [];
var gems = $("#gem-imgs");
var gameActive = true;

//start game
function game(){
if (gameActive = true) {
    //assign random goal between 19-120 / goalNum
    goalNum = Math.floor(Math.random() * 100 + 19);
    console.log('GoalNum: ', goalNum);

    //assign random numbers to gems bt 1-12 / gemNum
    for (i = 0; i < 4; i++) {
        gemNum[i] = Math.floor(Math.random() * 12 + 1);
    } console.log(gemNum);

    //when clicked, add number to userScore / userNum
    $("#pinkGem").attr("value", gemNum[0]);
    $("#purpleGem").attr("value", gemNum[1]);
    $("#tealGem").attr("value", gemNum[2]);
    $("#whiteGem").attr("value", gemNum[3]);
    console.log('Img Value Check', pinkGem, purpleGem, tealGem, whiteGem);

    //click function for gem
    gems.on('click', '.gem-img', function() {
        gemVal = ($(this).attr("value"));
        gemVal = parseInt(gemVal);
        console.log('Gem Value', gemVal);
        
        userScore += gemVal;
        console.log('Score', userScore);
        $('.goalUpdate').text(goalNum);
        $('.scoreUpdate').text(userScore);
        

        //if userNum = goalNum, then win
        if (userScore === goalNum) {
            // $('.scoreUpdate').text(userScore);
            alert("You win!");
            gameActive = false;
            resetFunction();
        }
        //if userNum > goalNum, then lose
        else if (userScore > goalNum) {
            alert("You lose!!");
            gameActive = false;
            resetFunction();
            }
        });
        
} else {
    resetFunction();
    };
};

game();

//reset game
function resetFunction(){
    gameActive = true; 
    userScore = 0;
    goalNum = 0;
    gemNum =[];
    gems;
    gems.unbind('click');
    game();
    $('.goalUpdate').text(goalNum);
    $('.scoreUpdate').text(userScore);
    };



//JUNK PILE -----------------------------------------------
// gemNum = Math.floor(Math.random() * 10 + 1);
// console.log('GemNum: ', gemNum);
// gemNum1 = Math.floor(Math.random() * 10 + 1);
// console.log('Gem1: ', gemNum1);
// gemNum2 = Math.floor(Math.random() * 10 + 1);
// console.log('Gem2: ', gemNum2);
// gemNum3 = Math.floor(Math.random() * 10 + 1);
// console.log('Gem3: ', gemNum3);
// gemNum4 = Math.floor(Math.random() * 10 + 1);
// console.log('Gem4: ', gemNum4);
