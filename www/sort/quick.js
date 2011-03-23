mobl.provides('sort.quick');
sort.quick.quickSort = function(unsorted) {
   var __this = this;
  if(unsorted.length < 2) {
    return unsorted;
  } else {
    
  }
  var pivot = unsorted[0];
  
  unsorted.splice(0, 1);
  var greater = [];
  
  var less = [];
  
  var coll633 = unsorted;
  var length550 = coll633.length;
  for(var i616 = 0; i616 < length550; i616++) {
    var item;
    item = coll633.get(i616);
    if(item > pivot) {
      greater.push(item);
    } else {
      less.push(item);
    }
  }
  var sorted = [];
  
  var coll634 = sort.quick.quickSort(less);
  var length551 = coll634.length;
  for(var i617 = 0; i617 < length551; i617++) {
    var item;
    item = coll634.get(i617);
    sorted.push(item);
  }
  sorted.push(pivot);
  var coll635 = sort.quick.quickSort(greater);
  var length552 = coll635.length;
  for(var i618 = 0; i618 < length552; i618++) {
    var item;
    item = coll635.get(i618);
    sorted.push(item);
  }
  return sorted;
};

