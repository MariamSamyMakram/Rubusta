// Select color input
// Select size input
var height = document.getElementById('inputHeight'),
    width = document.getElementById('inputWidth'),
    color = document.getElementById('colorPicker'),
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
    var cell =document.getElementsByClassName('cell');
    console.log(cell);
    cell.addEventListener('click',function(){
      alert('cell');
    });
   } catch (error) {
     console.log(error);     
   }

  return false ;
}








