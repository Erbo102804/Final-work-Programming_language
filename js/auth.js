// AUTHORIZATION SYSTEM
// Array of users for authentication

const users = [
    {
        login: "admin",
        password: "admin123",
        name: "Администратор Системы"
    },
    {
        login: "user1",
        password: "pass1",
        name: "Иван Иванов"
    },
    {
        login: "elon",
        password: "tesla2024",
        name: "Илон Маск"
    },
    {
        login: "starlink",
        password: "satellite",
        name: "Starlink User"
    },
    {
        login: "demo",
        password: "demo123",
        name: "Демо Пользователь"
    },
    {
        login: "client",
        password: "client2024",
        name: "Клиент Starlink"
    },
    {
        login: "test",
        password: "test123",
        name: "Тестовый Аккаунт"
    }
];

// Get form elements
const authForm = document.getElementById('authForm');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const authMessage = document.getElementById('authMessage');

// Form submit handler
authForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const login = loginInput.value.trim();
    const password = passwordInput.value.trim();

    // Find user in array using find method
    const user = users.find(u => u.login === login && u.password === password);

    if (user) {
        // Success - user found
        showMessage(`Добро пожаловать, ${user.name}! 🚀`, 'success');

        // Clear form
        loginInput.value = '';
        passwordInput.value = '';

        // Optional: redirect after 2 seconds
        setTimeout(() => {
            // window.location.href = '../index.html';
        }, 2000);

    } else {
        // Error - user not found
        showMessage('Неверный логин или пароль! ❌', 'error');

        // Clear password field
        passwordInput.value = '';
        passwordInput.focus();
    }
});

// Function to show messages
function showMessage(message, type) {
    authMessage.textContent = message;
    authMessage.className = `auth_message ${type}`;

    // Clear message after 5 seconds
    setTimeout(() => {
        authMessage.textContent = '';
        authMessage.className = 'auth_message';
    }, 5000);
}

// Add input animation on focus
loginInput.addEventListener('focus', () => {
    authMessage.textContent = '';
    authMessage.className = 'auth_message';
});

passwordInput.addEventListener('focus', () => {
    authMessage.textContent = '';
    authMessage.className = 'auth_message';
});
