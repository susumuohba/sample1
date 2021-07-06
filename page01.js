function drawMap() {
   drawMap1() ; 
}

function dragTable() {
      // Bテーブル
     let tableElemB = document.getElementById('car2');

     // tbody要素にtr要素（行）を最後に追加
     let trElemB = tableElemB.tBodies[0].insertRow(-1);

     // td要素を追加
     let cellElemB = trElemB.insertCell(0);

     //td要素にテキストを追加
     cellElemB.appendChild(document.createTextNode('Eさん'));

     // td要素を追加
     let cellElemB2 = trElemB.insertCell(1);

     //td要素にテキストを追加
     cellElemB2.appendChild(document.createTextNode('熱田区○○○○'));

     let tableElem = document.getElementById('undefPeople');

      // 固定でいくつかの要素を削除する

      for (let i = 0 ; i < 2 ; i++){
          tableElem.deleteRow(0);
      }
}
<!---- --->
 function drawMap1() {
  
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
             //console.log(response.routes[0].legs[0].distance.text)
             //console.log(response.routes[0].legs[0].duration.text)
             directionsRenderer.setDirections(response)
          }
       })
    
      // 別のルートを表示
     directionsService2 = new google.maps.DirectionsService();
     directionsRenderer2 = new google.maps.DirectionsRenderer();
    
    // オプション設定
directionsRenderer2.setOptions({
//    suppressMarkers: false,
//    suppressPolylines: true,
//    suppressInfoWindows: false,
//    draggable: true,
//    preserveViewport: false,
    polylineOptions: {
        strokeColor: '#ff0000'
   //     strokeColor: '#ff0000',
  //      strokeOpacity: 0.5,
  //      strokeWeight: 3
    }
});
    
    
    
     directionsRenderer2.setMap(map);
      var request = {
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

       directionsService2.route(request,
         function(response,status){
          if (status == google.maps.DirectionsStatus.OK){
             //console.log(response.routes[0].legs[0].distance.text)
             //console.log(response.routes[0].legs[0].duration.text)
             directionsRenderer2.setDirections(response)
          }
       })
    　

      //End Function
      }
<!---- --->
function clicktr(){
   document.getElementById("tr1").style.backgroundColor="#E5EDFD";
}
