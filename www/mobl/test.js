mobl.provides('mobl.test');
mobl.provides('mobl.ui');
mobl.provides('mobl.test');
mobl.test.testSuites = mobl.ref([]);
mobl.test.testCases = mobl.ref([]);
mobl.test.testLog = mobl.ref(new persistence.LocalQueryCollection([]));
mobl.test.currentCaseResult = mobl.ref(null);
mobl.test.caseSetUp = mobl.ref(null);
mobl.test.caseTearDown = mobl.ref(null);
mobl.test.space = mobl.ref(/\s/g);
mobl.test.underscores = mobl.ref("__");
mobl.test.suiteMode = mobl.ref(false);
mobl.test.currentSuite = mobl.ref("");
mobl.test.suiteButtonSymbol = mobl.ref(">>");
mobl.test.testSuite = function(suite, cases) {
   var __this = this;
  var coll623 = mobl.test.testCases.get();
  var length542 = coll623.length;
  for(var i603 = 0; i603 < length542; i603++) {
    var description;var block;
    var tmp1287 = coll623.get(i603);
    description = tmp1287._1;block = tmp1287._2;
    if(mobl.test.caseSetUp.get()) {
      mobl.test.testSuites.get().push(new mobl.Tuple(suite, description, mobl.test.caseSetUp.get()));
    } else {
      
    }
    mobl.test.testSuites.get().push(new mobl.Tuple(suite, description, block));
    if(mobl.test.caseTearDown.get()) {
      mobl.test.testSuites.get().push(new mobl.Tuple(suite, description, mobl.test.caseTearDown.get()));
    } else {
      
    }
  }
  mobl.test.testCases.get().length = 0;
  mobl.test.caseSetUp.set(null);
  mobl.test.caseTearDown.set(null);
};

mobl.test.testCase = function(description, tests) {
   var __this = this;
  mobl.test.testCases.get().push(new mobl.Tuple(description, tests));
};

mobl.test.setUp = function(block) {
   var __this = this;
  mobl.test.caseSetUp.set(block);
};

mobl.test.tearDown = function(block) {
   var __this = this;
  mobl.test.caseTearDown.set(block);
};

mobl.test.defaultMatcher = function(expected, actual) {
   var __this = this;
  return expected == actual;
};

mobl.test.assertEqual = function(expected, actual, matcher, callback) {
  var __this = this;
  function after249(result__) {
    var tmp1288 = result__;
    var result__ = tmp1288;
    if(result__) {
      {
        var result__ = mobl.test.currentCaseResult.get().results.add(mobl.instantiate(mobl.test.type.TestResult, {'success': true}));
        if(callback && callback.apply) callback(); return;
      }
    } else {
      {
        var result__ = mobl.test.currentCaseResult.get().results.add(mobl.instantiate(mobl.test.type.TestResult, {'success': false, 'message': "Expected: " + expected + " Got: " + actual}));
        if(callback && callback.apply) callback(); return;
      }
    }
  }
  var result__ = matcher(expected, actual, after249);if(result__ !== undefined) after249(result__);
};

mobl.test.assert = function(value) {
   var __this = this;
  mobl.test.currentCaseResult.get().results.add(mobl.instantiate(mobl.test.type.TestResult, {'success': value}));
};

mobl.test.click = function(er, callback) {
  var __this = this;
  function after250(result__) {
    var tmp1289 = result__;
    if(callback && callback.apply) callback(); return;
  }
  var result__ = er(null, after250);if(result__ !== undefined) after250(result__);
};

mobl.test.find = function(property, value, collection, hollow, callback) {
  var __this = this;
  collection.filter(property, "=", value).one(function(result__) {
    var tmp1290 = result__;
    var result__ = tmp1290;
    var item = result__;
    var result__ = hollow != null && item == null;
    if(result__) {
      var result__ = hollow;
      item = result__;
      var result__ = collection.add(item);
      var result__ = item;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    } else {
      {
        var result__ = item;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      }
    }
  });
};

mobl.test.logTestSuite = function(suite, kase, callback) {
  var __this = this;
  mobl.test.find("description", suite, mobl.test.testLog.get(), mobl.instantiate(mobl.test.type.TestSuiteResult, {'description': suite, 'cases': new persistence.LocalQueryCollection([])}), function(result__) {
    var tmp1291 = result__;
    var result__ = tmp1291;
    var tsr = result__;
    mobl.test.find("description", kase, tsr.cases, mobl.instantiate(mobl.test.type.TestCaseResult, {'description': kase, 'results': new persistence.LocalQueryCollection([]), 'elapsed': 0}), function(result__) {
      var tmp1292 = result__;
      var result__ = tmp1292;
      mobl.test.currentCaseResult.set(result__);
      if(callback && callback.apply) callback(); return;
    });
  });
};

mobl.test.runAllTests = function(callback) {
  var __this = this;
  mobl.test.testLog.get().destroyAll(function(result__) {
    var tmp1293 = result__;
    var result__ = mobl.test.testSuites.get();
    mobl.test.testSuites.get().list(function(coll624) {
      coll624 = coll624.reverse();
      function processOne45() {
        var suite;var kase;var runTests;
        var tmp1296 = coll624.pop();
        suite = tmp1296._1;kase = tmp1296._2;runTests = tmp1296._3;
        mobl.test.logTestSuite(suite, kase, function(result__) {
          var tmp1294 = result__;
          var result__ = mobl.now().getTime();
          var start = result__;
          function after251(result__) {
            var tmp1295 = result__;
            var result__ = mobl.test.currentCaseResult.get().elapsed + mobl.now().getTime() - start;
            mobl.test.currentCaseResult.get().elapsed = result__;
            
            if(coll624.length > 0) processOne45(); else rest45();
            
          }
          var result__ = runTests(null, after251);if(result__ !== undefined) after251(result__);
        });
      }
      function rest45() {
        if(callback && callback.apply) callback(); return;
      }
      if(coll624.length > 0) processOne45(); else rest45();
    });
    
  });
};

mobl.test.runSuite = function(name, callback) {
  var __this = this;
  mobl.test.testLog.get().destroyAll(function(result__) {
    var tmp1297 = result__;
    var result__ = mobl.test.testSuites.get();
    mobl.test.testSuites.get().list(function(coll625) {
      coll625 = coll625.reverse();
      function processOne46() {
        var suite;var kase;var runTests;
        var tmp1300 = coll625.pop();
        suite = tmp1300._1;kase = tmp1300._2;runTests = tmp1300._3;
        var result__ = suite == name;
        if(result__) {
          mobl.test.logTestSuite(suite, kase, function(result__) {
            var tmp1298 = result__;
            var result__ = mobl.now().getTime();
            var start = result__;
            function after252(result__) {
              var tmp1299 = result__;
              var result__ = mobl.now().getTime() - start;
              mobl.test.currentCaseResult.get().elapsed = result__;
              
              if(coll625.length > 0) processOne46(); else rest46();
              
            }
            var result__ = runTests(null, after252);if(result__ !== undefined) after252(result__);
          });
        } else {
          {
            
            if(coll625.length > 0) processOne46(); else rest46();
            
          }
        }
      }
      function rest46() {
        if(callback && callback.apply) callback(); return;
      }
      if(coll625.length > 0) processOne46(); else rest46();
    });
    
  });
};


mobl.test.showTestResults = function(results, elements, callback) {
  var root444 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node215 = mobl.loadingSpan();
  root444.append(node215);
  var list35;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList35 = function() {
    var subs__ = listSubs__;
    list35 = results.get();
    list35.list(function(results41) {
      node215.empty();
      for(var i604 = 0; i604 < results41.length; i604++) {
        (function() {
          var iternode35 = $("<span>");
          node215.append(iternode35);
          var result;
          result = mobl.ref(mobl.ref(results41), i604);
          
          var tmp1267 = mobl.ref(result.get().success ? mobl.test.style.successItemStyle : mobl.test.style.failureItemStyle);
          subs__.addSub(mobl.ref(result, 'success').addEventListener('change', function() {
            tmp1267.set(result.get().success ? mobl.test.style.successItemStyle : mobl.test.style.failureItemStyle);
          }));
          subs__.addSub(mobl.ref(mobl.test.style.successItemStyle).addEventListener('change', function() {
            tmp1267.set(result.get().success ? mobl.test.style.successItemStyle : mobl.test.style.failureItemStyle);
          }));
          subs__.addSub(mobl.ref(mobl.test.style.failureItemStyle).addEventListener('change', function() {
            tmp1267.set(result.get().success ? mobl.test.style.successItemStyle : mobl.test.style.failureItemStyle);
          }));
          
          
          var tmp1270 = mobl.ref(false);
          
          
          var tmp1269 = mobl.ref(null);
          
          
          var tmp1268 = mobl.ref(null);
          
          var nodes279 = $("<span>");
          iternode35.append(nodes279);
          subs__.addSub((mobl.ui.generic.item)(tmp1267, mobl.ref(mobl.ui.generic.itemPushedStyle), tmp1268, tmp1269, tmp1270, function(_, callback) {
            var root445 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            
            var node216 = $("<span>");
            root445.append(node216);
            var condSubs34 = new mobl.CompSubscription();
            subs__.addSub(condSubs34);
            var oldValue34;
            var renderCond34 = function() {
              var value58 = result.get().success;
              if(oldValue34 === value58) return;
              oldValue34 = value58;
              var subs__ = condSubs34;
              subs__.unsubscribe();
              node216.empty();
              if(value58) {
                
                var tmp1257 = mobl.ref("[OK] ");
                
                
                var tmp1259 = mobl.ref(null);
                
                
                var tmp1258 = mobl.ref(null);
                
                var nodes280 = $("<span>");
                node216.append(nodes280);
                subs__.addSub((mobl.label)(tmp1257, tmp1258, tmp1259, function(_, callback) {
                  var root446 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root446); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes280;
                  nodes280 = node.contents();
                  oldNodes.replaceWith(nodes280);
                }));
                
                
              } else {
                
                var tmp1260 = mobl.ref("[FAIL] ");
                
                
                var tmp1262 = mobl.ref(null);
                
                
                var tmp1261 = mobl.ref(null);
                
                var nodes281 = $("<span>");
                node216.append(nodes281);
                subs__.addSub((mobl.label)(tmp1260, tmp1261, tmp1262, function(_, callback) {
                  var root447 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root447); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes281;
                  nodes281 = node.contents();
                  oldNodes.replaceWith(nodes281);
                }));
                
                var node217 = $("<span>");
                node216.append(node217);
                var condSubs35 = new mobl.CompSubscription();
                subs__.addSub(condSubs35);
                var oldValue35;
                var renderCond35 = function() {
                  var value59 = result.get().message;
                  if(oldValue35 === value59) return;
                  oldValue35 = value59;
                  var subs__ = condSubs35;
                  subs__.unsubscribe();
                  node217.empty();
                  if(value59) {
                    
                    var tmp1266 = mobl.ref(null);
                    
                    
                    var tmp1265 = mobl.ref(null);
                    
                    var nodes282 = $("<span>");
                    node217.append(nodes282);
                    subs__.addSub((mobl.ui.generic.block)(mobl.ref(mobl.test.style.descriptionStyle), tmp1265, tmp1266, function(_, callback) {
                      var root448 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      
                      var tmp1264 = mobl.ref(null);
                      
                      
                      var tmp1263 = mobl.ref(null);
                      
                      var nodes283 = $("<span>");
                      root448.append(nodes283);
                      subs__.addSub((mobl.label)(mobl.ref(result, 'message'), tmp1263, tmp1264, function(_, callback) {
                        var root449 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root449); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes283;
                        nodes283 = node.contents();
                        oldNodes.replaceWith(nodes283);
                      }));
                      callback(root448); return subs__;
                      
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes282;
                      nodes282 = node.contents();
                      oldNodes.replaceWith(nodes282);
                    }));
                    
                    
                  } else {
                    
                  }
                };
                renderCond35();
                subs__.addSub(mobl.ref(result, 'message').addEventListener('change', function() {
                  renderCond35();
                }));
                
                
                
                
              }
            };
            renderCond34();
            subs__.addSub(mobl.ref(result, 'success').addEventListener('change', function() {
              renderCond34();
            }));
            
            callback(root445); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes279;
            nodes279 = node.contents();
            oldNodes.replaceWith(nodes279);
          }));
          
          var oldNodes = iternode35;
          iternode35 = iternode35.contents();
          oldNodes.replaceWith(iternode35);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list35.addEventListener('change', function() { listSubs__.unsubscribe(); renderList35(true); }));
      subs__.addSub(results.addEventListener('change', function() { listSubs__.unsubscribe(); renderList35(true); }));
    });
  };
  renderList35();
  
  callback(root444); return subs__;
  
  return subs__;
};

mobl.test.testRunner = function(elements, callback) {
  var root450 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp1273 = mobl.ref("Specifications");
  
  
  var tmp1274 = mobl.ref(null);
  
  var nodes284 = $("<span>");
  root450.append(nodes284);
  subs__.addSub((mobl.ui.generic.header)(tmp1273, tmp1274, function(_, callback) {
    var root451 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp1272 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = mobl.test.suiteMode.get();
                         if(result__) {
                           mobl.test.runSuite(mobl.test.currentSuite.get(), function(result__) {
                             var tmp1301 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         } else {
                           {
                             mobl.test.runAllTests(function(result__) {
                               var tmp1302 = result__;
                               if(callback && callback.apply) callback(); return;
                             });
                           }
                         }
                       });
    
    
    var tmp1271 = mobl.ref("Run");
    
    var nodes285 = $("<span>");
    root451.append(nodes285);
    subs__.addSub((mobl.ui.generic.button)(tmp1271, mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp1272, function(_, callback) {
      var root452 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root452); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes285;
      nodes285 = node.contents();
      oldNodes.replaceWith(nodes285);
    }));
    callback(root451); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes284;
    nodes284 = node.contents();
    oldNodes.replaceWith(nodes284);
  }));
  var nodes286 = $("<span>");
  root450.append(nodes286);
  subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
    var root453 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node218 = mobl.loadingSpan();
    root453.append(node218);
    var list36;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList36 = function() {
      var subs__ = listSubs__;
      list36 = mobl.test.testLog.get();
      list36.list(function(results42) {
        node218.empty();
        for(var i605 = 0; i605 < results42.length; i605++) {
          (function() {
            var iternode36 = $("<span>");
            node218.append(iternode36);
            var suite;
            suite = mobl.ref(mobl.ref(results42), i605);
            
            var cases = mobl.ref(suite.get().cases);
            cases.get().count(function(result__) {
              var count = mobl.ref(result__);
              
              var suite_id = mobl.ref(suite.get().description.replace(mobl.test.space.get(), mobl.test.underscores.get()));
              
              var tmp1278 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = mobl.$("#" + suite_id.get()).slideToggle(null);
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp1280 = mobl.ref(false);
              
              
              var tmp1279 = mobl.ref(null);
              
              var nodes287 = $("<span>");
              iternode36.append(nodes287);
              subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.test.style.suiteItemStyle), mobl.ref(mobl.test.style.suiteItemStyle), tmp1278, tmp1279, tmp1280, function(_, callback) {
                var root454 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                
                var tmp1276 = mobl.ref(null);
                
                
                var tmp1275 = mobl.ref(null);
                
                var nodes288 = $("<span>");
                root454.append(nodes288);
                subs__.addSub((mobl.label)(mobl.ref(suite, 'description'), tmp1275, tmp1276, function(_, callback) {
                  var root455 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root455); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes288;
                  nodes288 = node.contents();
                  oldNodes.replaceWith(nodes288);
                }));
                
                var tmp1277 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = !mobl.test.suiteMode.get();
                                     mobl.test.suiteMode.set(result__);
                                     var result__ = mobl.test.suiteMode.get();
                                     if(result__) {
                                       var result__ = "<<";
                                       mobl.test.suiteButtonSymbol.set(result__);
                                       var result__ = suite.get().description;
                                       mobl.test.currentSuite.set(result__);
                                       mobl.test.runSuite(suite.get().description, function(result__) {
                                         var tmp1303 = result__;
                                         if(callback && callback.apply) callback(); return;
                                       });
                                     } else {
                                       {
                                         var result__ = ">>";
                                         mobl.test.suiteButtonSymbol.set(result__);
                                         mobl.test.runAllTests(function(result__) {
                                           var tmp1304 = result__;
                                           if(callback && callback.apply) callback(); return;
                                         });
                                       }
                                     }
                                   });
                
                var nodes289 = $("<span>");
                root454.append(nodes289);
                subs__.addSub((mobl.label)(mobl.test.suiteButtonSymbol, mobl.ref(mobl.test.style.suiteButtonStyle), tmp1277, function(_, callback) {
                  var root456 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root456); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes289;
                  nodes289 = node.contents();
                  oldNodes.replaceWith(nodes289);
                }));
                callback(root454); return subs__;
                
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes287;
                nodes287 = node.contents();
                oldNodes.replaceWith(nodes287);
              }));
              
              var node219 = $("<div>");
              
              var ref235 = suite_id;
              if(ref235.get() !== null) {
                node219.attr('id', ref235.get());
                subs__.addSub(ref235.addEventListener('change', function(_, ref, val) {
                  node219.attr('id', val);
                }));
                
              }
              subs__.addSub(ref235.rebind());
              
              
              var node220 = mobl.loadingSpan();
              node219.append(node220);
              var list37;
              var listSubs__ = new mobl.CompSubscription();
              subs__.addSub(listSubs__);
              var renderList37 = function() {
                var subs__ = listSubs__;
                list37 = cases.get();
                list37.list(function(results43) {
                  node220.empty();
                  for(var i606 = 0; i606 < results43.length; i606++) {
                    (function() {
                      var iternode37 = $("<span>");
                      node220.append(iternode37);
                      var kase;
                      kase = mobl.ref(mobl.ref(results43), i606);
                      
                      var kase_id = mobl.ref(kase.get().description.replace(mobl.test.space.get(), mobl.test.underscores.get()));
                      
                      var tmp1284 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = mobl.$("#" + suite_id.get() + "_" + kase_id.get()).slideToggle(null);
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp1286 = mobl.ref(false);
                      
                      
                      var tmp1285 = mobl.ref(null);
                      
                      var nodes290 = $("<span>");
                      iternode37.append(nodes290);
                      subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.test.style.caseItemStyle), mobl.ref(mobl.test.style.caseItemStyle), tmp1284, tmp1285, tmp1286, function(_, callback) {
                        var root457 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        
                        var tmp1281 = mobl.ref(kase.get().description + " (" + kase.get().elapsed + " ms)");
                        subs__.addSub(mobl.ref(kase, 'description').addEventListener('change', function() {
                          tmp1281.set(kase.get().description + " (" + kase.get().elapsed + " ms)");
                        }));
                        subs__.addSub(mobl.ref(kase, 'elapsed').addEventListener('change', function() {
                          tmp1281.set(kase.get().description + " (" + kase.get().elapsed + " ms)");
                        }));
                        
                        
                        var tmp1283 = mobl.ref(null);
                        
                        
                        var tmp1282 = mobl.ref(null);
                        
                        var nodes291 = $("<span>");
                        root457.append(nodes291);
                        subs__.addSub((mobl.label)(tmp1281, tmp1282, tmp1283, function(_, callback) {
                          var root458 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root458); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes291;
                          nodes291 = node.contents();
                          oldNodes.replaceWith(nodes291);
                        }));
                        callback(root457); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes290;
                        nodes290 = node.contents();
                        oldNodes.replaceWith(nodes290);
                      }));
                      
                      var node221 = $("<div>");
                      
                      var ref234 = mobl.ref(suite_id.get() + "_" + kase_id.get());
                      if(ref234.get() !== null) {
                        node221.attr('id', ref234.get());
                        subs__.addSub(ref234.addEventListener('change', function(_, ref, val) {
                          node221.attr('id', val);
                        }));
                        subs__.addSub(suite_id.addEventListener('change', function() {
                          node221.attr('id', suite_id.get() + "_" + kase_id.get());
                        }));
                        subs__.addSub(kase_id.addEventListener('change', function() {
                          node221.attr('id', suite_id.get() + "_" + kase_id.get());
                        }));
                        
                      }
                      subs__.addSub(ref234.rebind());
                      
                      var nodes292 = $("<span>");
                      node221.append(nodes292);
                      subs__.addSub((mobl.test.showTestResults)(mobl.ref(kase, 'results'), function(_, callback) {
                        var root459 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root459); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes292;
                        nodes292 = node.contents();
                        oldNodes.replaceWith(nodes292);
                      }));
                      iternode37.append(node221);
                      
                      var oldNodes = iternode37;
                      iternode37 = iternode37.contents();
                      oldNodes.replaceWith(iternode37);
                      
                      
                      
                      
                    }());
                  }
                  mobl.delayedUpdateScrollers();
                  subs__.addSub(list37.addEventListener('change', function() { listSubs__.unsubscribe(); renderList37(true); }));
                  subs__.addSub(cases.addEventListener('change', function() { listSubs__.unsubscribe(); renderList37(true); }));
                });
              };
              renderList37();
              
              iternode36.append(node219);
              
              var oldNodes = iternode36;
              iternode36 = iternode36.contents();
              oldNodes.replaceWith(iternode36);
              
              
              
              
            });
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list36.addEventListener('change', function() { listSubs__.unsubscribe(); renderList36(true); }));
        subs__.addSub(mobl.test.testLog.addEventListener('change', function() { listSubs__.unsubscribe(); renderList36(true); }));
      });
    };
    renderList36();
    
    callback(root453); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes286;
    nodes286 = node.contents();
    oldNodes.replaceWith(nodes286);
  }));
  mobl.test.runAllTests(function(result__) {
    var tmp1305 = result__;
    
  });
  callback(root450); return subs__;
  
  
  
  return subs__;
};
