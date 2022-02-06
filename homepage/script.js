console.log("App JS connected.");

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 47.7848201936765, lng: -87.40461005289102},
        zoom: 6,
        mapId: '58acd8972fb835b2'
        });
}

const open = document.getElementsById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
})