let counter = 0;
let step = 1;


document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});


document.querySelectorAll(".step-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        step = Number(btn.dataset.step);
    });
});


document.body.addEventListener("click", () => {
    step = 1;
});

function updateDisplay() {
    const countEl = document.getElementById("count");
    countEl.innerText = counter;

    if (counter > 0) countEl.style.color = "green";
    else if (counter < 0) countEl.style.color = "red";
    else countEl.style.color = "black";
}

function increment() {
    counter += step;
    updateDisplay();
}

function decrement() {
    if (counter - step < 0) counter = 0;
    else counter -= step;
    updateDisplay();
}

function reset() {
    counter = 0;
    updateDisplay();
}
