var filtro1
var filtro

var imagenOriginal
var imagenFiltrada

var url = "https://picsum.photos/200/200"
var name = 'imagen.jpg'

function getImage() {
    
    fetch(url).then(resp => resp.blob())
    .then(blob => {
        url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        a.download = name
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
    })
    .catch(() => alert('error'))

    imagenOriginal = document.getElementById('original')
}

function aplicarFiltros() {
    
    imagenFiltrada = document.getElementById('canvas')
    imagenOriginal = document.getElementById('original')
    
    filtro1 = LenaJS["mirror"]
    LenaJS.filterImage(imagenFiltrada, filtro1, imagenOriginal)
    LenaJS.redrawCanvas(imagenFiltrada, filtro1)

    if (document.getElementById('grayScale').checked) {
        filtro = LenaJS["grayscale"]
        LenaJS.redrawCanvas(imagenFiltrada, filtro)
    }

    if (document.getElementById('sepia').checked) {
        filtro = LenaJS["sepia"]
        LenaJS.redrawCanvas(imagenFiltrada, filtro)
    }

    if (document.getElementById('invert').checked) {
        filtro = LenaJS["invert"]
        LenaJS.redrawCanvas(imagenFiltrada, filtro)
    }

    if (document.getElementById('saturation').checked) {
        filtro = LenaJS["saturation"]
        LenaJS.redrawCanvas(imagenFiltrada, filtro)
    }

    if (document.getElementById('red').checked) {
        filtro = LenaJS["red"]
        LenaJS.redrawCanvas(imagenFiltrada, filtro)
    }

    if (document.getElementById('green').checked) {
        filtro = LenaJS["green"]
        LenaJS.redrawCanvas(imagenFiltrada, filtro)
    }

    if (document.getElementById('blue').checked) {
        filtro = LenaJS["blue"]
        LenaJS.redrawCanvas(imagenFiltrada, filtro)
    }

    if (document.getElementById('mirror').checked) {
        filtro = LenaJS["mirror"]
        LenaJS.redrawCanvas(imagenFiltrada, filtro)
    }

    if (document.getElementById('sharpen').checked) {
        filtro = LenaJS["sharpen"]
        LenaJS.redrawCanvas(imagenFiltrada, filtro)
    }

    if (document.getElementById('sobelVertical').checked) {
        filtro = LenaJS["sobelVertical"]
        LenaJS.redrawCanvas(imagenFiltrada, filtro)
    }

    if (document.getElementById('sobelHorizontal').checked) {
        filtro = LenaJS["sobelHorizontal"]
        LenaJS.redrawCanvas(imagenFiltrada, filtro)
    }

    if (document.getElementById('highpass').checked) {
        filtro = LenaJS["highpass"]
        LenaJS.redrawCanvas(imagenFiltrada, filtro)
    }

    if (document.getElementById('laplacian').checked) {
        filtro = LenaJS["laplacian"]
        LenaJS.redrawCanvas(imagenFiltrada, filtro)
    }

    if (document.getElementById('gaussian').checked) {
        filtro = LenaJS["gaussian"]
        LenaJS.redrawCanvas(imagenFiltrada, filtro)
    }

    if (document.getElementById('canny').checked) {
        filtro = LenaJS["canny"]
        LenaJS.redrawCanvas(imagenFiltrada, filtro)
    }
}

