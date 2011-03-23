mobl.provides('test');
mobl.provides('mobl');
mobl.provides('sort');
test.arrayMatcher = function(expected, actual) {
   var __this = this;
  var coll640 = mobl.range(0, expected.length);
  var length557 = coll640.length;
  for(var i623 = 0; i623 < length557; i623++) {
    var index;
    index = coll640.get(i623);
    if(expected.get(index) != actual.get(index)) {
      return false;
    } else {
      
    }
  }
  return true;
};

test.checkSorted = function(sorted) {
   var __this = this;
  var coll641 = mobl.range(0, sorted.length - 1);
  var length558 = coll641.length;
  for(var i624 = 0; i624 < length558; i624++) {
    var index;
    index = coll641.get(i624);
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
                                     function after253(result__) {
                                       var tmp1306 = result__;
                                       var result__ = tmp1306;
                                       var actual = result__;
                                       mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                         var tmp1307 = result__;
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                     var result__ = sortMethod([1], after253);if(result__ !== undefined) after253(result__);
                                   }), mobl.test.testCase("sort two elements", function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = [1, 2];
                                     var expected = result__;
                                     function after254(result__) {
                                       var tmp1308 = result__;
                                       var result__ = tmp1308;
                                       var actual = result__;
                                       mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                         var tmp1309 = result__;
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                     var result__ = sortMethod([2, 1], after254);if(result__ !== undefined) after254(result__);
                                   }), mobl.test.testCase("sort three elements", function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = [1, 2, 3];
                                     var expected = result__;
                                     function after255(result__) {
                                       var tmp1310 = result__;
                                       var result__ = tmp1310;
                                       var actual = result__;
                                       mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                         var tmp1311 = result__;
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                     var result__ = sortMethod([2, 1, 3], after255);if(result__ !== undefined) after255(result__);
                                   }), mobl.test.testCase("sort two repeated elements", function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = [1, 1];
                                     var expected = result__;
                                     function after256(result__) {
                                       var tmp1312 = result__;
                                       var result__ = tmp1312;
                                       var actual = result__;
                                       mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                         var tmp1313 = result__;
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                     var result__ = sortMethod([1, 1], after256);if(result__ !== undefined) after256(result__);
                                   }), mobl.test.testCase("sort two repeated and one unique elements", function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = [1, 1, 2];
                                     var expected = result__;
                                     function after257(result__) {
                                       var tmp1314 = result__;
                                       var result__ = tmp1314;
                                       var actual = result__;
                                       mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                         var tmp1315 = result__;
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                     var result__ = sortMethod([1, 2, 1], after257);if(result__ !== undefined) after257(result__);
                                   }), mobl.test.testCase("sort nine elements", function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = [1, 1, 2, 3, 4, 5, 5, 6, 9];
                                     var expected = result__;
                                     function after258(result__) {
                                       var tmp1316 = result__;
                                       var result__ = tmp1316;
                                       var actual = result__;
                                       mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                         var tmp1317 = result__;
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     }
                                     var result__ = sortMethod([3, 1, 4, 1, 5, 9, 2, 6, 5], after258);if(result__ !== undefined) after258(result__);
                                   }), mobl.test.testCase("sort one thousand elements", function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = [];
                                     var thousand = result__;
                                     var result__ = mobl.range(0, 1000);
                                     mobl.range(0, 1000).list(function(coll642) {
                                       coll642 = coll642.reverse();
                                       function processOne47() {
                                         var index;
                                         index = coll642.pop();
                                         var result__ = thousand.push(mobl.random(9));
                                         
                                         if(coll642.length > 0) processOne47(); else rest47();
                                         
                                       }
                                       function rest47() {
                                         function after259(result__) {
                                           var tmp1320 = result__;
                                           var result__ = test.checkSorted(tmp1320);
                                           var tmp1319 = result__;
                                           var result__ = mobl.test.assert(tmp1319);
                                           var tmp1318 = result__;
                                           if(callback && callback.apply) callback(); return;
                                         }
                                         var result__ = sortMethod(thousand, after259);if(result__ !== undefined) after259(result__);
                                       }
                                       if(coll642.length > 0) processOne47(); else rest47();
                                     });
                                     
                                   })];
  if(callback && callback.apply) callback(result__);
  return;
  if(callback && callback.apply) callback(); return;
};


test.root = function(callback, screenCallback) {
  var root460 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes293 = $("<span>");
  root460.append(nodes293);
  subs__.addSub((mobl.test.testRunner)(function(_, callback) {
    var root461 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root461); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes293;
    nodes293 = node.contents();
    oldNodes.replaceWith(nodes293);
  }));
  callback(root460); return subs__;
  
  return subs__;
};
test.testCases(sort.bubble.bubbleSort, function(result__) {
  var tmp1322 = result__;
  var result__ = mobl.test.testSuite("Bubble Sort", tmp1322);
  var tmp1321 = result__;
  test.testCases(sort.quick.quickSort, function(result__) {
    var tmp1324 = result__;
    var result__ = mobl.test.testSuite("Quick Sort", tmp1324);
    var tmp1323 = result__;
    test.testCases(sort.merge.mergeSort, function(result__) {
      var tmp1326 = result__;
      var result__ = mobl.test.testSuite("Merge Sort", tmp1326);
      var tmp1325 = result__;
      test.testCases(sort.pancake.pancakeSort, function(result__) {
        var tmp1328 = result__;
        var result__ = mobl.test.testSuite("Pancake Sort", tmp1328);
        var tmp1327 = result__;
        var result__ = mobl.test.testSuite("Bubble Sort", [mobl.test.testCase("swap three elements", function(event, callback) {
                                                             if(event && event.stopPropagation) event.stopPropagation();
                                                             var result__ = [1, 2, 3];
                                                             var expected = result__;
                                                             var result__ = sort.bubble.swap([3, 2, 1], 0, 2);
                                                             var actual = result__;
                                                             mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                                               var tmp1329 = result__;
                                                               if(callback && callback.apply) callback(); return;
                                                             });
                                                           }), mobl.test.testCase("swap two elements", function(event, callback) {
                                                             if(event && event.stopPropagation) event.stopPropagation();
                                                             var result__ = [1, 2];
                                                             var expected = result__;
                                                             var result__ = sort.bubble.swap([2, 1], 0, 1);
                                                             var actual = result__;
                                                             mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                                               var tmp1330 = result__;
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
                                                               var tmp1331 = result__;
                                                               if(callback && callback.apply) callback(); return;
                                                             });
                                                           }), mobl.test.testCase("reverse one element", function(event, callback) {
                                                             if(event && event.stopPropagation) event.stopPropagation();
                                                             var result__ = [1];
                                                             var expected = result__;
                                                             var result__ = sort.pancake.reverse([1]);
                                                             var actual = result__;
                                                             mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                                               var tmp1332 = result__;
                                                               if(callback && callback.apply) callback(); return;
                                                             });
                                                           }), mobl.test.testCase("reverse even elements", function(event, callback) {
                                                             if(event && event.stopPropagation) event.stopPropagation();
                                                             var result__ = [1, 2, 3, 4];
                                                             var expected = result__;
                                                             var result__ = sort.pancake.reverse([4, 3, 2, 1]);
                                                             var actual = result__;
                                                             mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                                               var tmp1333 = result__;
                                                               if(callback && callback.apply) callback(); return;
                                                             });
                                                           }), mobl.test.testCase("reverse odd elements", function(event, callback) {
                                                             if(event && event.stopPropagation) event.stopPropagation();
                                                             var result__ = [1, 2, 3, 4, 5];
                                                             var expected = result__;
                                                             var result__ = sort.pancake.reverse([5, 4, 3, 2, 1]);
                                                             var actual = result__;
                                                             mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                                               var tmp1334 = result__;
                                                               if(callback && callback.apply) callback(); return;
                                                             });
                                                           }), mobl.test.testCase("join", function(event, callback) {
                                                             if(event && event.stopPropagation) event.stopPropagation();
                                                             var result__ = [1, 2, 3, 4];
                                                             var expected = result__;
                                                             var result__ = sort.pancake.join([1, 2], [3, 4]);
                                                             var actual = result__;
                                                             mobl.test.assertEqual(expected, actual, test.arrayMatcher, function(result__) {
                                                               var tmp1335 = result__;
                                                               if(callback && callback.apply) callback(); return;
                                                             });
                                                           })]);
        
      });
    });
  });
});