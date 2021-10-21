
function Routecalc() {
  //
  let directionsService = new google.maps.DirectionsService();
  // 
  let request = {
    origin: "愛知県名古屋市熱田区桜田町19-18",
    destination: "愛知県名古屋市熱田区桜田町19-18",
    waypoints: [
       { location: "愛知県名古屋市中区金山1丁目17-18" },
       { location: "愛知県名古屋市瑞穂区桜見町1丁目1-14" },
     ], 
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
    unitSystem: google.maps.DirectionsUnitSystem.METRIC,
    optimizeWaypoints: true,
    avoidHighways: false,
    avoidTolls: false
 } 
 //
  directionsService.route(request,
    function(response,status){
     if (status == google.maps.DirectionsStatus.OK){
      console.log(response.routes[0].legs[0].distance.text)
      console.log(response.routes[0].legs[0].duration.text)
     }
  })
}
