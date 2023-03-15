function go(){
var gamer1=document.getElementById("gamer1").value;
var gamer2=document.getElementById("gamer2").value;
document.getElementById("hide").style.display = "none";


// For rule rock wins against scissors.
if(gamer1=="rock" && gamer2=="scissors") {
document.getElementById("span1").innerHTML = "Gamer 1 is the winner!";
} else if(gamer2=="rock" && gamer1=="scissors") {
document.getElementById("span1").innerHTML = "Gamer 2 is the winner!";
}

// For rule Scissors win against paper.

else if(gamer1=="scissors" && gamer2=="paper") {
document.getElementById("span1").innerHTML = "Gamer 1 is the winner!";
} else if(gamer2=="scissors" && gamer1=="paper") {
document.getElementById("span1").innerHTML = "Gamer 2 is the winner!";
}

// For rule Paper wins against rock.

else if(gamer1=="paper" && gamer2=="rock") {
document.getElementById("span1").innerHTML = "Gamer 1 is the winner!";
} else if(gamer2=="paper" && gamer1=="rock") {
document.getElementById("span1").innerHTML = "Gamer 2 is the winner!";
}

// Exceptions

else {
document.getElementById("span1").innerHTML = "No one won!";
}











document.getElementById("show").style.display = "block";
}
