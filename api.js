let verificaNumero = []
function geraNumeroAleatorio(){
 return Math.floor(Math.random() * 671) + 1;
}

function formataPersonagens(data) {
  let CircleColor
  //verifica o status para definir a color do circulo
  if(data.status == 'Alive'){
    CircleColor = 'green'
  }
  else if(data.status == 'Dead'){
      CircleColor = 'red'
  }
  else if(data.status == 'unknown'){
    CircleColor = 'gray'
}

  document.getElementById("home").innerHTML = document.getElementById("home").innerHTML + 
  `<div class='container-personagem'>
    
      <label id="nome"> ${data.name} </label>
      <label id="status"><span class="circle" style="background-color:${CircleColor}"></span> ${data.status} </label>   
      <label id="especie">Especie : ${data.species} </label>   
      <label id="genero">Genero : ${data.gender} </label>   
       
    <div> <img src = '${data.image}'/></div>
  </div>
  `;  
}

for (let i = 0; i < 4; i++) {
    let numeroAleatorio = geraNumeroAleatorio()
    if(verificaNumero.indexOf(numeroAleatorio) > -1){ //Verifica se ja existe para tratar problemas de duplicata
      i-- //decrementa -1
      console.log('numero já sorteado');
    }
    else{
        verificaNumero.push(numeroAleatorio)
        fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`).then(response =>response.json()).then((response)=>{
        formataPersonagens(response) //chama função de formatar os dados para o front end
        }).catch((e)=>{
            console.log(e);
        })
    } 
}

