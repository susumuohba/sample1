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

// 

//


function test11(){
  var wH = cman_calH("DISP", "2");  // 高さ1/2の計算
  var wW = cman_calW("DISP", "2");  // 横幅1/2の計算
  var wT = cman_calT("DISP", "CC", wH);  // モニター中央 Top計算
  var wL = cman_calL("DISP", "CC", wW);  // モニター中央 Left計算
  var wOption = "top=" + wT + ", left=" + wL + ", height=" + wH + ", width=" + wW;

  // 画面を開く
  var winObj = window.open("https://main.d2wj7md4yan98g.amplifyapp.com/page022.html", "_blank", wOption);
  winObj.focus();

  try{
    winObj.resizeTo(wW,wH);
    winObj.moveTo(wL,wT);
  } catch(e){
  }

  delete winObj;
}

// -----------------------------------------
// 以下は汎用関数です。このまま使用ください
// -----------------------------------------
// 開く画面の高さ計算（px値でreturn）
function cman_calH( argDispOrHtml, argSize ){
  var wH = argDispOrHtml == "HTML" ? document.documentElement.clientHeight : screen.availHeight;
  if(!wH){return 100;}
  switch ( argSize ) {
    case "1":                          break;
    case "2": wH = Math.floor(wH / 2); break;
    case "3": wH = Math.floor(wH / 3); break;
    case "4": wH = Math.floor(wH / 4); break;
    default : wH = 100;                break;
  }
  if(wH < 100){return 100;}else{return wH;}
}
// 開く画面の横幅計算（px値でreturn）
function cman_calW( argDispOrHtml, argSize ){
  var wW = argDispOrHtml == "HTML" ? document.documentElement.clientWidth : screen.availWidth;
  if(!wW){return 100;}
  switch ( argSize ) {
    case "1":                          break;
    case "2": wW = Math.floor(wW / 2); break;
    case "3": wW = Math.floor(wW / 3); break;
    case "4": wW = Math.floor(wW / 4); break;
    default : wW = 100;                break;
  }
  if(wW < 100){return 100;}else{return wW;}
}
// 開く画面の開始縦位置を計算（px値でreturn）
function cman_calT( argDispOrHtml, argPos , argHeight ){
  var wBaseT = 0;
  if(argDispOrHtml == "HTML"){
    wBaseT = document.body.scrollTop;
    if(!wBaseT){wBaseT=0;}
  }
  var wH = argDispOrHtml == "HTML" ? document.documentElement.clientHeight : screen.availHeight;
  if(!wH){wH = 0;}
  var wTop = 0;
  switch ( argPos ) {
    case "CC": wTop = Math.floor((wH - argHeight) / 2) + wBaseT; break;
    case "LT": wTop = wBaseT; break;
    case "RT": wTop = wBaseT; break;
    case "RB": wTop = Math.floor(wH - argHeight) + wBaseT; break;
    case "LB": wTop = Math.floor(wH - argHeight) + wBaseT; break;
  }
  if(wTop < 0){return 0;}else{return wTop;}
}
// 開く画面の開始横位置を計算（px値でreturn）
function cman_calL( argDispOrHtml, argPos , argWidth ){
  var wBaseL = 0;
  if(argDispOrHtml == "HTML"){
    wBaseL = window.screenX || window.screenLeft;
    if(!wBaseL){wBaseL=0;}
  }
  var wW = argDispOrHtml == "HTML" ? document.documentElement.clientWidth : screen.availWidth;
  if(!wW){wW = 0;}
  var wLeft = 0;
  switch ( argPos ) {
    case "CC": wLeft = Math.floor((wW - argWidth) / 2) + wBaseL; break;
    case "LT": wLeft = wBaseL; break;
    case "RT": wLeft = Math.floor(wW - argWidth) + wBaseL; break;
    case "RB": wLeft = Math.floor(wW - argWidth) + wBaseL; break;
    case "LB": wLeft = wBaseL; break;
  }
  if(wLeft < 0){return 0;}else{return wLeft;}
}
