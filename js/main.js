var elForm = document.querySelector(".js-form");
var elName = document.querySelector(".js-input");
var elBall = document.querySelector(".js-input-two");
var elResult = document.querySelector(".js-text");

var minBall = 40;
var avarageBall = 80;
var maxBall = 140;

elForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var nameVal = elName.value.trim();
    var ballVal = elBall.value;

    elName.value = "";
    elBall.value = "";

    if (ballVal <= 0) {
        elResult.textContent = `${nameVal} Balingizni kiritng!`;
    }
    else if (ballVal >= 0 && ballVal < minBall) {
        elResult.textContent = `${nameVal} siz imtixondan o'ta olmadingiz`;
        return;
    }
    else if (ballVal >= minBall && ballVal < avarageBall) {
        elResult.textContent = `${nameVal} siz kontrakt asosida qabul qilindingiz!`;
        return;
    }
    else if (ballVal >= avarageBall && ballVal <= maxBall) {
        elResult.textContent = `${nameVal} siz grant asosida qabul qilindingiz!`;
        return;
    }
    else if (ballVal > maxBall) {
        elResult.textContent = `Balingizni kiritng iltimos!`;
        return;
    }
});