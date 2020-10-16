const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

/*create map*/
const map = L.map('mapid' , options).setView([-15.855416,-47.9658011], 15);

/*create tile layer*/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

/*create icon*/
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

/*create and add marker */
L.marker([-15.855416,-47.9658011], { icon })
.addTo(map)


/**IMAGE GALLERY*/
function selectImage(event) {
    /** teste console.log("clique no botão")*/
    const button = event.currentTarget 
    
    /**REMOVER TODAS AS CLASSES .active */
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass) 
    function removeActiveClass(button) {
    button.classList.remove("active")
    }
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    /**ATUALIZAR O CONTEINER DE IMAGEM GRANDE */
    imageContainer.src = image.src
    /**ADICIONAR A CLASSE .active PARA ESTE BOTÃO */
    button.classList.add('active')
}
   
