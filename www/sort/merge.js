mobl.provides('sort.merge');
sort.merge.min = function(a, b) {
   var __this = this;
  if(a < b) {
    return a;
  } else {
    
  }
  return b;
};

sort.merge.merge = function(left, right) {
   var __this = this;
  var result = [];
  
  if(right.get(0) <= left.get(0)) {
    result.push(right.get(0));
    right.splice(0, 1);
  } else {
    result.push(left.get(0));
    left.splice(0, 1);
  }
  if(left.length > 0 || right.length > 0) {
    if(left.length == 0) {
      var coll628 = mobl.range(0, right.length);
      var length545 = coll628.length;
      for(var i611 = 0; i611 < length545; i611++) {
        var index;
        index = coll628.get(i611);
        result.push(right.get(index));
      }
    } else {
      
    }
    if(right.length == 0) {
      var coll629 = mobl.range(0, left.length);
      var length546 = coll629.length;
      for(var i612 = 0; i612 < length546; i612++) {
        var index;
        index = coll629.get(i612);
        result.push(left.get(index));
      }
    } else {
      
    }
    if(left.length > 0 && right.length > 0) {
      var ret = sort.merge.merge(left, right);
      
      var coll630 = mobl.range(0, ret.length);
      var length547 = coll630.length;
      for(var i613 = 0; i613 < length547; i613++) {
        var index;
        index = coll630.get(i613);
        result.push(ret.get(index));
      }
    } else {
      
    }
  } else {
    
  }
  return result;
};

sort.merge.mergeSort = function(unsorted) {
   var __this = this;
  if(unsorted.length < 2) {
    return unsorted;
  } else {
    
  }
  var left = [];
  
  var right = [];
  
  var result = [];
  
  var middle = mobl.Math.round(unsorted.length / 2);
  
  var coll631 = mobl.range(0, middle);
  var length548 = coll631.length;
  for(var i614 = 0; i614 < length548; i614++) {
    var index;
    index = coll631.get(i614);
    left.push(unsorted.get(index));
  }
  var coll632 = mobl.range(middle, unsorted.length);
  var length549 = coll632.length;
  for(var i615 = 0; i615 < length549; i615++) {
    var index;
    index = coll632.get(i615);
    right.push(unsorted.get(index));
  }
  left = sort.merge.mergeSort(left);
  right = sort.merge.mergeSort(right);
  result = sort.merge.merge(left, right);
  return result;
};

