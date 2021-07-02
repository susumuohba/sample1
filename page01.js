function drawMap() {
  alert("OK") ;  
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
}

