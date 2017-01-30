// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var element = [];




  function child(parentNode){
    var parent = parentNode.childNodes;
    for (var i = 0; i < parent.length; i++){
        var classes = parent[i].classList;
        if (classes !== undefined && classes.contains(className)) {
            element.push(parent[i]);
        }
        if (parent[i].childNodes[0]){
            child(parent[i]);
        }
    }
  }
  child(document);
  console.log(element)
  return element;
};
