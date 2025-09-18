// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.getElementById ("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById ("listaAmigos");  
const ulResultado =document.getElementById ("resultado");

 
function agregarAmigo (){
   if (listaAmigos.includes(inputAmigo.value)) { 
          alert ("Ese nombre ya se encuentra en tu lista de amigos")}

      else { listaAmigos.push (inputAmigo.value)       
      ulListaAmigos.innerHTML += `<li>${amigo.value}</li>`};

   if (inputAmigo.value=="") {
          alert ("Por favor Ingresa el nombre de tu Amigo");
        };
               
      console.log(listaAmigos);
      limpiarCaja();
} 
          
function sortearAmigo(){
     const random = Math.floor(Math.random()*listaAmigos.length);
     const amigoSecreto = listaAmigos[random]; 
    ulResultado.innerHTML = `<li>Tu amigo Secreto es ${amigoSecreto}</li>`;
}
 
limpiarCaja();
 function limpiarCaja(){
    document.querySelector('#amigo').value = '';
 }