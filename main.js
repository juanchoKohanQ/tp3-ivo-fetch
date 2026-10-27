fetch('https://rickandmortyapi.com/api/character')
    .then(response =>response.json())
    .then(data =>{
        console.log(data)
        personajes = data.results
        mostrarPersonajes(personajes)
    })
    .catch(error => {                  
        console.error('Error al leer el archivo:', error);
      });

     let personajes =[];
     
    const container = document.getElementById("messi")

    function mostrarPersonajes(lista = personajes){

        container.innerHTML = ""; 
  
        
     lista.forEach(personaje => {
        container.innerHTML += 
        `
        <div class="card">
        <h2>${personaje.name}</h2>
        <img src="${personaje.image}" alt ="${personaje.name}">
        <p class= "estado">${personaje.status}</p>
        <p class ="categoria">${personaje.location.name}</p>
        </div>
        `
    })
    }

const buscador = document.getElementById("buscador")
const estado = document.getElementById("status")

function filtrar(){
  const statusFiltrado = personajes.filter(personaje => { 
    return personaje.status.includes(estado.value)
  })

  mostrarPersonajes(statusFiltrado)
}

function buscar(){
const texto = buscador.value.toLowerCase()

const personajeFiltrado = personajes.filter(personaje => {
  return personaje.name.toLowerCase().includes(texto)
     
})
mostrarPersonajes(personajeFiltrado)
}

estado.addEventListener("change", filtrar)
buscador.addEventListener("input", buscar) 
