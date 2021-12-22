// * Create a table 100x100. Compare performance in adding listener to each cell click and event delegation.
// * Apply drag & drop functionality to each cell.


let table = document.createElement('table'),
   tr, td, row, cell;
for (row = 0; row < 100; row++) {
   tr = table.insertRow(row);
   for (cell = 0; cell < 100; cell++) {
      td = tr.insertCell(cell);
      td.draggable = true
      td.ondragstart = drag;

      function drag(e) {
         e.dataTransfer.setData('style', tr.style.background);
      }
      td.onmouseover = selectCell.bind(td);
      td.addEventListener('drop', dropped.bind(td))
   }
   table.appendChild(tr);
}
document.getElementById('block').appendChild(table);

table.ondragover = allowDrop;
table.ondrop = drop;

function drop(e) {
   let itemId = e.dataTransfer.getData('style')
   console.log(itemId);
   e.target.append(table.itemId)
}

function allowDrop(e) {
   e.preventDefault()
}


let selectedCell = null;

function selectCell() {
   if (selectedCell != null) {
      selectedCell.classList.remove('selected');
   }
   selectedCell = this;

   this.classList.add('selected');
   this.classList.add('blue');
}

function dropped() {
   this.classList.add('blue')
}