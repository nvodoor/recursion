// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var resultstring = "" + obj
  if (typeof obj === 'string') {
    return  '"' + obj + '"'
    // console.log('"' + obj + '"')
  };
  if (Array.isArray(obj)) {
    var objstring = []
    obj.forEach(function iterator (item) {
      // if (typeof item === 'string') {
        // objstring.push('"' + item + '"')
    // console.log('"' + obj + '"')
      // } else if (Array.isArray(item)) {
         //nestedObjString.push(item)
         //objstring.push("[" + nestedObjString + "]");
      //  }  else  {
    //  objstring.push(item.toString())
    //  };
      objstring.push(stringifyJSON(item))
    })
    // console.log("[" + objstring.toString() + "]")
    return ("[" + objstring.toString() + "]");
    // console.log ("[" + obj.toString() + "]");
    // return ("[" + marsbars.toString() + "]"")
  }

  if (typeof obj === 'object' && obj !== null) {
    var stringobj = [];
    function isEmpty(obj){
      console.log(obj)
      for(var key in obj){
        if(obj.hasOwnProperty(key)){
          return "{}";
        }
        // return "{" + obj + "}"
      }
    }
    if(isEmpty(obj) === undefined){
      return "{}"
    }
    if (isEmpty(obj) !== undefined) {
      for(var key in obj){
        if(typeof obj[key] === "function"){
          return "{}"
        }
        stringobj.push(stringifyJSON(key), ":",stringifyJSON(obj[key]),",")
      }
    }
    //console.log(stringobj)
    stringobj.pop()
    return "{" + stringobj.join("") + "}"
  }


   //console.log(resultstring)

  return resultstring
};
