mobl.provides('sort.pancake');
sort.pancake.substring = function(arry, begin, end) {
   var __this = this;
  var substr = [];
  
  var coll652 = mobl.range(begin, end);
  var length561 = coll652.length;
  for(var i631 = 0; i631 < length561; i631++) {
    var index;
    index = coll652.get(i631);
    substr.push(arry.get(index));
  }
  return substr;
};

sort.pancake.reverse = function(arry) {
   var __this = this;
  var reversed = [];
  
  var coll653 = mobl.range(0, arry.length);
  var length562 = coll653.length;
  for(var i632 = 0; i632 < length562; i632++) {
    var index;
    index = coll653.get(i632);
    reversed.insert(0, arry.get(index));
  }
  return reversed;
};

sort.pancake.join = function(front, back) {
   var __this = this;
  var coll654 = mobl.range(0, back.length);
  var length563 = coll654.length;
  for(var i633 = 0; i633 < length563; i633++) {
    var index;
    index = coll654.get(i633);
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
  
  var coll655 = mobl.range(0, unsorted.length);
  var length564 = coll655.length;
  for(var i634 = 0; i634 < length564; i634++) {
    var index;
    index = coll655.get(i634);
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

