function returnValue() {
  var vertices = document.getElementById("vertices").value;
  var matrizVertices = new Array(parseInt(vertices))
  
  for (const indice of matrizVertices) {
    matrizVertices[indice] =  new Array(parseInt(vertices))
  }
  
  console.log(matrizVertices)
}