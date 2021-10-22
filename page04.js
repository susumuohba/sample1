     let directionsService ;
     let directionsRenderer ;

     
　    function initMap() {
      // The location of Uluru
      /////  const uluru = { lat: 35.172808, lng: 136.89019  };
        // The map, centered at Uluru
      /////   map = new google.maps.Map(document.getElementById("map"), {
      /////    zoom: 15,
      /////    center: uluru,
      /////  });
      // 経路の計算
      //ダミーのデータ
      let origindestination = {lat:35.142589 , lng:136.909671} ; 
      let customer1  = {id:1 , lat:35.17082365 , lng:136.93391909} ;
      //
        CaclRoutes(origindestination)
      }

      // 引数の1番目は、スタートとゴールの座標
      function CaclRoutes(origindestination) {
  
      directionsService = new google.maps.DirectionsService();
      directionsRenderer = new google.maps.DirectionsRenderer();

      
      var request = {
          //origin: new google.maps.LatLng(35.142589 ,136.909671),
          origin: new google.maps.LatLng(parseFloat(origindestination.lat) ,parseFloat(origindestination.lng)),
          destination: new google.maps.LatLng(parseFloat(origindestination.lat) ,parseFloat(origindestination.lng)),
          waypoints: [
             { location:  new google.maps.LatLng(35.17082365 ,136.93391909)},
             { location:  new google.maps.LatLng(35.173805 ,136.879495) },
             { location:  new google.maps.LatLng(35.176345 ,136.907854)},
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

            // 中継地点の回る順番が入る配列
            console.log(response.routes[0].waypoint_order)
           
            // 各経路（出発=>中継地点１など）の情報が入る配列
            console.log(response.routes[0].legs)
            
          }
       })

      //End Function
  }

     