fetch('https://rickandmortyapi.com/api/character')
    .then(response =>response.json())
    .then(data =>{
        console.log(data)
        personajes = data.results
        info = data.info
        mostrarPersonajes(personajes)
    })
    .catch(error => {                  
        console.error('Error al leer el archivo:', error);
      });

    let personajes =[];
    let info = {}; 
     
    const container = document.getElementById("main")

    function mostrarPersonajes(lista){
     container.innerHTML = '';

     lista.forEach(personaje => {
        container.innerHTML += 
        `
        <div class="personaje">
        <h2>${personaje.name}</h2>
        <img src="${personaje.image}" alt ="${personaje.name}">
        <p>${personaje.specie}</p>
        <p> class ="categoria">${personaje.location}</p>
        </div>
        `
    })
    }

