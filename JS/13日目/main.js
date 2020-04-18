function countApp() {
    let count = 0;
    return function plusCount() {
        count++;
        return count;
    };
}

function countApp2() {
    let count = 0;
    return function plusCount() {
        count--;
        return count;
    };
}

let button = document.getElementById("button");
let button2 = document.getElementById("button2");
let displayCount = document.getElementById("displayCount");
let counter1 = countApp();
let displayCount2 = document.getElementById("displayCount2");
let counter2 = countApp2();


button.addEventListener("click",function() {
    counter1;
    displayCount.innerHTML = counter1() + counter2();
});

button2.addEventListener("click",function() {
    counter2();
    displayCount2.innerHTML = counter1() + counter2();
});