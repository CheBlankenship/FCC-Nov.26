function titleCase(str) {
  var result = [];
  var concat;
  console.log(str);
  var spt = str.split(" ");
  for(var i=0; i<=spt.length-1; i++){
    var position = spt[i];
    // console.log(position.length);
    if(position[0] !== position[0].toUpperCase()) {
      var up = upCase(position);
      console.log(up);
      result.push(up);
      if(position[i] !== position[0] && position[i] === position.toUpperCase()){
      var low = lowCase(position);
      console.log(low);
      result.push(low);
    }
    }
    else{
      result.push(position);
    }
    concat = result.join(" ");
    }
    return concat;
  }


// if (str[0] === str[0].toUpperCase())


function upCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
  }

function lowCase(str) {
  return str.charAt(0).toLowerCase() + str.slice();
  }
console.log(titleCase("I'm a liTTtle tea pot"));
