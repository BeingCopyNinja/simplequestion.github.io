const yesButton = document.getElementById('yesButton');
const resultText = document.getElementById('result');

function showFunnyText() {
    resultText.innerText = "Oh That Means You're Not ........";
}

function moveYesButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = yesButton.getBoundingClientRect();

    // Random positions within the container, avoiding overlaps
    let randomX, randomY;
    do {
        randomX = Math.random() * (containerRect.width - buttonRect.width);
        randomY = Math.random() * (containerRect.height - buttonRect.height - 60); // -60 to avoid overflow
    } while (
        randomX < buttonRect.x - containerRect.x + 50 && 
        randomX > buttonRect.x - containerRect.x - 50 &&
        randomY < buttonRect.y - containerRect.y + 50 && 
        randomY > buttonRect.y - containerRect.y - 50
    );

    yesButton.style.position = 'absolute';
    yesButton.style.left = `${randomX}px`;
    yesButton.style.top = `${randomY}px`;
}
