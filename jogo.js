
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

function ajustaTamanho(){

    altura = window.innerHeight;
    largura = window.innerWidth;

}

ajustaTamanho();

var cronometro = setInterval(function(){
    
      tempo -= 1;

      if(tempo < 0){

          clearInterval(cronometro);
          clearInterval(mostraRepete);
          document.getElementById('gameOver').style.backgroundImage = "url('imagens/vitoria.png')";
           document.getElementById('reini').style.display = "block";

      }else{

         document.getElementById('cronometro').innerHTML = tempo;   

      }   

}, 1000);

function posicaoRandomica(){

  // Remover mosquito anterior caso exista
  if(document.getElementById('mosquito')){


      if(vidas >= 4){
 
            document.getElementById('mosquito').remove();

            clearInterval(mostraRepete);

            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";

            document.getElementById('gameOver').style.backgroundImage = "url('imagens/game_over.png')";

            document.getElementById('crono').style.display = "none";

            document.getElementById('reini').style.display = "block";
 
           return 0;
            
      }else{

           document.getElementById('mosquito').remove();
           
           document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";

           vidas++;

      }

     

  }  

        var posicaoX = Math.floor(Math.random() * altura) - 90;
        var posicaoY = Math.floor(Math.random() * largura) - 90;

        posicaoX = posicaoX < 0 ? 0 : posicaoX;
        posicaoY = posicaoY < 0 ? 0 : posicaoX;

        // criar o elemento HTML
        var mosquito = document.createElement('img');
        mosquito.src = "imagens/mosca.png";
        mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
        mosquito.style.position = "absolute";
        mosquito.style.left = posicaoX + "px";
        mosquito.style.top = posicaoY + "px";
        mosquito.id = "mosquito";
        mosquito.onclick = function(){
        this.remove();
  }

	document.body.appendChild(mosquito);


    tamanhoAleatorio();

}

var mostraRepete = setInterval(function(){

      posicaoRandomica();

}, 2000);

posicaoRandomica();

function tamanhoAleatorio(){

         var classe = Math.floor(Math.random() * 3);
         
         switch(classe){

               case 0:
                   return 'mosquito1';
               case 1:
                   return 'mosquito2';
               case 2:
                   return 'mosquito3';
         }

}

function ladoAleatorio(){

        var classe = Math.floor(Math.random() * 2);
         
         switch(classe){

               case 0:
                   return 'ladoA';
               case 1:
                   return 'ladoB';

         }

}

 // reinia o jogo

 document.querySelector("#reini a").addEventListener("click", function(){

                 event.preventDefault();

                 window.location.reload();

 });