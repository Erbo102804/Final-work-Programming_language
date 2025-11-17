// PHONE VALIDATORS - Both Kyrgyzstan and Russia
const phoneBlocks = document.querySelectorAll('.phone_block');

// Kyrgyzstan phone validator
const phoneBlock1 = phoneBlocks[0];
const phoneInput1 = phoneBlock1.querySelector('#phone_input');
const phoneButton1 = phoneBlock1.querySelector('#phone_button');
const phoneResult1 = phoneBlock1.querySelector('#phone_result');
const kgPhoneRegExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton1.addEventListener('click', () => {
    const value = phoneInput1.value.trim();
    if (kgPhoneRegExp.test(value)) {
        phoneResult1.textContent = 'Номер телефона корректен';
        phoneResult1.style.color = 'green';
    } else {
        phoneResult1.textContent = 'Неверный формат номера';
        phoneResult1.style.color = 'red';
    }
});

// Russia phone validator
const phoneBlock2 = phoneBlocks[1];
const phoneInput2 = phoneBlock2.querySelector('#phone_input');
const phoneButton2 = phoneBlock2.querySelector('#phone_button');
const phoneResult2 = phoneBlock2.querySelector('#phone_result');
const ruPhoneRegExp = /^\+7 \d{3} \d{3}-\d{2}-\d{2}$/;

phoneButton2.addEventListener('click', () => {
    const value = phoneInput2.value.trim();
    if (ruPhoneRegExp.test(value)) {
        phoneResult2.textContent = 'Номер телефона корректен';
        phoneResult2.style.color = 'green';
    } else {
        phoneResult2.textContent = 'Неверный формат номера';
        phoneResult2.style.color = 'red';
    }
});

// TAB SLIDER
const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');

const hideTabContent = () => {
    tabContentBlocks.forEach((block, index) => {
        block.style.display = 'none';
    });
    tabItems.forEach(item => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'flex';
    tabItems[index].classList.add('tab_content_item_active');
};

hideTabContent();
showTabContent(0);

tabItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        hideTabContent();
        showTabContent(index);
    });
});

// CURRENCY CONVERTER
const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

// Exchange rates (approximate)
const rates = {
    som: 1,
    usd: 88.5,  // 1 USD = 88.5 KGS
    eur: 96.5   // 1 EUR = 96.5 KGS
};

const convertCurrency = (fromInput, fromCurrency) => {
    const amount = parseFloat(fromInput.value) || 0;
    const amountInSom = amount * rates[fromCurrency];

    if (fromCurrency !== 'som') {
        somInput.value = (amountInSom).toFixed(2);
    }
    if (fromCurrency !== 'usd') {
        usdInput.value = (amountInSom / rates.usd).toFixed(2);
    }
    if (fromCurrency !== 'eur') {
        eurInput.value = (amountInSom / rates.eur).toFixed(2);
    }
};

somInput.addEventListener('input', () => convertCurrency(somInput, 'som'));
usdInput.addEventListener('input', () => convertCurrency(usdInput, 'usd'));
eurInput.addEventListener('input', () => convertCurrency(eurInput, 'eur'));

// CARD SWITCHER - Equipment Gallery
const card = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

const starlinkEquipment = [
    {
        title: 'Спутниковая антенна Dishy',
        description: 'Высокотехнологичная фазированная антенная решетка с автоматическим наведением на спутники. Размер: 58 см в диаметре.',
        image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&q=80'
    },
    {
        title: 'Wi-Fi роутер Starlink',
        description: 'Мощный двухдиапазонный роутер с поддержкой Wi-Fi 5 (802.11ac). Покрытие до 185 кв. метров.',
        image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&q=80'
    },
    {
        title: 'Комплект монтажа',
        description: 'Включает треногу, крепления для крыши, кабели длиной 23 метра и блок питания. Простая установка за 15 минут.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80'
    },
    {
        title: 'Мобильное приложение',
        description: 'Управляйте настройками, проверяйте скорость и диагностируйте проблемы через удобное мобильное приложение.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80'
    }
];

let currentCard = 0;

const renderCard = (index) => {
    const equipment = starlinkEquipment[index];
    card.innerHTML = `
        <p><strong>${equipment.title}</strong></p>
        <span>${equipment.description}</span>
    `;
};

renderCard(currentCard);

btnNext.addEventListener('click', () => {
    currentCard = (currentCard + 1) % starlinkEquipment.length;
    renderCard(currentCard);
});

btnPrev.addEventListener('click', () => {
    currentCard = (currentCard - 1 + starlinkEquipment.length) % starlinkEquipment.length;
    renderCard(currentCard);
});

// WEATHER - Coverage Checker
const cityInput = document.querySelector('.cityName');
const cityDisplay = document.querySelector('.city');
const tempDisplay = document.querySelector('.temp');

const API_KEY = '82e61be214fb5ac0b481ac0ee09b3b07';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const fetchWeather = async (cityName) => {
    try {
        const url = `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric&lang=ru`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            cityDisplay.textContent = `Покрытие Starlink в городе: ${data.name}, ${data.sys.country}`;
            tempDisplay.textContent = `✅ Доступно | Погода: ${Math.round(data.main.temp)}°C, ${data.weather[0].description}`;
            tempDisplay.style.color = 'green';
        } else {
            cityDisplay.textContent = 'Город не найден';
            tempDisplay.textContent = 'Проверьте написание города';
            tempDisplay.style.color = 'red';
        }
    } catch (error) {
        cityDisplay.textContent = 'Ошибка подключения';
        tempDisplay.textContent = 'Не удалось проверить покрытие';
        tempDisplay.style.color = 'orange';
    }
};

cityInput.addEventListener('change', () => {
    const cityName = cityInput.value.trim();
    if (cityName) {
        fetchWeather(cityName);
    }
});

