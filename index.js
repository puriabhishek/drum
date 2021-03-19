var length = document.querySelectorAll(".drum").length;
for (var i = 0; i < length; i++) {
    var btn = document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        btn = this.innerHTML;
        makeSound(btn);
        btnAnimation(btn);

        document.addEventListener("keypress", function (event) {
            makeSound(event.key);
            btnAnimation(event.key);
        })

        function makeSound(key) {
            switch (key) {
                case "w":
                    var tom1 = new Audio('sounds/tom-1.mp3');
                    tom1.play();
                case "a":
                    var tom2 = new Audio('sounds/tom-2.mp3');
                    tom2.play();
                case "s":
                    var tom3 = new Audio('sounds/tom-3.mp3');
                    tom3.play();
                case "d":
                    var tom4 = new Audio('sounds/tom-4.mp3');
                    tom4.play();
                case "j":
                    var crash = new Audio('sounds/crash.mp3');
                    crash.play();
                case "k":
                    var kick = new Audio('sounds/kick-bass.mp3');
                    kick.play();

                case "l":
                    var snare = new Audio('sounds/snare.mp3');
                    snare.play();

                    break;

                default: console.log(btn);
                    break;
            }
        }
    })
}
function btnAnimation(singlekey) {
    var activeBtn = document.querySelector("." + singlekey);
    activeBtn.classList.add("pressed");
    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 100);
}