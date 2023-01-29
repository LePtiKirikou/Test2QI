var wrongAnswers = 0
var correctAnswers = 0;
var currentQuestion = 1;
var finalIQ = 100;
var timeStart = Date.now()
function checkAnswer(questionNumber) {
	var timeSpent = Math.round((Date.now() - timeStart)/1000);
    var inputValue = document.getElementById("question" + questionNumber + "input").value;
    var correctAnswer;
    switch (questionNumber) {
        case 1:
            correctAnswer = 5;
			averageTime = 30;
            break;
        case 2:
            correctAnswer = 5460;
			averageTime = 60;
            break;
        case 3:
            correctAnswer = 4;
			averageTime = 60;
            break;
        case 4:
            correctAnswer = "bougie";
			averageTime = 45;
            break;
        case 5:
            correctAnswer = 3;
			averageTime = 30;
            break;
        case 6:
            correctAnswer = 5040;
			averageTime = 45;
            break;
        case 7:
            correctAnswer = 5050;
			averageTime = 45;
            break;
        case 8:
            correctAnswer = 23124110;
			averageTime = 45;
            break;
		case 9:
			correctAnswer = "YYP";
			averageTime = 90;
			break;
		case 10:
			correctAnswer = 0;
			averageTime = 90;
			break;
		case 11:
			correctAnswer = 30;
			averageTime = 45;
			break;
		case 12:
			correctAnswer = 1;
			averageTime = 30;
			break;
		case 13:
			correctAnswer = 4;
			averageTime = 45;
			break;
		case 14:
			correctAnswer = 8;
			averageTime = 60;
			break;
		case 15:
			correctAnswer = 60;
			averageTime = 45;
			break;
		case 16:
			correctAnswer = 2;
			averageTime = 45;
			break;
		case 17:
			correctAnswer = 2;
			averageTime = 30;
			break;
		case 18:
			correctAnswer = 2;
			averageTime = 120;
			break;
		case 19:
			correctAnswer = 4;
			averageTime = 60;
			break;
		case 20:
			correctAnswer = 57;
			averageTime = 180;
			break;
    }
 
    if (inputValue == correctAnswer) {
        document.getElementById("result" + questionNumber).innerHTML = "Correct !";
        correctAnswers++;
		if (timeSpent < 13) {
			finalIQ = finalIQ + 2;
		}
		else if (timeSpent < averageTime) {
			var ratio = averageTime/timeSpent;
			if ((ratio/2) >= 2){
				finalIQ = finalIQ + 5;
			}
			else {
				finalIQ = finalIQ + 3 + Math.round(ratio/2);
			}
		}
		else if (Math.round(timeSpent) == averageTime) {
			finalIQ = finalIQ + 4;
		}
		else {
			var ratio = timeSpent/averageTime;
			if ((ratio/2) >= 2){
				finalIQ = finalIQ + 3;
			}
			else {
				finalIQ = finalIQ + 4 - Math.round(ratio/2);
			}
		}
    }   
	else {
        document.getElementById("result" + questionNumber).innerHTML = "Incorrect !";
        wrongAnswers = wrongAnswers + 1;
		if (timeSpent < averageTime) {
			var ratio = averageTime/timeSpent;
			if ((ratio/2) >= 2){
				finalIQ = finalIQ - 4;
			}
			else {
				finalIQ = finalIQ - (2 + Math.round(ratio/2));
			}
		}
		else if (Math.round(timeSpent) == averageTime) {
			finalIQ = finalIQ - 3;
		}
		else {
			var ratio = timeSpent/averageTime;
			if ((ratio/2) >= 2){
				finalIQ = finalIQ - 2;
			}
			else {
				finalIQ = finalIQ - (4 - Math.round(ratio/2));
			}
		}
	}
    document.getElementById("submit" + questionNumber).style.display = "none";
    document.getElementById("next" + questionNumber).style.display = "block";
}

function nextQuestion(questionNumber) {
	timeStart = Date.now()
    document.getElementById("question" + questionNumber).style.display = "none";
    currentQuestion++;
    if (currentQuestion <= 20) {
        document.getElementById("question" + currentQuestion).style.display = "block";
    } else {
        document.getElementById("finalResult").innerHTML = "Vous avez un QI de " + finalIQ + "!";
        document.getElementById("finalResult").style.display = "block";
    }
}