/**
 * Created by rcortez on 10/12/2018.
 */
var picts = ["resources/onceinabluemoon.gif","resources/painlessoperation.gif","resources/tickledpink.gif","resources/topsecret.gif"];
var dashes = " "
var picBArray = [0,0,0,0]
var clue = "";
var yeetus = 0;
var Gold=0;
var Score = 0;
var userID;
var board=[]
var boardscores=[]
var opPosition;
//var userans;
var quesArray=["what is 26th letter of the alphabet","Ulysses S. Grant appears on the front of which denomination of US. currency? Enter answer as $__","Which U.S. president appears on the front of the $2 bill? Enter last name",
    "Which state is called the golden state?","what color is the M is Mcdonalds?","what is last name of POTUS??","what does the f stand for FBI?","Which president (lastname) freed the slaves?",
    "Who was the first person (lastname) to walk on the moon?",
"What was the name of the ship that brought the Pilgrims to New England in 1620?","who said E=mc2?","which is the largest ocean?","who painted Mona Lisa?","Only mammal which can't jump?","Smallest bone in body?",
"who invented electric light bulb?","who invented Television?","what's the hardest rock?", "which river goes through London?", "Is Tomato a fruit or vegetable?","Just like 8 bits are called a byte, what is 4-bit called?",
"what is greater than Terabyte?","what is greater than Petabyte?","Who is father of computer?","Currency of Japan?","Smallest type of tree in the world?","what is the aloha state?","How many players make up a basketball team?",
    "What is full of holes but can still hold water?","What has hands but no arms","“I’d buy that for a dollar”, is a catchphrase from what 1987 action movie set in Detroit, Michigan, in the near future.","What was the first capital city of the United States?",
"In the children’s books about a 25 foot tall red dog, what is the name of the dog?","The Bill of Rights contains how many of the first amendments to the United States Constitution?","In the movie “Back to the Future”, what speed did the DeLorean need to reach in order to achieve time travel? Enter just the number in mph",
"Who is the only athlete ever to play in a Super Bowl and a World Series? Enter last name","Which planet in our solar system has an axis that is tilted by 98 degrees?"]
var ansArray=["z","$50","jefferson","california","yellow","trump","federal","lincoln","armstrong","mayflower","einstein","pacific","vinci","elephant","ear","edison","baird","diamond","thames","fruit","nibble","petabyte",
    "zetabyte","babbage","yen","bonsai","hawaii","5","sponge","clock","robocop","philadelphia","clifford","10","88","sanders","uranus"]
var quesBArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

var BArray = []
var picCounter = 0;
var wrongans = 8;
var pickImg=0;
var pickQues=0;
var quesCounter=0;
var hintcounter;
var scoreMap = new Map();
var playerScore=[];
var sortScore=[];
var pi=0;
var twox=false;

function pickImage()
{
    var pick=true;
    while(pick)
    {
        if(picCounter>=picts.length)
        {
            alert("Completed all the levels")
            return 1;
        }
        pickImg = Math.floor(Math.random() * picts.length);
        if(picBArray[pickImg]==0)
        {
            picCounter++;
            picBArray[pickImg]=1;
           // alert(pickImg+"->ASfter SET="+picBArray);
            pick=false;
            document.getElementById("pict").style.backgroundImage = "url(" + (picts[pickImg]) + ")"
        }

    }
    return 0;
}


function pickEasyQuestions()
{
    var pick=true;
    while(pick)
    {
        if(quesCounter>=quesArray.length)
        {
            alert("Completed all the levels")
            return 1;
        }
        pickQues = Math.floor(Math.random() * quesArray.length);
        if(quesBArray[pickQues]==0)
        {
            //quesCounter++;
            //quesBArray[pickQues]=1;
          //  alert(pickQues+"->ASfter SET="+quesBArray);
            pick=false;
        }

    }
    return 0;
}

function start() {
    var dashes = " "
    var yee = Math.floor(Math.random() * picts.length);
   // alert(yee)
  //  alert(picCounter);

    var val = pickImage();
    if(val==1)
    {
        alert("Game Over!");
        return;
    }

    clue = picts[pickImg].substring(picts[pickImg].indexOf("/") + 1, picts[pickImg].indexOf("."))
  //  alert(clue)
    for(i=0;i<clue.length;i++){
        dashes = dashes + "_ "
        BArray.push(0)
    }
  //  alert(picBArray)
    document.getElementById("word").innerHTML = dashes
}
function twoX(){
    if(Gold<750){
        alert("Need to earn at least 750 gold for a 2X multiplier")
        return;
    }
    else{
        var xx= prompt("You sure? - you want to lose 750 gold for 2x multiplier?(y/n)")
        if(xx=="y")
        {
            Gold=Gold-750;
            document.getElementById("gold").innerHTML = Gold
            twox=true;
            alert("2x multiplied kept into account. Will be initiated when calculating total score at the end of round.")
        }
        else
        {
            twox=false;
        }
    }
}

function hint(){
 //   alert("In HINT() My PICK="+pickImg+"  And Gold="+Gold);
    if(pickImg==0) {
        if(Gold<100)
        {
            alert("Need at least 100 Gold for a hint!")
            return;
        }
        Gold = Gold - (100*hintcounter);
        document.getElementById("gold").innerHTML = Gold
        Score = Score - 100
        document.getElementById("score").innerHTML = Score
    }
    else if(pickImg==1)
    {
        if(Gold<200)
        {
            alert("Need at least 200 Gold for a hint!")
            return;
        }
        Gold = Gold - (200*hintcounter);
        document.getElementById("gold").innerHTML = Gold
        Score = Score - 100
        document.getElementById("score").innerHTML = Score
    }
    else if(pickImg==2)
    {
        if(Gold<250)
        {
            alert("Need at least 250 Gold for a hint!")
            return;
        }
        Gold = Gold - (300*hintcounter);
        document.getElementById("gold").innerHTML = Gold
        Score = Score - 100
        document.getElementById("score").innerHTML = Score
    }
    else
    {
        if(Gold<300)
        {
            alert("Need at least 300 Gold for a hint!")
            return;
        }
        Gold = Gold - (400*hintcounter);
        document.getElementById("gold").innerHTML = Gold
        Score = Score - 100
        document.getElementById("score").innerHTML = Score
    }

        document.getElementById("gold").innerHTML = Gold;
        var yeet = Math.floor(Math.random() * clue.length)
        while (BArray[yeet] == 1) {
            yeet = Math.floor(Math.random() * clue.length)
        }
        dashes = ""
        //alert(clue[yeet])
        //alert (yeet)
        for (i = 0; i < clue.length; i++) {
            if (BArray[i] == 0) {
                if (yeet == i) {
                    dashes = dashes + clue[i]
                    BArray[i] = 1
                }
                else {
                    dashes = dashes + "_ "
                }
            }
            else {
                dashes = dashes + clue[i]
            }
        }

        document.getElementById("word").innerHTML = dashes
    hintcounter+0.5

}

function quest(btnID,value){
//    yeetus = Math.floor(Math.random() * EasyQuestions1.length)
    //document.getElementById(btnID).style.visibility= "hidden"

    if(pickEasyQuestions()==1)
    {
        alert("You completed all levels!!! - Game Over!")
        return;
    }

    userans=prompt(quesArray[pickQues]);
    Qorrect(value,btnID)


}

function Qorrect(diff,btnIDD){
    if (userans == ansArray[pickQues]) {
        quesBArray[pickQues]=1;
        quesCounter++;
        document.getElementById(btnIDD).style.visibility = "hidden"
        alert("correct")
        getGold(diff)
    } else {
        alert("incorrect")
        Score = Score - 100
        document.getElementById("score").innerHTML = Score
        //quest(diff,btnIDD)
    }


}

function getGold(goldval){
    document.getElementById("points").innerHTML = goldval
    Score=Score + goldval

    if(pickImg==1) {
        Gold = Gold + (goldval * 2)
    }
    else if(pickImg==2)
    {
        Gold = Gold + (goldval * 1.6)
    }
    else if(pickImg==3)
    {
        Gold = Gold + (goldval * 0.5)
    }
    else
    {
        Gold = Gold + (goldval * 0.75)
    }
    document.getElementById("gold").innerHTML = Gold
    Score = Score + Gold
    document.getElementById("score").innerHTML = Score
}

function resetAll(){
    var usrconfirmation = prompt("Are you sure you want to reset all data? ALL PROGRESS WILL BE LOST!");
    if(usrconfirmation=="yes") {
        alert("Request to reset accepted")
        picts = ["resources/onceinabluemoon.gif","resources/painlessoperation.gif","resources/tickledpink.gif","resources/topsecret.gif"];
        dashes = " "
        picBArray = [0,0,0,0]
        clue = "";
        yeetus = 0;
        Gold=0;
        Score = 0;
        userID;
        board=[]
        boardscores=[]
        opPosition;
        quesBArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

        BArray = []
        picCounter = 0;
        wrongans = 8;
        pickImg=0;
        pickQues=0;
        quesCounter=0;
        hintcounter;
        scoreMap = new Map();
        playerScore=[];
        sortScore=[];
        pi=0;
        twox=false;
        document.getElementById("pict").style.backgroundImage = "url(resources/start.jpg)"
        document.getElementById("b1").style.visibility = "visible"
        document.getElementById("b2").style.visibility = "visible"
        document.getElementById("b3").style.visibility = "visible"
        document.getElementById("b4").style.visibility = "visible"
        document.getElementById("b5").style.visibility = "visible"
        document.getElementById("b6").style.visibility = "visible"
        document.getElementById("b7").style.visibility = "visible"
        document.getElementById("b8").style.visibility = "visible"
        document.getElementById("b9").style.visibility = "visible"
        document.getElementById("gold").innerHTML = ""
        document.getElementById("score").innerHTML = ""
        document.getElementById("board1").innerHTML = ""
        document.getElementById("word").innerHTML = ""
        document.getElementById("points").innerHTML = ""
        alert("User Data has been reset")
    }
    else{
        alert("Request to reset declined")
    }
}

function guessPuzzle(){
    var userguess = prompt("Guess it...")
    if(userguess==clue){
        alert("NICE JOB")
        if(pickImg==0){
            Score = Score + 1000
        }
        else if(pickImg==1){
            Score = Score + 1250
        }
        else if(pickImg==2){
            Score = Score + 1500
        }
        else if(pickImg==3){
            Score = Score + 1750
        }
        document.getElementById("score").innerHTML = Score
        leaderboard(Score)
    }
    else{
        alert("Thats not it...")
        //wrongans = wrongans/2
        //Gold = Gold/wrongans
        //document.getElementById("gold").innerHTML = Gold
        Score=Score - 200
        document.getElementById("score").innerHTML = Score
    }
}

function leaderboard(Score) {
    userID = prompt("Enter name to mark your score!")
    board.push("\n" + userID + ":" + Score)

    /**
    alert(board)
    opPosition = board.indexOf(":")
    for (i = 0; i <= 2; i++) {
        boardscores.push(board.substring(opPosition+1, board.length))
        alert(boardscores)
    }
    boardscores.push(Score)
    board.sort(function(a, b){return b - a}) //Thanks to W3Schools.com
    alert(board)
    */
    if(twox)
    {
        Score = Score * 2;
        alert("Score multiplier activated = = = Multiplied by 2")
    }
    scoreMap.set(Score,userID);
    sortScore.push(Score);
  //  alert("Almost Here"+scoreMap.toString())

    var iterator = scoreMap.keys();
  //  alert(scoreMap.size);
    for(var i=0;i<scoreMap.size;i++)
    {
        var key=iterator.next().value;

       // alert("KEY - Score="+key+" Vale Name="+scoreMap.get(key))
    }
  //  alert("DONE!!!")

    sortScore.sort(function(a, b){return b - a})
  //  alert(sortScore);
    var topScorers="TOP Scorers LIST:\n";
    for(var j=0;j<sortScore.length;j++)
    {
      //  alert("Sorted Scores List="+sortScore[j]+" PLayerName="+scoreMap.get(sortScore[j]))
        topScorers = topScorers + "[SCORE="+sortScore[j]+", PLAYER="+scoreMap.get(sortScore[j])+"]\n"
    }
  //  alert(topScorers);



    /**playerScore[pi]=userID;
    pi++;
    playerScore[pi]=Score;
    pi++;
    var topScore;
    var topCounter;
    alert(playerScore)
    if(playerScore.length==2){
        alert("Top Scorer="+playerScore[0]+" And SCORE="+playerScore[1])
    }
    else {
        for (var i = 1; i < playerScore.length-1; i += 2) {
            alert("SCORE [i]"+playerScore[i]+" AND [i+2]="+playerScore[i+2])
            if (playerScore[i] >= playerScore[i + 2]) {
                topScore = playerScore[i];
                topCounter = i;
                alert("HIGH " + topScore)
            }
            else {
                topScore = playerScore[i + 2];
                topCounter = i + 2;
                alert("HIGH is NEXT " + topScore)
            }
        }
        alert("Top Scorer="+playerScore[topCounter-1]+" And SCORE="+playerScore[topCounter])
    }
/**
    for(i=1;i<playerScore.length;i+=2)
    {
        sortScore[i-1]=playerScore[i]
    }
    alert("Sort Score Array"+sortScore);
    sortScore.sort(function(a, b){return b - a})
    alert("Sorted Score====="+sortScore)
*/

    document.getElementById("board1").innerHTML = topScorers
    Score=0
    document.getElementById("score").innerHTML = Score
    document.getElementById("b1").style.visibility = "visible"
    document.getElementById("b2").style.visibility = "visible"
    document.getElementById("b3").style.visibility = "visible"
    document.getElementById("b4").style.visibility = "visible"
    document.getElementById("b5").style.visibility = "visible"
    document.getElementById("b6").style.visibility = "visible"
    document.getElementById("b7").style.visibility = "visible"
    document.getElementById("b8").style.visibility = "visible"
    document.getElementById("b9").style.visibility = "visible"
    start()
}
