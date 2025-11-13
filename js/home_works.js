// HOME WORK 1 (Part 1) - Gmail Validation
const gmailBlocks = document.querySelectorAll('.gmail_block');
const gmailBlock = gmailBlocks[0];
const gmailInput = gmailBlock.querySelector('#gmail_input');
const gmailButton = gmailBlock.querySelector('#gmail_button');
const gmailResult = gmailBlock.querySelector('#gmail_result');

const gmailRegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.addEventListener('click', () => {
    const value = gmailInput.value.trim();
    if (gmailRegExp.test(value)) {
        gmailResult.textContent = 'Почта верна';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.textContent = 'Почта не верна';
        gmailResult.style.color = 'red';
    }
});

// HOME WORK 1 (Part 1.1) - IIN Validation (ИИН - 12 цифр)
const iinBlock = gmailBlocks[1];
const iinInput = iinBlock.querySelector('#gmail_input');
const iinButton = iinBlock.querySelector('#gmail_button');
const iinResult = iinBlock.querySelector('#gmail_result');

const iinRegExp = /^\d{12}$/;

iinButton.addEventListener('click', () => {
    const value = iinInput.value.trim();
    if (iinRegExp.test(value)) {
        iinResult.textContent = 'ИИН корректен';
        iinResult.style.color = 'green';
    } else {
        iinResult.textContent = 'ИИН должен содержать 12 цифр';
        iinResult.style.color = 'red';
    }
});

// HOME WORK 1 (Part 2) - Moving Block
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;

const moveBlock = () => {
    if (positionX < 440 && positionY === 0) {
        positionX++;
        childBlock.style.left = positionX + 'px';
        requestAnimationFrame(moveBlock);
    } else if (positionX >= 440 && positionY < 440) {
        positionY++;
        childBlock.style.top = positionY + 'px';
        requestAnimationFrame(moveBlock);
    } else if (positionY >= 440 && positionX > 0) {
        positionX--;
        childBlock.style.left = positionX + 'px';
        requestAnimationFrame(moveBlock);
    } else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = positionY + 'px';
        requestAnimationFrame(moveBlock);
    }
};

moveBlock();

// HOME WORK 2 - Stopwatch
const minutesDisplay = document.querySelector('#minutesS');
const secondsDisplay = document.querySelector('#secondsS');
const mlSecondsDisplay = document.querySelector('#ml-secondsS');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

let minutes = 0;
let seconds = 0;
let mlSeconds = 0;
let interval = null;

const updateDisplay = () => {
    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
    mlSecondsDisplay.textContent = mlSeconds < 10 ? '0' + mlSeconds : mlSeconds;
};

const startStopwatch = () => {
    if (!interval) {
        interval = setInterval(() => {
            mlSeconds++;
            if (mlSeconds >= 100) {
                mlSeconds = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
    }
};

const stopStopwatch = () => {
    clearInterval(interval);
    interval = null;
};

const resetStopwatch = () => {
    stopStopwatch();
    minutes = 0;
    seconds = 0;
    mlSeconds = 0;
    updateDisplay();
};

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
