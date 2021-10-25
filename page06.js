     // Initialize and add the map

     //let directionsService ;
     //let directionsRenderer ;

     let map ; 
     let listener1 ; 

     // クリックした位置を保存する変数
     let g_lat_lng ; 

     function initMap() {
        // The location of Uluru
        const uluru = { lat: 35.172808, lng: 136.89019  };
        // The map, centered at Uluru
         map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: uluru,
        });
        // クリックイベントを追加
        test2()
      }

      // Button Event
      function test2() {
         // クリックイベントを追加
         listener1 =  map.addListener('click', function(e) {
           getClickLatLng(e.latLng, map);
         });
     // End function 
     }


     //Event Hander 
    function getClickLatLng(lat_lng, map) {

     // マーカーを設置
      var marker = new google.maps.Marker({
        position: lat_lng,
        map: map
      });
        
    // 座標をDBへ登録
        
    //緯度
    console.log(lat_lng.lat()); 
    console.log(lat_lng.lng()); 
        

     g_lat_lng = lat_lng ; 

      
    }

    
}
