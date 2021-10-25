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
      
      let customers = [
        {id:1 , lat:35.17082365 , lng:136.93391909},
        {id:2 , lat:35.173805 , lng:136.879495} , 
        {id:3 , lat:35.176345 , lng:136.907854}
      ] ;
      
      //
        CaclRoutes(origindestination, customers)
      }

      // 引数:1 スタートとゴールの座標
      // 引数:2 customersの座標
      function CaclRoutes(origindestination, customers) {
  
      directionsService = new google.maps.DirectionsService();
      directionsRenderer = new google.maps.DirectionsRenderer();

      //  
      let waypointsObject = new Array(customers.length) ; 

      for (let i  in customers ){
        waypointsObject[i] = { location:  new google.maps.LatLng(parseFloat(customers[i].lat) ,parseFloat(customers[i].lng))} ; 
      }
       
      
      let request = {
          
          origin: new google.maps.LatLng(parseFloat(origindestination.lat) ,parseFloat(origindestination.lng)),
          destination: new google.maps.LatLng(parseFloat(origindestination.lat) ,parseFloat(origindestination.lng)),
          waypoints:waypointsObject , 
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

     