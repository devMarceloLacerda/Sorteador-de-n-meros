window.onload = function() {
    const button = document.getElementById("button");

    button.addEventListener("click", sorteiaNum);
}

function sorteiaNum() {
    const span = document.getElementById("sorteio");
    const random = Math.round(Math.random() * 1000);

    span.innerText = random;

    console.log(random);
}
