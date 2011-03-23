mobl.provides('sort.pancake');
sort.pancake.substring = function(arry, begin, end) {
   var __this = this;
  var substr = [];
  
  var coll636 = mobl.range(begin, end);
  var length553 = coll636.length;
  for(var i619 = 0; i619 < length553; i619++) {
    var index;
    index = coll636.get(i619);
    substr.push(arry.get(index));
  }
  return substr;
};

sort.pancake.reverse = function(arry) {
   var __this = this;
  var reversed = [];
  
  var coll637 = mobl.range(0, arry.length);
  var length554 = coll637.length;
  for(var i620 = 0; i620 < length554; i620++) {
    var index;
    index = coll637.get(i620);
    reversed.insert(0, arry.get(index));
  }
  return reversed;
};

sort.pancake.join = function(front, back) {
   var __this = this;
  var coll638 = mobl.range(0, back.length);
  var length555 = coll638.length;
  for(var i621 = 0; i621 < length555; i621++) {
    var index;
    index = coll638.get(i621);
    front.push(back.get(index));
  }
  return front;
};

sort.pancake.pancakeSort = function(unsorted) {
   var __this = this;
  if(unsorted.length < 2) {
    return unsorted;
  } else {
    
  }
  var maximum = unsorted.get(0);
  
  var maxIndex = 0;
  
  var coll639 = mobl.range(0, unsorted.length);
  var length556 = coll639.length;
  for(var i622 = 0; i622 < length556; i622++) {
    var index;
    index = coll639.get(i622);
    if(unsorted.get(index) > maximum) {
      maximum = unsorted.get(index);
      maxIndex = index;
    } else {
      
    }
  }
  var flipped = [];
  
  if(maxIndex != unsorted.length) {
    var prefix = sort.pancake.reverse(sort.pancake.substring(unsorted, 0, maxIndex));
    
    unsorted.splice(0, maxIndex + 1);
    flipped = sort.pancake.reverse(sort.pancake.join(prefix, unsorted));
  } else {
    
  }
  flipped.splice(flipped.length, 1);
  var sorted = sort.pancake.pancakeSort(flipped);
  
  sorted.push(maximum);
  return sorted;
};

