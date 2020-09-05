function returnValue() {

  var vertices = document.getElementById("vertices").value;
  var grafo = []

  for(let i=0; i<vertices; i++){
    grafo.push([0, 0, 0, 0, 0])
  }

  console.log(grafo)
}