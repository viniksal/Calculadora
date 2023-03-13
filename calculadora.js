    //Talvez utilizar array? Para o máximo de números a adicionar. Apenas pensando


    var btn0 = window.document.getElementById('btn0')  //ISSO FUNCIONA
    var resp = document.getElementById('margem_resp')

    btn0.addEventListener('mousedown', baixo)
    btn0.addEventListener('mouseup', cima)
    btn0.addEventListener('click', clicar)

    function baixo(){
        btn0.style.background = 'red'; 
    }

    function cima(){
        btn0.style.background = 'none'
    }

    function clicar(){
        resp.innerText = '0'
    }


   /* var btn = document.querySelectorAll("td");  TENTAR ARRUMAR - O Objetivo aqui é tentar mudar o background da cédula pelo Js

    btn.addEventListener('click', clicar);

    function clicar(){
        btn.style.backgroundColor = "red";
    }*/

    /*//Para cada elemento <td>...  EXEMPLO
    btn.forEach((td) => {
      //...Se texto for "D" colore em vermelho caso contrário colore em verde.
      td.style.backgroundColor = (td.innerText == 'D') ? "red" : "green";
    });*/


    /*var btn0 = document.querySelectorAll("td") TENTATIVA

    btn0.addEventListener('click', clicar)

    function clicar(){
        btn0.style.background = 'red'
    }*/


        
        /*a.addEventListener('mousedown', press)  ESTÁ SENDO UTILIZADO
        .addEventListener('mouseup', unpress)*/



    /*var btn1 = window.document.getElementById('bnt1')
    var btn2 = window.document.getElementById('bnt2')
    var btn3 = window.document.getElementById('bnt3')
    var btn4 = window.document.getElementById('bnt4')
    var btn5 = window.document.getElementById('bnt5')
    var btn6 = window.document.getElementById('bnt6')
    var btn7 = window.document.getElementById('bnt7')
    var btn8 = window.document.getElementById('bnt8')
    var btn9 = window.document.getElementById('bnt9')

    var btnd = window.document.getElementById('bnt/')
    var btnx = window.document.getElementById('bntx')
    var btn = window.document.getElementById('bnt')
    var btn = window.document.getElementById('bnt')*/
