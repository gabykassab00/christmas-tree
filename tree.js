const TreeHt = parseInt(
  prompt("height of the tree:"),
  10
);

if (!isNaN(TreeHt) && TreeHt > 0) {
  const TREECnt = document.createElement("div");
  TREECnt.className = "tree-container";
  document.body.appendChild(TREECnt);

  for (let currentFloor = 1; currentFloor <= TreeHt; currentFloor++) {
    const floor = document.createElement("div");

    const spaces = "&nbsp;".repeat(TreeHt - currentFloor);
    floor.innerHTML += spaces;

    for (let j = 0; j < currentFloor * 2 - 1; j++) {
      if (j === 0 || j === currentFloor * 2 - 2) {
        floor.innerHTML += "<span class='red'>*</span>";
      } else {
        floor.innerHTML += "<span class='green'>|</span>";
      }
    }

    TREECnt.appendChild(floor);
  }
} 
