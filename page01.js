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


<!-- 顧客を操作するデモ用JavaScript -->
  <script>
   // 表の要素の削除
    function test1() {

      let tableElem = document.getElementById('undefPeople');

      // 固定でいくつかの要素を削除する

      for (let i = 0 ; i < 4 ; i++){
          tableElem.deleteRow(0);
      }

     // 固定でいくつかのデータを追加する
     /**************************************************************/
     // Aテーブル
     let tableElemA = document.getElementById('car1');

     // tbody要素にtr要素（行）を最後に追加
     let trElemA = tableElemA.tBodies[0].insertRow(-1);

     // td要素を追加
     let cellElemA = trElemA.insertCell(0);

     //td要素にテキストを追加
     cellElemA.appendChild(document.createTextNode('Aさん'));

     // td要素を追加
     let cellElemA2 = trElemA.insertCell(1);

     //td要素にテキストを追加
     cellElemA2.appendChild(document.createTextNode('中村区○○○○'));

     // tbody要素にtr要素（行）を最後に追加
     let trElemAA = tableElemA.tBodies[0].insertRow(-1);

     // td要素を追加
     let cellElemAA = trElemAA.insertCell(0);

     //td要素にテキストを追加
     cellElemAA.appendChild(document.createTextNode('Dさん'));

     // td要素を追加
     let cellElemAA2 = trElemAA.insertCell(1);

     //td要素にテキストを追加
     cellElemAA2.appendChild(document.createTextNode('熱田区○○○○'));


     /**************************************************************/

      // Bテーブル
     let tableElemB = document.getElementById('car2');

     // tbody要素にtr要素（行）を最後に追加
     let trElemB = tableElemB.tBodies[0].insertRow(-1);

     // td要素を追加
     let cellElemB = trElemB.insertCell(0);

     //td要素にテキストを追加
     cellElemB.appendChild(document.createTextNode('Bさん'));

     // td要素を追加
     let cellElemB2 = trElemB.insertCell(1);

     //td要素にテキストを追加
     cellElemB2.appendChild(document.createTextNode('中区○○○○'));

     /**************************************************************/

       // Cテーブル
     let tableElemC = document.getElementById('car3');

     // tbody要素にtr要素（行）を最後に追加
     let trElemC = tableElemC.tBodies[0].insertRow(-1);

     // td要素を追加
     let cellElemC = trElemC.insertCell(0);

     //td要素にテキストを追加
     cellElemC.appendChild(document.createTextNode('Cさん'));

     // td要素を追加
     let cellElemC2 = trElemC.insertCell(1);

     //td要素にテキストを追加
     cellElemC2.appendChild(document.createTextNode('中区○○○○'));
}

<!---  Test --->
function drawMap() {
  alert("OK") ;  
}
