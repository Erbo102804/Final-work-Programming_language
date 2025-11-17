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

// HOME WORK 1 (Part 2) - Moving Block (Circular Orbit)
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let angle = 0;
const radius = 230; // Радиус орбиты (половина родительского блока минус размер спутника)
const centerX = 230; // Центр орбиты по X
const centerY = 230; // Центр орбиты по Y
const speed = 0.02; // Скорость вращения

const moveBlock = () => {
    // Вычисляем позицию по кругу используя sin и cos
    const positionX = centerX + radius * Math.cos(angle) - 20; // -20 это половина размера спутника (40px / 2)
    const positionY = centerY + radius * Math.sin(angle) - 20;

    // Применяем позицию
    childBlock.style.left = positionX + 'px';
    childBlock.style.top = positionY + 'px';

    // Увеличиваем угол для следующего кадра
    angle += speed;

    // Продолжаем анимацию
    requestAnimationFrame(moveBlock);
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
