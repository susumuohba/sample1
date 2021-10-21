     // Initialize and add the map

     let directionsService ;
     let directionsRenderer ;

     let map ; 
     let listener1 ; 

     // クリックした位置を保存する変数
     let g_lat_lng ; 

     function initMap() {
        // The location of Uluru
      /////  const uluru = { lat: 35.172808, lng: 136.89019  };
        // The map, centered at Uluru
      /////   map = new google.maps.Map(document.getElementById("map"), {
      /////    zoom: 15,
      /////    center: uluru,
      /////  });
        // ダミーデータの描画
        test1()
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
            console.log(response.routes[0].legs.length)
             console.log(response.routes[0].legs[0].distance.text)
             console.log(response.routes[0].legs[0].duration.text)
          //   document.getElementById("textarea1").value = 
          //   response.routes[0].legs[0].distance.text + 
          //   "  " +
          //   response.routes[0].legs[0].duration.text; 
             //
            //
           /////  directionsRenderer.setDirections(response)
          }
       })

      //End Function
  }

     
function page03s01() {
  navigator.geolocation.getCurrentPosition(page03s02);   
}


function page03s02() {
  let geo_text = "緯度:" + position.coords.latitude + "\n";
    geo_text += "経度:" + position.coords.longitude + "\n";
    geo_text += "高度:" + position.coords.altitude + "\n";
    geo_text += "位置精度:" + position.coords.accuracy + "\n";
    geo_text += "高度精度:" + position.coords.altitudeAccuracy  + "\n";
    geo_text += "移動方向:" + position.coords.heading + "\n";
    geo_text += "速度:" + position.coords.speed + "\n";

    // let date = new Date(position.timestamp);

    //geo_text += "取得時刻:" + date.toLocaleString() + "\n";

    alert(geo_text);
}
