function drawMap() {
   alert('aa') ; 
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
          //   document.getElementById("textarea1").value = 
          //   response.routes[0].legs[0].distance.text + 
          //   "  " +
          //   response.routes[0].legs[0].duration.text; 
             //
            //
             directionsRenderer.setDirections(response)
          }
       })

      //End Function
      }
<!---- --->
function clicktr(){
   document.getElementById("tr1").style.backgroundColor="#E5EDFD";
}
