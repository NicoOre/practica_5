filtrar('523')

function filtrar(id) {
    
    var url = 'https://www.freetogame.com/api/game?id=' + id

    const realizarPeticion = async () => {
        const res = await fetch(url)
        const data = await res.json()
        
        document.getElementById('imagen').src = 'https:\/\/www.freetogame.com\/g\/523\/thumbnail.jpg'
        document.getElementById('titulo').innerHTML = data.title
        document.getElementById('descripcion').innerHTML = data.description
        document.getElementById('genero').innerHTML = data.genre
        document.getElementById('editor').innerHTML = data.publisher
        document.getElementById('desarrollador').innerHTML = data.developer
        document.getElementById('fecha').innerHTML = data.release_date

        document.getElementById('so').innerHTML = data.minimum_system_requirements.os
        document.getElementById('procesador').innerHTML = data.minimum_system_requirements.processor
        document.getElementById('ram').innerHTML = data.minimum_system_requirements.memory
        document.getElementById('graficos').innerHTML = data.minimum_system_requirements.graphics
        document.getElementById('almacenamiento').innerHTML = data.minimum_system_requirements.storage
    }

    realizarPeticion()
}

