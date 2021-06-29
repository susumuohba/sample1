      // Initialize and add the map

     let directionsService ;
     let directionsRenderer ;

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
      }

      // Button Event
      function test1() {
  
      directionsService = new google.maps.DirectionsService();
      directionsRenderer = new google.maps.DirectionsRenderer();

      directionsRenderer.setMap(map);
      var request = {
          origin: "愛知県名古屋市熱田区桜田町19-18",
          destination: "愛知県名古屋市熱田区桜田町19-18",
          waypoints: [
             { location: "愛知県名古屋市千種区内山三丁目" },
             { location: "愛知県名古屋市中村区名駅一丁目1番4号" },
             { location: "愛知県名古屋市中区丸の内3丁目6-27" },
           ], 
          travelMode: google.maps.DirectionsTravelMode.DRIVING,
          unitSystem: google.maps.DirectionsUnitSystem.METRIC,
          optimizeWaypoints: true,
          avoidHighways: false,
          avoidTolls: false
      }

       directionsService.route(request,
         function(response,status){
          if (status == google.maps.DirectionsStatus.OK){
             console.log(response.routes[0].legs[0].distance.text)
             console.log(response.routes[0].legs[0].duration.text)
             document.getElementById("textarea1").value = 
             response.routes[0].legs[0].distance.text + 
             "  " +
             response.routes[0].legs[0].duration.text; 
             //
            //
             directionsRenderer.setDirections(response)
          }
       })

      //End Function
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

     g_lat_lng = lat_lng ; 

      //イベントリスナー削除
      google.maps.event.removeListener(listener1);

    //現在の状態をクリア
      reset()
   // 新しく追加
      test3() 

    
    //End function
    }

     // ルート削除 
     function reset(){
        directionsRenderer.setMap(null);
     }

     // 新ルート
     function test3(){
      directionsRenderer.setMap(map);
      var request = {
          origin: "愛知県名古屋市熱田区桜田町19-18",
          destination: "愛知県名古屋市熱田区桜田町19-18",
          waypoints: [
             { location: "愛知県名古屋市千種区内山三丁目" },
             { location: "愛知県名古屋市中村区名駅一丁目1番4号" },
             { location: "愛知県名古屋市中区丸の内3丁目6-27" },
             { location: g_lat_lng },
           ], 
          travelMode: google.maps.DirectionsTravelMode.DRIVING,
          unitSystem: google.maps.DirectionsUnitSystem.METRIC,
          optimizeWaypoints: true,
          avoidHighways: false,
          avoidTolls: false
      }

       directionsService.route(request,
         function(response,status){
          if (status == google.maps.DirectionsStatus.OK){
             console.log(response.routes[0].legs[0].distance.text)
             console.log(response.routes[0].legs[0].duration.text)
            //
             directionsRenderer.setDirections(response)
          }
       })
     // End Function
     }
