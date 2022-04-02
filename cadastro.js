function confirmaSenha(){
    var input1 = document.querySelector("#senha");
    var senha1 = input1.value;

    var input2 = document.querySelector("#senha2");
    var senha2 = input2.value;

    if(input1.value != input2.value){
        document.getElementById("#senha2").style.color("red");
        alert("As senhas não conferem!!!!!");
    }
    else{
        document.getElementById("#senha2").style.color("green");
        document.getElementById("#senha").style.color("green");
    }
}