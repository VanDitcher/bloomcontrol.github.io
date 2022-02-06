function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 47.7848201936765, lng: -87.40461005289102},
        zoom: 6,
        mapId: '58acd8972fb835b2'
        });

        const markers = [
            [
                "Lake Eerie",
                47.7848201936765,
                -87.40461005289102
            ]
        ]
        for(let i = 0; i<markers.length;i++){
            const currentMarker = markers[i];
            const marker = new google.maps.Marker({
                position: {lat = currentMarker[1],lng = currentMarker[2]},
                map,
                title: currentMarker[0],
              });
              const infowindow = new google.maps.InfoWindow({
                content: currentMarker[0] + " Algae Deposit",
              });
              marker.addListener("click", () => {
                infowindow.open(map, marker)
              });
        }
    }