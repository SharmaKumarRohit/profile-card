var toggle = document.querySelector('.toggle__btn');
var card = document.querySelector('.card');
var flag = 0;

toggle.addEventListener("click", function() {
    if(flag == 0) {
        card.style.backgroundColor = "#31394d";
        card.style.color = "#dadada";
        flag = 1;
    }
    else {
        card.style.backgroundColor = "#fff";
        card.style.color = "#000";
        flag = 0;
    }
})

var heart = document.querySelector('.heart');
var heart2 = document.querySelector('.heart2');

heart.addEventListener("click", function() {
    heart2.style.display = "inline-block";
    heart.style.display = "none";
})