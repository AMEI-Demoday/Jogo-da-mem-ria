const  input = document.querySelector('.login-input');
const  button = document.querySelector('.login-button');
const  form = document.querySelector('.login-form');

const validateInput = ({target}) =>{
    if(target.value.length > 4 )/*caso o nome tiver mais de 5 letras habilitar o botão*/{
        button.removeAttribute('disabled');
    }else{
        button.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('jogador (a)', input.value);

    window.location = 'pages/game.html';
}
input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);