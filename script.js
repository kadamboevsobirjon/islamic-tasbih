//Tasbih - counter program | Copyright: Sobirjon Kadamboev 

const decreaseBTN = document.getElementById("decreaseBTN");
const resetBTN = document.getElementById("resetBTN");
const increaseBTN = document.getElementById("increaseBTN");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBTN.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBTN.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBTN.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
