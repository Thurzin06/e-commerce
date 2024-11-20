const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Função para salvar dados no LocalStorage
function saveUser(user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

// Função para buscar usuários do LocalStorage
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// Cadastro
const signUpForm = document.querySelector('.sign-up-container form');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    const user = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    };

    // Salvar usuário no LocalStorage
    saveUser(user);
    alert("Cadastro realizado com sucesso!");
    signUpForm.reset();
});

// Login
const signInForm = document.querySelector('.sign-in-container form');
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);
    const email = formData.get('email');
    const password = formData.get('password');

    // Verificar login no LocalStorage
    const users = getUsers();
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Bem-vindo, ${user.name}! Login realizado com sucesso.`);
    } else {
        alert("E-mail ou senha incorretos.");
    }

    signInForm.reset();
});
