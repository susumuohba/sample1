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
        CaclRoutes()
      }

      // Button Event
      function CaclRoutes() {
  
      directionsService = new google.maps.DirectionsService();
      directionsRenderer = new google.maps.DirectionsRenderer();

      
      var request = {
          // LatLngの指定で動かいのは？
          origin: new google.maps.LatLng(35.142589 ,136.909671),
          //origin: "愛知県名古屋市熱田区桜田町19-18",
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

            // 中継地点の回る順番が入る配列
            console.log(response.routes[0].waypoint_order)
           
            // 各経路（出発=>中継地点１など）の情報が入る配列
            console.log(response.routes[0].legs)
            
          }
       })

      //End Function
  }

     