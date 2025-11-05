let rps = 0;
let score = 0;
let highscore = 0;

document.getElementById("button_settings1").style.backgroundColor = "white";
document.getElementById("button_settings1").style.color = "black";
document.getElementById("button_settings1").style.borderColor = "white";

document.getElementById("button_settings2").style.backgroundColor = "white";
document.getElementById("button_settings2").style.color = "black";
document.getElementById("button_settings2").style.borderColor = "white";

document.getElementById("button_settings3").style.backgroundColor = "white";
document.getElementById("button_settings3").style.color = "black";
document.getElementById("button_settings3").style.borderColor = "white";

document.getElementById("button_settings4").style.backgroundColor = "white";
document.getElementById("button_settings4").style.color = "black";
document.getElementById("button_settings4").style.borderColor = "white";

document.getElementById("button_settings5").style.backgroundColor = "white";
document.getElementById("button_settings5").style.color = "black";
document.getElementById("button_settings5").style.borderColor = "white";

document.getElementById("button_settings6").style.backgroundColor = "white";
document.getElementById("button_settings6").style.color = "black";
document.getElementById("button_settings6").style.borderColor = "white";

function Rock(){
    rps = Math.floor(Math.random() * 3) + 1;
    console.log(rps);
    if (rps === 2) {
        document.getElementById("text").innerHTML = "You lost! Bot used paper.";
        score -= 1;
        document.getElementById("score").innerHTML = `score: ${score}`;
    } else if (rps === 3) {
        document.getElementById("text").innerHTML = "You won! Bot used scissors.";
        score += 1;
        document.getElementById("score").innerHTML = `score: ${score}`;
    } else {document.getElementById("text").innerHTML = "Draw! Bot used rock.";}

    if (score > highscore) {
        highscore = score;
        document.getElementById("highscore").innerHTML = `highscore: ${highscore}`;
    }
}

function Paper(){
    rps = Math.floor(Math.random() * 3) + 1;
    console.log(rps);
    if (rps === 3) {
        document.getElementById("text").innerHTML = "You lost! Bot used scissors.";
        score -= 1;
        document.getElementById("score").innerHTML = `score: ${score}`;
    } else if (rps === 1) {
        document.getElementById("text").innerHTML = "You won! Bot used rock.";
        score += 1;
        document.getElementById("score").innerHTML = `score: ${score}`;
    } else {document.getElementById("text").innerHTML = "Draw! Bot used paper.";}

    if (score > highscore) {
        highscore = score;
        document.getElementById("highscore").innerHTML = `highscore: ${highscore}`;
    }
}

function Scissors(){
    rps = Math.floor(Math.random() * 3) + 1;
    console.log(rps);
    if (rps === 1) {
        document.getElementById("text").innerHTML = "You lost! Bot used rock.";
        score -= 1;
        document.getElementById("score").innerHTML = `score: ${score}`;
    } else if (rps === 2) {
        document.getElementById("text").innerHTML = "You won! Bot used paper.";
        score += 1;
        document.getElementById("score").innerHTML = `score: ${score}`;
    } else {document.getElementById("text").innerHTML = "Draw! Bot used scissors.";}

    if (score > highscore) {
        highscore = score;
        document.getElementById("highscore").innerHTML = `highscore: ${highscore}`;
    }
}

function defaultt(){
    document.body.style.backgroundColor = "gray";
    document.body.style.color = "black";

    document.getElementById("button_settings1").style.backgroundColor = "white";
    document.getElementById("button_settings1").style.color = "black";
    document.getElementById("button_settings1").style.borderColor = "white";

    document.getElementById("button_settings2").style.backgroundColor = "white";
    document.getElementById("button_settings2").style.color = "black";
    document.getElementById("button_settings2").style.borderColor = "white";

    document.getElementById("button_settings3").style.backgroundColor = "white";
    document.getElementById("button_settings3").style.color = "black";
    document.getElementById("button_settings3").style.borderColor = "white";

    document.getElementById("button_settings4").style.backgroundColor = "white";
    document.getElementById("button_settings4").style.color = "black";
    document.getElementById("button_settings4").style.borderColor = "white";

    document.getElementById("button_settings5").style.backgroundColor = "white";
    document.getElementById("button_settings5").style.color = "black";
    document.getElementById("button_settings5").style.borderColor = "white";

    document.getElementById("button_settings6").style.backgroundColor = "white";
    document.getElementById("button_settings6").style.color = "black";
    document.getElementById("button_settings6").style.borderColor = "white";
}

function light(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("button_settings1").style.backgroundColor = "white";
    document.getElementById("button_settings1").style.color = "black";
    document.getElementById("button_settings1").style.borderColor = "white";

    document.getElementById("button_settings2").style.backgroundColor = "white";
    document.getElementById("button_settings2").style.color = "black";
    document.getElementById("button_settings2").style.borderColor = "white";

    document.getElementById("button_settings3").style.backgroundColor = "white";
    document.getElementById("button_settings3").style.color = "black";
    document.getElementById("button_settings3").style.borderColor = "white";

    document.getElementById("button_settings4").style.backgroundColor = "white";
    document.getElementById("button_settings4").style.color = "black";
    document.getElementById("button_settings4").style.borderColor = "white";

    document.getElementById("button_settings5").style.backgroundColor = "white";
    document.getElementById("button_settings5").style.color = "black";
    document.getElementById("button_settings5").style.borderColor = "white";

    document.getElementById("button_settings6").style.backgroundColor = "white";
    document.getElementById("button_settings6").style.color = "black";
    document.getElementById("button_settings6").style.borderColor = "white";
}

function dark(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("button_settings1").style.backgroundColor = "black";
    document.getElementById("button_settings1").style.color = "white";
    document.getElementById("button_settings1").style.borderColor = "black";

    document.getElementById("button_settings2").style.backgroundColor = "black";
    document.getElementById("button_settings2").style.color = "white";
    document.getElementById("button_settings2").style.borderColor = "black";

    document.getElementById("button_settings3").style.backgroundColor = "black";
    document.getElementById("button_settings3").style.color = "white";
    document.getElementById("button_settings3").style.borderColor = "black";

    document.getElementById("button_settings4").style.backgroundColor = "black";
    document.getElementById("button_settings4").style.color = "white";
    document.getElementById("button_settings4").style.borderColor = "black";

    document.getElementById("button_settings5").style.backgroundColor = "black";
    document.getElementById("button_settings5").style.color = "white";
    document.getElementById("button_settings5").style.borderColor = "black";

    document.getElementById("button_settings6").style.backgroundColor = "black";
    document.getElementById("button_settings6").style.color = "white";
    document.getElementById("button_settings6").style.borderColor = "black";
}