var questions = [];
questions[0] =
    'You and you\'re significant other are walking from a party when she says "Hey, lets take a shortcut through this dark alley with the cool needles" You reply'
questions[1] =
    'As you walk pass the alley you notice this funky looking cat with brown and black stripes. Your other..."OMG look at the pretty cat!"',
    questions[2] =
    'You arrive at the door, Your other:\'I had a great time and guess what I won the lottery!';
var choices = [];
choices[0] = [' Sounds AWESOME, Yolo!',
        ' Umm, doesn\'t seem like a good idea but, ok.',
        ' I think we need to see other people'
    ],
    choices[1] = ['I know right! Lets pet him',
        'I am really serious about seeing other people...and FYI thats a raccoon',
        'You are sooo stupid but hot, lets work it out'
    ],
    choices[2] = ['Will you marry me?!',
        'Nah, I have someone waiting for me at my place so got to go.',
        'PASS OUT'
    ];
var answers = [2, 1, 0];
var score = 0;
var progression = 0;
var listQuestion = function() {
    if (progression < questions.length) {
        document.getElementById('myDiv1').innerHTML = '';
        document.getElementById('myDiv2').innerHTML = '';
        document.getElementById('myDiv4').innerHTML = '';
        if (progression < questions.length) {
            document.getElementById("myDiv1").innerHTML = '<p>' + questions[
                progression] + '</p>';
            for (k = 0; k < choices[progression].length; k++) {
                document.getElementById("myDiv2").innerHTML +=
                    '<p><input type="radio" name="questionchoice"' +
                    ' value="' + k + '">' + choices[progression][k] +
                    '</p>';
            }
        }
        return true;
    } else {
        alert('End of quiz');
        return false;
    }
};

function getRBtnName(GrpName) {
    var sel = document.getElementsByName(GrpName);
    var fnd = -1;
    var str = '';
    for (var i = 0; i < sel.length; i++) {
        if (sel[i].checked == true) {
            str = sel[i].value;
            fnd = i;
        }
    }
    return str;
}
var getRadioValue = function() {
    var msg = 'Live another day!';
    var picked = getRBtnName('questionchoice');
    if (picked == answers[progression]) {
        score += 1;
    } else {
        msg = 'Natural selection at its best :`(.'
    }
    document.getElementById("myDiv4").innerHTML = msg;
};
var whatIsScore = function() {
    alert('Score: ' + score);
    return score;
}
window.onload = function() {
    listQuestion();
}
