mobl.provides('test');
mobl.provides('mobl');
mobl.provides('sort');
test.arrayMatcher = function(expected, actual) {
   var __this = this;
  var coll643 = mobl.range(0, expected.length);
  var length559 = coll643.length;
  for(var i627 = 0; i627 < length559; i627++) {
    var index;
    index = coll643.get(i627);
    if(expected.get(index) != actual.get(index)) {
      return false;
    } else {
      
    }
  }
  return true;
};

test.checkSorted = function(sorted) {
   var __this = this;
  var coll644 = mobl.range(0, sorted.length - 1);
  var length560 = coll644.length;
  for(var i628 = 0; i628 < length560; i628++) {
    var index;
    index = coll644.get(i628);
    if(sorted.get(index) > sorted.get(index + 1)) {
      return false;
    } else {
      
    }
  }
  return true;
};

test.testCases = function(sortMethod, callback) {
  var __this = this;
  var result__ = [mobl.test.testCase("sort one element", function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = [1];
                                     var expected = result__;
                                     function after260(result__) {
                                       var tmp1336 = result__;
                                       var result__ = tmp1336;
                                       var actual = result__;
                                       mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                         var tmp1337 = result__;
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                     var result__ = sortMethod([1], after260);if(result__ !== undefined) after260(result__);
                                   }), mobl.test.testCase("sort two elements", function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = [1, 2];
                                     var expected = result__;
                                     function after261(result__) {
                                       var tmp1338 = result__;
                                       var result__ = tmp1338;
                                       var actual = result__;
                                       mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                         var tmp1339 = result__;
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                     var result__ = sortMethod([2, 1], after261);if(result__ !== undefined) after261(result__);
                                   }), mobl.test.testCase("sort three elements", function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = [1, 2, 3];
                                     var expected = result__;
                                     function after262(result__) {
                                       var tmp1340 = result__;
                                       var result__ = tmp1340;
                                       var actual = result__;
                                       mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                         var tmp1341 = result__;
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                     var result__ = sortMethod([2, 1, 3], after262);if(result__ !== undefined) after262(result__);
                                   }), mobl.test.testCase("sort two repeated elements", function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = [1, 1];
                                     var expected = result__;
                                     function after263(result__) {
                                       var tmp1342 = result__;
                                       var result__ = tmp1342;
                                       var actual = result__;
                                       mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                         var tmp1343 = result__;
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                     var result__ = sortMethod([1, 1], after263);if(result__ !== undefined) after263(result__);
                                   }), mobl.test.testCase("sort two repeated and one unique elements", function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = [1, 1, 2];
                                     var expected = result__;
                                     function after264(result__) {
                                       var tmp1344 = result__;
                                       var result__ = tmp1344;
                                       var actual = result__;
                                       mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                         var tmp1345 = result__;
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                     var result__ = sortMethod([1, 2, 1], after264);if(result__ !== undefined) after264(result__);
                                   }), mobl.test.testCase("sort nine elements", function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = [1, 1, 2, 3, 4, 5, 5, 6, 9];
                                     var expected = result__;
                                     function after265(result__) {
                                       var tmp1346 = result__;
                                       var result__ = tmp1346;
                                       var actual = result__;
                                       mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                         var tmp1347 = result__;
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                     var result__ = sortMethod([3, 1, 4, 1, 5, 9, 2, 6, 5], after265);if(result__ !== undefined) after265(result__);
                                   }), mobl.test.testCase("sort one thousand elements", function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = [];
                                     var thousand = result__;
                                     var result__ = mobl.range(0, 1000);
                                     mobl.range(0, 1000).list(function(coll645) {
                                       coll645 = coll645.reverse();
                                       function processOne48() {
                                         var index;
                                         index = coll645.pop();
                                         var result__ = thousand.push(mobl.random(9));
                                         
                                         if(coll645.length > 0) processOne48(); else rest48();
                                         
                                       }
                                       function rest48() {
                                         function after266(result__) {
                                           var tmp1350 = result__;
                                           var result__ = test.checkSorted(tmp1350);
                                           var tmp1349 = result__;
                                           var result__ = mobl.test.assert(tmp1349);
                                           var tmp1348 = result__;
                                           if(callback && callback.apply) callback(); return;
                                         }
                                         var result__ = sortMethod(thousand, after266);if(result__ !== undefined) after266(result__);
                                       }
                                       if(coll645.length > 0) processOne48(); else rest48();
                                     });
                                     
                                   })];
  if(callback && callback.apply) callback(result__);
  return;
  if(callback && callback.apply) callback(); return;
};


test.root = function(callback, screenCallback) {
  var root462 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes294 = $("<span>");
  root462.append(nodes294);
  subs__.addSub((mobl.test.testRunner)(function(_, callback) {
    var root463 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root463); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes294;
    nodes294 = node.contents();
    oldNodes.replaceWith(nodes294);
  }));
  callback(root462); return subs__;
  
  return subs__;
};
test.testCases(sort.bubble.bubbleSort, function(result__) {
  var tmp1352 = result__;
  var result__ = mobl.test.testSuite("Bubble Sort", tmp1352);
  var tmp1351 = result__;
  test.testCases(sort.quick.quickSort, function(result__) {
    var tmp1354 = result__;
    var result__ = mobl.test.testSuite("Quick Sort", tmp1354);
    var tmp1353 = result__;
    test.testCases(sort.merge.mergeSort, function(result__) {
      var tmp1356 = result__;
      var result__ = mobl.test.testSuite("Merge Sort", tmp1356);
      var tmp1355 = result__;
      test.testCases(sort.pancake.pancakeSort, function(result__) {
        var tmp1358 = result__;
        var result__ = mobl.test.testSuite("Pancake Sort", tmp1358);
        var tmp1357 = result__;
        var result__ = mobl.test.testSuite("Bubble Sort", [mobl.test.testCase("swap three elements", function(event, callback) {
                                                             if(event && event.stopPropagation) event.stopPropagation();
                                                             var result__ = [1, 2, 3];
                                                             var expected = result__;
                                                             var result__ = sort.bubble.swap([3, 2, 1], 0, 2);
                                                             var actual = result__;
                                                             mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                                               var tmp1359 = result__;
                                                               if(callback && callback.apply) callback(); return;
                                                             });
                                                           }), mobl.test.testCase("swap two elements", function(event, callback) {
                                                             if(event && event.stopPropagation) event.stopPropagation();
                                                             var result__ = [1, 2];
                                                             var expected = result__;
                                                             var result__ = sort.bubble.swap([2, 1], 0, 1);
                                                             var actual = result__;
                                                             mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                                               var tmp1360 = result__;
                                                               if(callback && callback.apply) callback(); return;
                                                             });
                                                           })]);
        var result__ = mobl.test.testSuite("Pancake Sort", [mobl.test.testCase("substring", function(event, callback) {
                                                             if(event && event.stopPropagation) event.stopPropagation();
                                                             var result__ = [0, 1];
                                                             var expected = result__;
                                                             var result__ = sort.pancake.substring([0, 1, 2, 3, 4], 0, 2);
                                                             var actual = result__;
                                                             mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                                               var tmp1361 = result__;
                                                               if(callback && callback.apply) callback(); return;
                                                             });
                                                           }), mobl.test.testCase("reverse one element", function(event, callback) {
                                                             if(event && event.stopPropagation) event.stopPropagation();
                                                             var result__ = [1];
                                                             var expected = result__;
                                                             var result__ = sort.pancake.reverse([1]);
                                                             var actual = result__;
                                                             mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                                               var tmp1362 = result__;
                                                               if(callback && callback.apply) callback(); return;
                                                             });
                                                           }), mobl.test.testCase("reverse even elements", function(event, callback) {
                                                             if(event && event.stopPropagation) event.stopPropagation();
                                                             var result__ = [1, 2, 3, 4];
                                                             var expected = result__;
                                                             var result__ = sort.pancake.reverse([4, 3, 2, 1]);
                                                             var actual = result__;
                                                             mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                                               var tmp1363 = result__;
                                                               if(callback && callback.apply) callback(); return;
                                                             });
                                                           }), mobl.test.testCase("reverse odd elements", function(event, callback) {
                                                             if(event && event.stopPropagation) event.stopPropagation();
                                                             var result__ = [1, 2, 3, 4, 5];
                                                             var expected = result__;
                                                             var result__ = sort.pancake.reverse([5, 4, 3, 2, 1]);
                                                             var actual = result__;
                                                             mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                                               var tmp1364 = result__;
                                                               if(callback && callback.apply) callback(); return;
                                                             });
                                                           }), mobl.test.testCase("join", function(event, callback) {
                                                             if(event && event.stopPropagation) event.stopPropagation();
                                                             var result__ = [1, 2, 3, 4];
                                                             var expected = result__;
                                                             var result__ = sort.pancake.join([1, 2], [3, 4]);
                                                             var actual = result__;
                                                             mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                                               var tmp1365 = result__;
                                                               if(callback && callback.apply) callback(); return;
                                                             });
                                                           })]);
        
      });
    });
  });
});