mobl.provides('sort.bubble');
sort.bubble.swap = function(arry, first, second) {
   var __this = this;
  var temp = arry.get(first);
  
  arry.splice(first, 1);
  arry.insert(first, arry.get(second - 1));
  arry.splice(second, 1);
  arry.insert(second, temp);
  return arry;
};

sort.bubble.bubbleSort = function(unsorted) {
   var __this = this;
  var coll626 = mobl.range(0, unsorted.length - 1);
  var length543 = coll626.length;
  for(var i609 = 0; i609 < length543; i609++) {
    var i;
    i = coll626.get(i609);
    var coll627 = mobl.range(0, unsorted.length - i - 1);
    var length544 = coll627.length;
    for(var i610 = 0; i610 < length544; i610++) {
      var j;
      j = coll627.get(i610);
      var temp = 0;
      
      if(unsorted.get(j) > unsorted.get(j + 1)) {
        sort.bubble.swap(unsorted, j, j + 1);
      } else {
        
      }
    }
  }
  return unsorted;
};

