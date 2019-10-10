// Select color input
// Select size input
var height = document.getElementById('inputHeight'),
    width = document.getElementById('inputWidth'),
    colorStyle = document.getElementById('colorPicker'),
    form = document.getElementById('sizePicker'),
    table = document.getElementById('pixelCanvas');
    
// When size is submitted by the user, call makeGrid()


function makeGrid() {
  // Your code goes here!
   try {
    for( var h = 1 ; h <= height.value ; h++){
      var rowEl = table.insertRow();
      for(var w = 1 ; w <= width.value ; w++){
        rowEl.insertCell().setAttribute("class","cell");   
      }
    }
    var cells =document.getElementsByClassName('cell');
    Array.prototype.forEach.call(cells, function(cell) {
      cell.addEventListener('click',function(){
        cell.style.backgroundColor =colorStyle.value;
      });
    });
  
   } catch (error) {
     console.log(error);     
   }

  return false ;
}








