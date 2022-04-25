const myform = document.querySelector("#myform");
const user = document.querySelector("#user");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const death = document.querySelector("#death");
const btn = document.querySelector("#btn");
const errorMsg = document.querySelector(".error-msg");

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const userValue = user.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;

    if(userValue === '' || emailValue === '' || passwordValue === '' || password2Value === ''){
        errorMsg.textContent = "Preencha os campos!";
        errorMsg.classList = "error";
    }else{
        classList = "inputSuccess";
    }
    if(!isEmail(emailValue)){
        errorMsg.textContent = "Formato de email inválido";
        errorMsg.classList = "error";
    }
    if(passwordValue.length < 8 && passwordValue.length > 8){
        errorMsg.textContent = "Senha deve ser maior do que 8 caracteres";
        errorMsg.classList = "error";
    }
    if(passwordValue != password2Value){
        errorMsg.textContent = "As senhas não conferem";
        errorMsg.classList = "error";
    }



    function isEmail(email) {
        return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
    }
})
