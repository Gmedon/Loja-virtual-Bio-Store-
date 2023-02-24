let count = 1;
let radio_1 = document.getElementById("radio1");

setInterval(function () {
    nexImage()
}, 10000)

function nexImage() {
    count++
    if (count > 2) {
        count = 1
    }
    document.getElementById("radio" + count).checked = true;
}

const spans = document.querySelectorAll('span.desconto');
spans.forEach(span => {
    const randomNumber = Math.floor(Math.random() * (60 - 10 + 1) + 10);
    span.innerText = '-' + randomNumber + '%';
});
