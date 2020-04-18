let dictionary = {
    "65":"A",
    "66":"B",
    "90":"Z"
};

let emoji = [
    "animal",
    "cat",
    "passion"
];

let array = []
let count = 0;
let flag = true;
let charOpacity = 0;
let wrapper = document.getElementById("wrapper");
let beforeEnter = document.getElementById("beforeEnter");
document.addEventListener("keydown",logKey);

window.onload = function() {
    shuffle();
    console.log(emoji);
    charCount();
};

function charCount() {
    for (var i = 0; emoji[count].length > i; i ++){
        array.push(emoji[count].charAt(i));
        let charSpan = document.createElement("span");
        charSpan.innerHTML = array[i];
        charSpan.setAttribute("id",i);
        wrapper.appendChild(charSpan);
    }
}

function logKey(e) {
    if(flag){
        if(typeof dictionary[e.keyCode] == "string"){
            beforeEnter.innerHTML += dictionary[e.keyCode].toLowerCase() + " ";
        }
        if(array[0].toUpperCase() == dictionary[e.keyCode]){
            let getCharSpan = document.getElementById(charOpacity);
            getCharSpan.style.opacity = 0.5;
            charOpacity++;
            array.shift();
            if(array.length == 0){
                wrapper.innerHTML = "";
                charOpacity = 0;
                if (count == emoji.length -1){
                    alert("END");
                    flag = false;
                }else{
                    count++;
                    charCount();
                }
            }
        }
    }
}

function shuffle() {
    for (var i = emoji.length -1; i > 0; i--){
        let random = Math.floor(Math.random() * (i + 1));
        let tmp = emoji[i];
        emoji[i] = emoji[random];
        emoji[random] = tmp;
     }
}
