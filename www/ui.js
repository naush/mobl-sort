mobl.provides('ui');
mobl.provides('mobl.ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, elements, callback) {
  var root268 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node115 = $("<span>");
  root268.append(node115);
  var condSubs18 = new mobl.CompSubscription();
  subs__.addSub(condSubs18);
  var oldValue18;
  var renderCond18 = function() {
    var value34 = value.get();
    if(oldValue18 === value34) return;
    oldValue18 = value34;
    var subs__ = condSubs18;
    subs__.unsubscribe();
    node115.empty();
    if(value34) {
      var nodes165 = $("<span>");
      node115.append(nodes165);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl50();
      }));
      
      function renderControl50() {
        subs__.addSub((elements)(function(elements, callback) {
          var root269 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root269); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes165;
          nodes165 = node.contents();
          oldNodes.replaceWith(nodes165);
        }));
      }
      renderControl50();
      
      
    } else {
      
      var tmp1103 = mobl.ref(null);
      
      
      var tmp1102 = mobl.ref(null);
      
      var nodes166 = $("<span>");
      node115.append(nodes166);
      subs__.addSub((ui.block)(mobl.ref(ui.loadingStyle), tmp1102, tmp1103, function(_, callback) {
        var root270 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        root270.append("Loading...");
        
        var tmp1096 = mobl.ref("middle");
        
        
        var tmp1095 = mobl.ref("mobl/ui/generic/loading-large.gif");
        
        
        var tmp1101 = mobl.ref(null);
        
        
        var tmp1100 = mobl.ref(null);
        
        
        var tmp1099 = mobl.ref(null);
        
        
        var tmp1098 = mobl.ref(null);
        
        
        var tmp1097 = mobl.ref(null);
        
        var nodes167 = $("<span>");
        root270.append(nodes167);
        subs__.addSub((ui.image)(tmp1095, tmp1097, tmp1098, tmp1099, tmp1100, tmp1096, tmp1101, function(_, callback) {
          var root271 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root271); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes167;
          nodes167 = node.contents();
          oldNodes.replaceWith(nodes167);
        }));
        callback(root270); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes166;
        nodes166 = node.contents();
        oldNodes.replaceWith(nodes166);
      }));
      
      
    }
  };
  renderCond18();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond18();
  }));
  
  callback(root268); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, onclick, elements, callback) {
  var root272 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node116 = $("<div>");
  
  var ref125 = mobl.ref(ui.headerStyle);
  if(ref125.get() !== null) {
    node116.attr('class', ref125.get());
    subs__.addSub(ref125.addEventListener('change', function(_, ref, val) {
      node116.attr('class', val);
    }));
    
  }
  subs__.addSub(ref125.rebind());
  
  var val66 = onclick.get();
  if(val66 !== null) {
    subs__.addSub(mobl.domBind(node116, 'tap', val66));
  }
  
  
  var node117 = $("<div>");
  
  var ref124 = mobl.ref(ui.headerContainerStyle);
  if(ref124.get() !== null) {
    node117.attr('class', ref124.get());
    subs__.addSub(ref124.addEventListener('change', function(_, ref, val) {
      node117.attr('class', val);
    }));
    
  }
  subs__.addSub(ref124.rebind());
  
  
  var node118 = $("<div>");
  
  var ref122 = text;
  node118.text(""+ref122.get());
  var ignore28 = false;
  subs__.addSub(ref122.addEventListener('change', function(_, ref, val) {
    if(ignore28) return;
    node118.text(""+val);
  }));
  subs__.addSub(ref122.rebind());
  
  
  var ref123 = mobl.ref(ui.headerTextStyle);
  if(ref123.get() !== null) {
    node118.attr('class', ref123.get());
    subs__.addSub(ref123.addEventListener('change', function(_, ref, val) {
      node118.attr('class', val);
    }));
    
  }
  subs__.addSub(ref123.rebind());
  
  node117.append(node118);
  node116.append(node117);
  var nodes168 = $("<span>");
  node116.append(nodes168);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl51();
  }));
  
  function renderControl51() {
    subs__.addSub((elements)(function(elements, callback) {
      var root273 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root273); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes168;
      nodes168 = node.contents();
      oldNodes.replaceWith(nodes168);
    }));
  }
  renderControl51();
  root272.append(node116);
  callback(root272); return subs__;
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root274 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref126 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref126.get() !== null) {
    sp.attr('class', ref126.get());
    subs__.addSub(ref126.addEventListener('change', function(_, ref, val) {
      sp.attr('class', val);
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(style.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    
  }
  subs__.addSub(ref126.rebind());
  
  var val67 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val67 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val67));
  }
  
  var val68 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.y < 0 || event.y > sp.outerHeight() || event.x < 0 || event.x > sp.outerWidth();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val68 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val68));
  }
  
  var val69 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after243(result__) {
                    var tmp1164 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after243);if(result__ !== undefined) after243(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val69 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val69));
  }
  
  var val70 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val70 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val70));
  }
  
  var ref127 = text;
  sp.text(""+ref127.get());
  var ignore29 = false;
  subs__.addSub(ref127.addEventListener('change', function(_, ref, val) {
    if(ignore29) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref127.rebind());
  
  
  root274.append(sp);
  callback(root274); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root275 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes169 = $("<span>");
  root275.append(nodes169);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root276 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root276); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes169;
    nodes169 = node.contents();
    oldNodes.replaceWith(nodes169);
  }));
  callback(root275); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root277 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes170 = $("<span>");
  root277.append(nodes170);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root278 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root278); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes170;
    nodes170 = node.contents();
    oldNodes.replaceWith(nodes170);
  }));
  callback(root277); return subs__;
  
  return subs__;
};

ui.block = function(cssClass, id, onclick, elements, callback) {
  var root279 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node119 = $("<div>");
  
  var ref128 = id;
  if(ref128.get() !== null) {
    node119.attr('id', ref128.get());
    subs__.addSub(ref128.addEventListener('change', function(_, ref, val) {
      node119.attr('id', val);
    }));
    
  }
  subs__.addSub(ref128.rebind());
  
  var ref129 = cssClass;
  if(ref129.get() !== null) {
    node119.attr('class', ref129.get());
    subs__.addSub(ref129.addEventListener('change', function(_, ref, val) {
      node119.attr('class', val);
    }));
    
  }
  subs__.addSub(ref129.rebind());
  
  var val71 = onclick.get();
  if(val71 !== null) {
    subs__.addSub(mobl.domBind(node119, 'tap', val71));
  }
  
  var nodes171 = $("<span>");
  node119.append(nodes171);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl52();
  }));
  
  function renderControl52() {
    subs__.addSub((elements)(function(elements, callback) {
      var root280 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root280); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes171;
      nodes171 = node.contents();
      oldNodes.replaceWith(nodes171);
    }));
  }
  renderControl52();
  root279.append(node119);
  callback(root279); return subs__;
  
  
  return subs__;
};

ui.span = function(cssClass, id, onclick, elements, callback) {
  var root281 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node120 = $("<span>");
  
  var ref130 = id;
  if(ref130.get() !== null) {
    node120.attr('id', ref130.get());
    subs__.addSub(ref130.addEventListener('change', function(_, ref, val) {
      node120.attr('id', val);
    }));
    
  }
  subs__.addSub(ref130.rebind());
  
  var ref131 = cssClass;
  if(ref131.get() !== null) {
    node120.attr('class', ref131.get());
    subs__.addSub(ref131.addEventListener('change', function(_, ref, val) {
      node120.attr('class', val);
    }));
    
  }
  subs__.addSub(ref131.rebind());
  
  var val72 = onclick.get();
  if(val72 !== null) {
    subs__.addSub(mobl.domBind(node120, 'tap', val72));
  }
  
  var nodes172 = $("<span>");
  node120.append(nodes172);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl53();
  }));
  
  function renderControl53() {
    subs__.addSub((elements)(function(elements, callback) {
      var root282 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root282); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes172;
      nodes172 = node.contents();
      oldNodes.replaceWith(nodes172);
    }));
  }
  renderControl53();
  root281.append(node120);
  callback(root281); return subs__;
  
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root283 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node121 = $("<ul>");
  
  var ref132 = mobl.ref(ui.groupStyle);
  if(ref132.get() !== null) {
    node121.attr('class', ref132.get());
    subs__.addSub(ref132.addEventListener('change', function(_, ref, val) {
      node121.attr('class', val);
    }));
    
  }
  subs__.addSub(ref132.rebind());
  
  var nodes173 = $("<span>");
  node121.append(nodes173);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl54();
  }));
  
  function renderControl54() {
    subs__.addSub((elements)(function(elements, callback) {
      var root284 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root284); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes173;
      nodes173 = node.contents();
      oldNodes.replaceWith(nodes173);
    }));
  }
  renderControl54();
  root283.append(node121);
  callback(root283); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root285 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node122 = $("<img>");
  
  var ref133 = url;
  if(ref133.get() !== null) {
    node122.attr('src', ref133.get());
    subs__.addSub(ref133.addEventListener('change', function(_, ref, val) {
      node122.attr('src', val);
    }));
    
  }
  subs__.addSub(ref133.rebind());
  
  var ref134 = width;
  if(ref134.get() !== null) {
    node122.attr('width', ref134.get());
    subs__.addSub(ref134.addEventListener('change', function(_, ref, val) {
      node122.attr('width', val);
    }));
    
  }
  subs__.addSub(ref134.rebind());
  
  var ref135 = height;
  if(ref135.get() !== null) {
    node122.attr('height', ref135.get());
    subs__.addSub(ref135.addEventListener('change', function(_, ref, val) {
      node122.attr('height', val);
    }));
    
  }
  subs__.addSub(ref135.rebind());
  
  var ref136 = style;
  if(ref136.get() !== null) {
    node122.attr('class', ref136.get());
    subs__.addSub(ref136.addEventListener('change', function(_, ref, val) {
      node122.attr('class', val);
    }));
    
  }
  subs__.addSub(ref136.rebind());
  
  var val73 = onclick.get();
  if(val73 !== null) {
    subs__.addSub(mobl.domBind(node122, 'tap', val73));
  }
  
  var ref137 = valign;
  if(ref137.get() !== null) {
    node122.attr('valign', ref137.get());
    subs__.addSub(ref137.addEventListener('change', function(_, ref, val) {
      node122.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref137.rebind());
  
  var ref138 = align;
  if(ref138.get() !== null) {
    node122.attr('align', ref138.get());
    subs__.addSub(ref138.addEventListener('change', function(_, ref, val) {
      node122.attr('align', val);
    }));
    
  }
  subs__.addSub(ref138.rebind());
  
  root285.append(node122);
  callback(root285); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root286 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref139 = mobl.ref(ui.itemStyle);
  if(ref139.get() !== null) {
    el.attr('class', ref139.get());
    subs__.addSub(ref139.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref139.rebind());
  
  var ref140 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref140.get() !== null) {
    el.attr('class', ref140.get());
    subs__.addSub(ref140.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(mobl.ref(ui.itemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(style.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    
  }
  subs__.addSub(ref140.rebind());
  
  var val74 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp1165 = result__;
                                           function after244(result__) {
                                             var tmp1166 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after244);if(result__ !== undefined) after244(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp1167 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val74 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val74));
  }
  
  var nodes174 = $("<span>");
  el.append(nodes174);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl55();
  }));
  
  function renderControl55() {
    subs__.addSub((elements)(function(elements, callback) {
      var root287 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root287); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes174;
      nodes174 = node.contents();
      oldNodes.replaceWith(nodes174);
    }));
  }
  renderControl55();
  root286.append(el);
  callback(root286); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root288 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node123 = $("<input>");
  node123.attr('type', "checkbox");
  
  var ref142 = b;
  node123.attr('checked', !!ref142.get());
  subs__.addSub(ref142.addEventListener('change', function(_, ref, val) {
    if(ref === ref142) node123.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node123, 'change', function() {
    b.set(!!node123.attr('checked'));
  }));
  
  var val76 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val76 !== null) {
    subs__.addSub(mobl.domBind(node123, 'tap', val76));
  }
  
  var val77 = onchange.get();
  if(val77 !== null) {
    subs__.addSub(mobl.domBind(node123, 'change', val77));
  }
  
  root288.append(node123);
  
  root288.append(" ");
  
  var node124 = $("<span>");
  
  var ref141 = label;
  node124.text(""+ref141.get());
  var ignore30 = false;
  subs__.addSub(ref141.addEventListener('change', function(_, ref, val) {
    if(ignore30) return;
    node124.text(""+val);
  }));
  subs__.addSub(ref141.rebind());
  
  
  var val75 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after245(result__) {
                    var tmp1168 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after245);if(result__ !== undefined) after245(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val75 !== null) {
    subs__.addSub(mobl.domBind(node124, 'tap', val75));
  }
  
  root288.append(node124);
  callback(root288); return subs__;
  
  
  return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';

ui.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
  var root289 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node125 = $("<span>");
  root289.append(node125);
  var condSubs19 = new mobl.CompSubscription();
  subs__.addSub(condSubs19);
  var oldValue19;
  var renderCond19 = function() {
    var value35 = label.get();
    if(oldValue19 === value35) return;
    oldValue19 = value35;
    var subs__ = condSubs19;
    subs__.unsubscribe();
    node125.empty();
    if(value35) {
      
      var node126 = $("<span>");
      node126.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref146 = label;
      node126.text(""+ref146.get());
      var ignore32 = false;
      subs__.addSub(ref146.addEventListener('change', function(_, ref, val) {
        if(ignore32) return;
        node126.text(""+val);
      }));
      subs__.addSub(ref146.rebind());
      
      
      node125.append(node126);
      
      var node127 = $("<span>");
      node127.attr('style', "float: left");
      
      
      var node128 = $("<input>");
      node128.attr('type', "text");
      
      var ref143 = mobl.ref(ui.textFieldStyle);
      if(ref143.get() !== null) {
        node128.attr('class', ref143.get());
        subs__.addSub(ref143.addEventListener('change', function(_, ref, val) {
          node128.attr('class', val);
        }));
        
      }
      subs__.addSub(ref143.rebind());
      
      var ref144 = placeholder;
      if(ref144.get() !== null) {
        node128.attr('placeholder', ref144.get());
        subs__.addSub(ref144.addEventListener('change', function(_, ref, val) {
          node128.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref144.rebind());
      
      var ref145 = s;
      node128.val(""+ref145.get());
      var ignore31 = false;
      subs__.addSub(ref145.addEventListener('change', function(_, ref, val) {
        if(ignore31) return;
        node128.val(""+val);
      }));
      subs__.addSub(ref145.rebind());
      
      subs__.addSub(mobl.domBind(node128, 'keyup change', function() {
        ignore31 = true;
        s.set(mobl.stringTomobl__String(node128.val()));
        ignore31 = false;
      }));
      
      
      var val78 = onchange.get();
      if(val78 !== null) {
        subs__.addSub(mobl.domBind(node128, 'change', val78));
      }
      
      var val79 = onkeyup.get();
      if(val79 !== null) {
        subs__.addSub(mobl.domBind(node128, 'keyup', val79));
      }
      
      var val80 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val80 !== null) {
        subs__.addSub(mobl.domBind(node128, 'blur', val80));
      }
      
      node127.append(node128);
      node125.append(node127);
      
      
      
      
    } else {
      
      var node129 = $("<input>");
      node129.attr('type', "text");
      
      var ref147 = mobl.ref(ui.textFieldStyle);
      if(ref147.get() !== null) {
        node129.attr('class', ref147.get());
        subs__.addSub(ref147.addEventListener('change', function(_, ref, val) {
          node129.attr('class', val);
        }));
        
      }
      subs__.addSub(ref147.rebind());
      
      var ref148 = placeholder;
      if(ref148.get() !== null) {
        node129.attr('placeholder', ref148.get());
        subs__.addSub(ref148.addEventListener('change', function(_, ref, val) {
          node129.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref148.rebind());
      
      var ref149 = s;
      node129.val(""+ref149.get());
      var ignore33 = false;
      subs__.addSub(ref149.addEventListener('change', function(_, ref, val) {
        if(ignore33) return;
        node129.val(""+val);
      }));
      subs__.addSub(ref149.rebind());
      
      subs__.addSub(mobl.domBind(node129, 'keyup change', function() {
        ignore33 = true;
        s.set(mobl.stringTomobl__String(node129.val()));
        ignore33 = false;
      }));
      
      
      var val81 = onchange.get();
      if(val81 !== null) {
        subs__.addSub(mobl.domBind(node129, 'change', val81));
      }
      
      var val82 = onkeyup.get();
      if(val82 !== null) {
        subs__.addSub(mobl.domBind(node129, 'keyup', val82));
      }
      
      var val83 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val83 !== null) {
        subs__.addSub(mobl.domBind(node129, 'blur', val83));
      }
      
      node125.append(node129);
      
      
    }
  };
  renderCond19();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond19();
  }));
  
  callback(root289); return subs__;
  
  return subs__;
};

ui.numField = function(n, placeholder, label, onchange, elements, callback) {
  var root290 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node130 = $("<span>");
  root290.append(node130);
  var condSubs20 = new mobl.CompSubscription();
  subs__.addSub(condSubs20);
  var oldValue20;
  var renderCond20 = function() {
    var value38 = label.get();
    if(oldValue20 === value38) return;
    oldValue20 = value38;
    var subs__ = condSubs20;
    subs__.unsubscribe();
    node130.empty();
    if(value38) {
      
      var node131 = $("<span>");
      node131.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref153 = label;
      node131.text(""+ref153.get());
      var ignore35 = false;
      subs__.addSub(ref153.addEventListener('change', function(_, ref, val) {
        if(ignore35) return;
        node131.text(""+val);
      }));
      subs__.addSub(ref153.rebind());
      
      
      node130.append(node131);
      
      var node132 = $("<span>");
      node132.attr('style', "float: left");
      
      
      var node133 = $("<input>");
      node133.attr('type', "text");
      
      var ref150 = mobl.ref(ui.textFieldStyle);
      if(ref150.get() !== null) {
        node133.attr('class', ref150.get());
        subs__.addSub(ref150.addEventListener('change', function(_, ref, val) {
          node133.attr('class', val);
        }));
        
      }
      subs__.addSub(ref150.rebind());
      
      var ref151 = placeholder;
      if(ref151.get() !== null) {
        node133.attr('placeholder', ref151.get());
        subs__.addSub(ref151.addEventListener('change', function(_, ref, val) {
          node133.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref151.rebind());
      
      var ref152 = n;
      node133.val(""+ref152.get());
      var ignore34 = false;
      subs__.addSub(ref152.addEventListener('change', function(_, ref, val) {
        if(ignore34) return;
        node133.val(""+val);
      }));
      subs__.addSub(ref152.rebind());
      
      subs__.addSub(mobl.domBind(node133, 'keyup change', function() {
        ignore34 = true;
        n.set(mobl.stringTomobl__Num(node133.val()));
        ignore34 = false;
      }));
      
      
      var val84 = onchange.get();
      if(val84 !== null) {
        subs__.addSub(mobl.domBind(node133, 'change', val84));
      }
      
      var val85 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val85 !== null) {
        subs__.addSub(mobl.domBind(node133, 'blur', val85));
      }
      
      node132.append(node133);
      node130.append(node132);
      
      
      
      
    } else {
      
      var node134 = $("<input>");
      node134.attr('type', "text");
      
      var ref154 = mobl.ref(ui.textFieldStyle);
      if(ref154.get() !== null) {
        node134.attr('class', ref154.get());
        subs__.addSub(ref154.addEventListener('change', function(_, ref, val) {
          node134.attr('class', val);
        }));
        
      }
      subs__.addSub(ref154.rebind());
      
      var ref155 = placeholder;
      if(ref155.get() !== null) {
        node134.attr('placeholder', ref155.get());
        subs__.addSub(ref155.addEventListener('change', function(_, ref, val) {
          node134.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref155.rebind());
      
      var ref156 = n;
      node134.val(""+ref156.get());
      var ignore36 = false;
      subs__.addSub(ref156.addEventListener('change', function(_, ref, val) {
        if(ignore36) return;
        node134.val(""+val);
      }));
      subs__.addSub(ref156.rebind());
      
      subs__.addSub(mobl.domBind(node134, 'keyup change', function() {
        ignore36 = true;
        n.set(mobl.stringTomobl__Num(node134.val()));
        ignore36 = false;
      }));
      
      
      var val86 = onchange.get();
      if(val86 !== null) {
        subs__.addSub(mobl.domBind(node134, 'change', val86));
      }
      
      var val87 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val87 !== null) {
        subs__.addSub(mobl.domBind(node134, 'blur', val87));
      }
      
      node130.append(node134);
      
      
    }
  };
  renderCond20();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond20();
  }));
  
  callback(root290); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
  var root291 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node135 = $("<span>");
  root291.append(node135);
  var condSubs21 = new mobl.CompSubscription();
  subs__.addSub(condSubs21);
  var oldValue21;
  var renderCond21 = function() {
    var value39 = label.get();
    if(oldValue21 === value39) return;
    oldValue21 = value39;
    var subs__ = condSubs21;
    subs__.unsubscribe();
    node135.empty();
    if(value39) {
      
      var node136 = $("<span>");
      node136.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref160 = label;
      node136.text(""+ref160.get());
      var ignore38 = false;
      subs__.addSub(ref160.addEventListener('change', function(_, ref, val) {
        if(ignore38) return;
        node136.text(""+val);
      }));
      subs__.addSub(ref160.rebind());
      
      
      node135.append(node136);
      
      var node137 = $("<span>");
      node137.attr('style', "float: left");
      
      
      var node138 = $("<input>");
      node138.attr('type', "password");
      
      var ref157 = mobl.ref(ui.textFieldStyle);
      if(ref157.get() !== null) {
        node138.attr('class', ref157.get());
        subs__.addSub(ref157.addEventListener('change', function(_, ref, val) {
          node138.attr('class', val);
        }));
        
      }
      subs__.addSub(ref157.rebind());
      
      var ref158 = placeholder;
      if(ref158.get() !== null) {
        node138.attr('placeholder', ref158.get());
        subs__.addSub(ref158.addEventListener('change', function(_, ref, val) {
          node138.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref158.rebind());
      
      var ref159 = s;
      node138.val(""+ref159.get());
      var ignore37 = false;
      subs__.addSub(ref159.addEventListener('change', function(_, ref, val) {
        if(ignore37) return;
        node138.val(""+val);
      }));
      subs__.addSub(ref159.rebind());
      
      subs__.addSub(mobl.domBind(node138, 'keyup change', function() {
        ignore37 = true;
        s.set(mobl.stringTomobl__String(node138.val()));
        ignore37 = false;
      }));
      
      
      var val88 = onchange.get();
      if(val88 !== null) {
        subs__.addSub(mobl.domBind(node138, 'change', val88));
      }
      
      var val89 = onkeyup.get();
      if(val89 !== null) {
        subs__.addSub(mobl.domBind(node138, 'keyup', val89));
      }
      
      var val90 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val90 !== null) {
        subs__.addSub(mobl.domBind(node138, 'blur', val90));
      }
      
      node137.append(node138);
      node135.append(node137);
      
      
      
      
    } else {
      
      var node139 = $("<input>");
      node139.attr('type', "password");
      
      var ref161 = mobl.ref(ui.textFieldStyle);
      if(ref161.get() !== null) {
        node139.attr('class', ref161.get());
        subs__.addSub(ref161.addEventListener('change', function(_, ref, val) {
          node139.attr('class', val);
        }));
        
      }
      subs__.addSub(ref161.rebind());
      
      var ref162 = placeholder;
      if(ref162.get() !== null) {
        node139.attr('placeholder', ref162.get());
        subs__.addSub(ref162.addEventListener('change', function(_, ref, val) {
          node139.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref162.rebind());
      
      var ref163 = s;
      node139.val(""+ref163.get());
      var ignore39 = false;
      subs__.addSub(ref163.addEventListener('change', function(_, ref, val) {
        if(ignore39) return;
        node139.val(""+val);
      }));
      subs__.addSub(ref163.rebind());
      
      subs__.addSub(mobl.domBind(node139, 'keyup change', function() {
        ignore39 = true;
        s.set(mobl.stringTomobl__String(node139.val()));
        ignore39 = false;
      }));
      
      
      var val91 = onchange.get();
      if(val91 !== null) {
        subs__.addSub(mobl.domBind(node139, 'change', val91));
      }
      
      var val92 = onkeyup.get();
      if(val92 !== null) {
        subs__.addSub(mobl.domBind(node139, 'keyup', val92));
      }
      
      var val93 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val93 !== null) {
        subs__.addSub(mobl.domBind(node139, 'blur', val93));
      }
      
      node135.append(node139);
      
      
    }
  };
  renderCond21();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond21();
  }));
  
  callback(root291); return subs__;
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, elements, callback) {
  var root292 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp1110 = mobl.ref(null);
  
  
  var tmp1109 = mobl.ref(null);
  
  var nodes175 = $("<span>");
  root292.append(nodes175);
  subs__.addSub((ui.block)(mobl.ref(ui.tabbarStyle), tmp1109, tmp1110, function(_, callback) {
    var root293 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node140 = mobl.loadingSpan();
    root293.append(node140);
    var list19;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList19 = function() {
      var subs__ = listSubs__;
      list19 = tabs.get();
      list19.list(function(results23) {
        node140.empty();
        for(var i587 = 0; i587 < results23.length; i587++) {
          (function() {
            var iternode19 = $("<span>");
            node140.append(iternode19);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results23), i587), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results23), i587), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results23), i587), "_3");
            
            var tmp1107 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp1107.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp1107.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
              tmp1107.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp1107.set(activeTabName.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
            }));
            
            
            var tmp1106 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp1108 = mobl.ref(null);
            
            var nodes176 = $("<span>");
            iternode19.append(nodes176);
            subs__.addSub((ui.span)(tmp1107, tmp1108, tmp1106, function(_, callback) {
              var root294 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp1105 = mobl.ref(null);
              
              
              var tmp1104 = mobl.ref(null);
              
              var nodes177 = $("<span>");
              root294.append(nodes177);
              subs__.addSub((mobl.label)(tabName, tmp1104, tmp1105, function(_, callback) {
                var root295 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root295); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes177;
                nodes177 = node.contents();
                oldNodes.replaceWith(nodes177);
              }));
              callback(root294); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes176;
              nodes176 = node.contents();
              oldNodes.replaceWith(nodes176);
            }));
            
            var oldNodes = iternode19;
            iternode19 = iternode19.contents();
            oldNodes.replaceWith(iternode19);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list19.addEventListener('change', function() { listSubs__.unsubscribe(); renderList19(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList19(true); }));
      });
    };
    renderList19();
    
    callback(root293); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes175;
    nodes175 = node.contents();
    oldNodes.replaceWith(nodes175);
  }));
  
  var node141 = mobl.loadingSpan();
  root292.append(node141);
  var list20;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList20 = function() {
    var subs__ = listSubs__;
    list20 = tabs.get();
    list20.list(function(results24) {
      node141.empty();
      for(var i588 = 0; i588 < results24.length; i588++) {
        (function() {
          var iternode20 = $("<span>");
          node141.append(iternode20);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results24), i588), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results24), i588), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results24), i588), "_3");
          
          var tmp1111 = mobl.ref(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp1111.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp1111.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
            tmp1111.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
            tmp1111.set(activeTabName.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
          }));
          
          
          var tmp1113 = mobl.ref(null);
          
          
          var tmp1112 = mobl.ref(null);
          
          var nodes178 = $("<span>");
          iternode20.append(nodes178);
          subs__.addSub((ui.block)(tmp1111, tmp1112, tmp1113, function(_, callback) {
            var root296 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes179 = $("<span>");
            root296.append(nodes179);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root297 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes180 = $("<span>");
              root297.append(nodes180);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl56();
              }));
              
              function renderControl56() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root298 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root298); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes180;
                  nodes180 = node.contents();
                  oldNodes.replaceWith(nodes180);
                }));
              }
              renderControl56();
              callback(root297); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes179;
              nodes179 = node.contents();
              oldNodes.replaceWith(nodes179);
            }));
            callback(root296); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes178;
            nodes178 = node.contents();
            oldNodes.replaceWith(nodes178);
          }));
          
          var oldNodes = iternode20;
          iternode20 = iternode20.contents();
          oldNodes.replaceWith(iternode20);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list20.addEventListener('change', function() { listSubs__.unsubscribe(); renderList20(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList20(true); }));
    });
  };
  renderList20();
  
  callback(root292); return subs__;
  
  
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root299 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node142 = $("<div>");
  
  var ref167 = mobl.ref(ui.searchboxStyle);
  if(ref167.get() !== null) {
    node142.attr('class', ref167.get());
    subs__.addSub(ref167.addEventListener('change', function(_, ref, val) {
      node142.attr('class', val);
    }));
    
  }
  subs__.addSub(ref167.rebind());
  
  
  var node143 = $("<input>");
  node143.attr('type', "text");
  
  var ref164 = mobl.ref(ui.searchBoxInputStyle);
  if(ref164.get() !== null) {
    node143.attr('class', ref164.get());
    subs__.addSub(ref164.addEventListener('change', function(_, ref, val) {
      node143.attr('class', val);
    }));
    
  }
  subs__.addSub(ref164.rebind());
  
  var ref165 = placeholder;
  if(ref165.get() !== null) {
    node143.attr('placeholder', ref165.get());
    subs__.addSub(ref165.addEventListener('change', function(_, ref, val) {
      node143.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref165.rebind());
  
  var ref166 = s;
  node143.val(""+ref166.get());
  var ignore40 = false;
  subs__.addSub(ref166.addEventListener('change', function(_, ref, val) {
    if(ignore40) return;
    node143.val(""+val);
  }));
  subs__.addSub(ref166.rebind());
  
  subs__.addSub(mobl.domBind(node143, 'keyup change', function() {
    ignore40 = true;
    s.set(mobl.stringTomobl__String(node143.val()));
    ignore40 = false;
  }));
  
  
  var val94 = onsearch.get();
  if(val94 !== null) {
    subs__.addSub(mobl.domBind(node143, 'change', val94));
  }
  
  var val95 = onkeyup.get();
  if(val95 !== null) {
    subs__.addSub(mobl.domBind(node143, 'keyup', val95));
  }
  node143.attr('autocorrect', "off");
  node143.attr('autocapitalize', "off");
  node143.attr('autocomplete', "off");
  
  node142.append(node143);
  root299.append(node142);
  callback(root299); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root300 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref168 = mobl.ref(ui.contextMenuStyle);
  if(ref168.get() !== null) {
    menu.attr('class', ref168.get());
    subs__.addSub(ref168.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref168.rebind());
  
  var nodes181 = $("<span>");
  menu.append(nodes181);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl57();
  }));
  
  function renderControl57() {
    subs__.addSub((elements)(function(elements, callback) {
      var root301 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root301); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes181;
      nodes181 = node.contents();
      oldNodes.replaceWith(nodes181);
    }));
  }
  renderControl57();
  root300.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "mobl/ui/generic/contextmenu.png");
  img.attr('style', "float: right;");
  
  var val96 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp1171 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val96 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val96));
  }
  
  root300.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root300); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root302 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp1163 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp1163.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node144 = $("<span>");
  root302.append(node144);
  var condSubs22 = new mobl.CompSubscription();
  subs__.addSub(condSubs22);
  var oldValue22;
  var renderCond22 = function() {
    var value40 = tmp1163.get();
    if(oldValue22 === value40) return;
    oldValue22 = value40;
    var subs__ = condSubs22;
    subs__.unsubscribe();
    node144.empty();
    if(value40) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node145 = $("<div>");
        node145.attr('width', "100%");
        
        
        var node146 = $("<div>");
        node146.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes183 = $("<span>");
        node146.append(nodes183);
        subs__.addSub((ui.group)(function(_, callback) {
          var root304 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node148 = mobl.loadingSpan();
          root304.append(node148);
          var list21;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList21 = function() {
            var subs__ = listSubs__;
            list21 = items.get();
            list21.list(function(results25) {
              node148.empty();
              for(var i589 = 0; i589 < results25.length; i589++) {
                (function() {
                  var iternode21 = $("<span>");
                  node148.append(iternode21);
                  var it;
                  it = mobl.ref(mobl.ref(results25), i589);
                  
                  var tmp1127 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp1127.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp1127.set(it.get() == current.get());
                  }));
                  
                  
                  var node149 = $("<span>");
                  iternode21.append(node149);
                  var condSubs23 = new mobl.CompSubscription();
                  subs__.addSub(condSubs23);
                  var oldValue23;
                  var renderCond23 = function() {
                    var value41 = tmp1127.get();
                    if(oldValue23 === value41) return;
                    oldValue23 = value41;
                    var subs__ = condSubs23;
                    subs__.unsubscribe();
                    node149.empty();
                    if(value41) {
                      
                      var tmp1123 = mobl.ref(false);
                      
                      
                      var tmp1122 = mobl.ref(null);
                      
                      
                      var tmp1121 = mobl.ref(null);
                      
                      var nodes184 = $("<span>");
                      node149.append(nodes184);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), tmp1121, tmp1122, tmp1123, function(_, callback) {
                        var root305 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes185 = $("<span>");
                        root305.append(nodes185);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl59();
                        }));
                        
                        function renderControl59() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root306 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root306); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes185;
                            nodes185 = node.contents();
                            oldNodes.replaceWith(nodes185);
                          }));
                        }
                        renderControl59();
                        callback(root305); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes184;
                        nodes184 = node.contents();
                        oldNodes.replaceWith(nodes184);
                      }));
                      
                      
                    } else {
                      
                      var tmp1125 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp1124 = mobl.ref(true);
                      
                      
                      var tmp1126 = mobl.ref(null);
                      
                      var nodes186 = $("<span>");
                      node149.append(nodes186);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1125, tmp1126, tmp1124, function(_, callback) {
                        var root307 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes187 = $("<span>");
                        root307.append(nodes187);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl60();
                        }));
                        
                        function renderControl60() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root308 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root308); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes187;
                            nodes187 = node.contents();
                            oldNodes.replaceWith(nodes187);
                          }));
                        }
                        renderControl60();
                        callback(root307); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes186;
                        nodes186 = node.contents();
                        oldNodes.replaceWith(nodes186);
                      }));
                      
                      
                    }
                  };
                  renderCond23();
                  subs__.addSub(tmp1127.addEventListener('change', function() {
                    renderCond23();
                  }));
                  
                  
                  var oldNodes = iternode21;
                  iternode21 = iternode21.contents();
                  oldNodes.replaceWith(iternode21);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list21.addEventListener('change', function() { listSubs__.unsubscribe(); renderList21(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList21(true); }));
            });
          };
          renderList21();
          
          callback(root304); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes183;
          nodes183 = node.contents();
          oldNodes.replaceWith(nodes183);
        }));
        node145.append(node146);
        
        var node147 = $("<div>");
        node147.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        var nodes182 = $("<span>");
        node147.append(nodes182);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl58();
        }));
        
        function renderControl58() {
          subs__.addSub((detail.get())(current, function(elements, callback) {
            var root303 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root303); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes182;
            nodes182 = node.contents();
            oldNodes.replaceWith(nodes182);
          }));
        }
        renderControl58();
        node145.append(node147);
        node144.append(node145);
        
        
        
        
        
        
      });
    } else {
      var nodes188 = $("<span>");
      node144.append(nodes188);
      subs__.addSub((ui.group)(function(_, callback) {
        var root309 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node150 = mobl.loadingSpan();
        root309.append(node150);
        var list22;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList22 = function() {
          var subs__ = listSubs__;
          list22 = items.get();
          list22.list(function(results26) {
            node150.empty();
            for(var i590 = 0; i590 < results26.length; i590++) {
              (function() {
                var iternode22 = $("<span>");
                node150.append(iternode22);
                var it;
                it = mobl.ref(mobl.ref(results26), i590);
                
                var tmp1114 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp1172 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp1116 = mobl.ref(false);
                
                
                var tmp1115 = mobl.ref(null);
                
                var nodes189 = $("<span>");
                iternode22.append(nodes189);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1114, tmp1115, tmp1116, function(_, callback) {
                  var root310 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes190 = $("<span>");
                  root310.append(nodes190);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl61();
                  }));
                  
                  function renderControl61() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root311 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root311); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes190;
                      nodes190 = node.contents();
                      oldNodes.replaceWith(nodes190);
                    }));
                  }
                  renderControl61();
                  callback(root310); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes189;
                  nodes189 = node.contents();
                  oldNodes.replaceWith(nodes189);
                }));
                
                var oldNodes = iternode22;
                iternode22 = iternode22.contents();
                oldNodes.replaceWith(iternode22);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list22.addEventListener('change', function() { listSubs__.unsubscribe(); renderList22(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList22(true); }));
          });
        };
        renderList22();
        
        callback(root309); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes188;
        nodes188 = node.contents();
        oldNodes.replaceWith(nodes188);
      }));
      
      
    }
  };
  renderCond22();
  subs__.addSub(tmp1163.addEventListener('change', function() {
    renderCond22();
  }));
  
  callback(root302); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root312 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp1119 = mobl.ref("Detail");
  
  
  var tmp1120 = mobl.ref(null);
  
  var nodes191 = $("<span>");
  root312.append(nodes191);
  subs__.addSub((ui.header)(tmp1119, tmp1120, function(_, callback) {
    var root313 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp1118 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp1117 = mobl.ref("Back");
    
    var nodes192 = $("<span>");
    root313.append(nodes192);
    subs__.addSub((ui.backButton)(tmp1117, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1118, function(_, callback) {
      var root314 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root314); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes192;
      nodes192 = node.contents();
      oldNodes.replaceWith(nodes192);
    }));
    callback(root313); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes191;
    nodes191 = node.contents();
    oldNodes.replaceWith(nodes191);
  }));
  var nodes193 = $("<span>");
  root312.append(nodes193);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl62();
  }));
  
  function renderControl62() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root315 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root315); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes193;
      nodes193 = node.contents();
      oldNodes.replaceWith(nodes193);
    }));
  }
  renderControl62();
  callback(root312); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root316 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes194 = $("<span>");
  root316.append(nodes194);
  subs__.addSub((ui.group)(function(_, callback) {
    var root317 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node151 = mobl.loadingSpan();
    root317.append(node151);
    var list23;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList23 = function() {
      var subs__ = listSubs__;
      list23 = coll.get();
      list23.list(function(results27) {
        node151.empty();
        for(var i591 = 0; i591 < results27.length; i591++) {
          (function() {
            var iternode23 = $("<span>");
            node151.append(iternode23);
            var it;
            it = mobl.ref(mobl.ref(results27), i591);
            
            var tmp1134 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp1134.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp1134.set(it.get() == selected.get());
            }));
            
            
            var node152 = $("<span>");
            iternode23.append(node152);
            var condSubs24 = new mobl.CompSubscription();
            subs__.addSub(condSubs24);
            var oldValue24;
            var renderCond24 = function() {
              var value42 = tmp1134.get();
              if(oldValue24 === value42) return;
              oldValue24 = value42;
              var subs__ = condSubs24;
              subs__.unsubscribe();
              node152.empty();
              if(value42) {
                
                var tmp1130 = mobl.ref(false);
                
                
                var tmp1129 = mobl.ref(null);
                
                
                var tmp1128 = mobl.ref(null);
                
                var nodes195 = $("<span>");
                node152.append(nodes195);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1128, tmp1129, tmp1130, function(_, callback) {
                  var root318 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes196 = $("<span>");
                  root318.append(nodes196);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl63();
                  }));
                  
                  function renderControl63() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root319 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root319); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes196;
                      nodes196 = node.contents();
                      oldNodes.replaceWith(nodes196);
                    }));
                  }
                  renderControl63();
                  callback(root318); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes195;
                  nodes195 = node.contents();
                  oldNodes.replaceWith(nodes195);
                }));
                
                
              } else {
                
                var tmp1132 = mobl.ref(true);
                
                
                var tmp1131 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp1133 = mobl.ref(null);
                
                var nodes197 = $("<span>");
                node152.append(nodes197);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1131, tmp1133, tmp1132, function(_, callback) {
                  var root320 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes198 = $("<span>");
                  root320.append(nodes198);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl64();
                  }));
                  
                  function renderControl64() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root321 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root321); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes198;
                      nodes198 = node.contents();
                      oldNodes.replaceWith(nodes198);
                    }));
                  }
                  renderControl64();
                  callback(root320); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes197;
                  nodes197 = node.contents();
                  oldNodes.replaceWith(nodes197);
                }));
                
                
              }
            };
            renderCond24();
            subs__.addSub(tmp1134.addEventListener('change', function() {
              renderCond24();
            }));
            
            
            var oldNodes = iternode23;
            iternode23 = iternode23.contents();
            oldNodes.replaceWith(iternode23);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list23.addEventListener('change', function() { listSubs__.unsubscribe(); renderList23(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList23(true); }));
      });
    };
    renderList23();
    
    callback(root317); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes194;
    nodes194 = node.contents();
    oldNodes.replaceWith(nodes194);
  }));
  callback(root316); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
  var root322 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes199 = $("<span>");
    root322.append(nodes199);
    subs__.addSub((ui.group)(function(_, callback) {
      var root323 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp1138 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp1138.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp1138.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp1138.set(coll.get().limit(n.get()));
      }));
      
      
      var node153 = mobl.loadingSpan();
      root323.append(node153);
      var list24;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList24 = function() {
        var subs__ = listSubs__;
        list24 = tmp1138.get();
        list24.list(function(results28) {
          node153.empty();
          for(var i592 = 0; i592 < results28.length; i592++) {
            (function() {
              var iternode24 = $("<span>");
              node153.append(iternode24);
              var it;
              it = mobl.ref(mobl.ref(results28), i592);
              
              var tmp1135 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp1137 = mobl.ref(false);
              
              
              var tmp1136 = mobl.ref(null);
              
              var nodes200 = $("<span>");
              iternode24.append(nodes200);
              subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1135, tmp1136, tmp1137, function(_, callback) {
                var root324 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes201 = $("<span>");
                root324.append(nodes201);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl65();
                }));
                
                function renderControl65() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root325 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root325); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes201;
                    nodes201 = node.contents();
                    oldNodes.replaceWith(nodes201);
                  }));
                }
                renderControl65();
                callback(root324); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes200;
                nodes200 = node.contents();
                oldNodes.replaceWith(nodes200);
              }));
              
              var oldNodes = iternode24;
              iternode24 = iternode24.contents();
              oldNodes.replaceWith(iternode24);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list24.addEventListener('change', function() { listSubs__.unsubscribe(); renderList24(true); }));
          subs__.addSub(tmp1138.addEventListener('change', function() { listSubs__.unsubscribe(); renderList24(true); }));
        });
      };
      renderList24();
      
      
      var tmp1139 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp1139.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp1139.set(n.get() < total.get());
      }));
      
      
      var node154 = $("<span>");
      root323.append(node154);
      var condSubs25 = new mobl.CompSubscription();
      subs__.addSub(condSubs25);
      var oldValue25;
      var renderCond25 = function() {
        var value43 = tmp1139.get();
        if(oldValue25 === value43) return;
        oldValue25 = value43;
        var subs__ = condSubs25;
        subs__.unsubscribe();
        node154.empty();
        if(value43) {
          
          var node155 = $("<li>");
          
          var ref169 = mobl.ref(ui.loadMoreStyle);
          if(ref169.get() !== null) {
            node155.attr('class', ref169.get());
            subs__.addSub(ref169.addEventListener('change', function(_, ref, val) {
              node155.attr('class', val);
            }));
            
          }
          subs__.addSub(ref169.rebind());
          
          var val97 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val97 !== null) {
            subs__.addSub(mobl.domBind(node155, 'tap', val97));
          }
          
          
          node155.append("More");
          node154.append(node155);
          
          
        } else {
          
        }
      };
      renderCond25();
      subs__.addSub(tmp1139.addEventListener('change', function() {
        renderCond25();
      }));
      
      callback(root323); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes199;
      nodes199 = node.contents();
      oldNodes.replaceWith(nodes199);
    }));
    callback(root322); return subs__;
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root326 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes202 = $("<span>");
  root326.append(nodes202);
  subs__.addSub((ui.group)(function(_, callback) {
    var root327 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node156 = mobl.loadingSpan();
    root327.append(node156);
    var list25;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList25 = function() {
      var subs__ = listSubs__;
      list25 = items.get();
      list25.list(function(results29) {
        node156.empty();
        for(var i593 = 0; i593 < results29.length; i593++) {
          (function() {
            var iternode25 = $("<span>");
            node156.append(iternode25);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results29), i593), "_1");it = mobl.ref(mobl.ref(mobl.ref(results29), i593), "_2");
            
            var tmp1143 = mobl.ref(false);
            
            
            var tmp1142 = mobl.ref(null);
            
            
            var tmp1141 = mobl.ref(null);
            
            var nodes203 = $("<span>");
            iternode25.append(nodes203);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1141, tmp1142, tmp1143, function(_, callback) {
              var root328 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp1140 = mobl.ref(null);
              
              var nodes204 = $("<span>");
              root328.append(nodes204);
              subs__.addSub((ui.checkBox)(checked, it, tmp1140, function(_, callback) {
                var root329 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root329); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes204;
                nodes204 = node.contents();
                oldNodes.replaceWith(nodes204);
              }));
              callback(root328); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes203;
              nodes203 = node.contents();
              oldNodes.replaceWith(nodes203);
            }));
            
            var oldNodes = iternode25;
            iternode25 = iternode25.contents();
            oldNodes.replaceWith(iternode25);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list25.addEventListener('change', function() { listSubs__.unsubscribe(); renderList25(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList25(true); }));
      });
    };
    renderList25();
    
    callback(root327); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes202;
    nodes202 = node.contents();
    oldNodes.replaceWith(nodes202);
  }));
  callback(root326); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, callback, screenCallback) {
  var root330 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll614) {
    coll614 = coll614.reverse();
    function processOne42() {
      var it;
      it = coll614.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll614.length > 0) processOne42(); else rest42();
      
    }
    function rest42() {
      
      var tmp1148 = mobl.ref(null);
      
      var nodes205 = $("<span>");
      root330.append(nodes205);
      subs__.addSub((ui.header)(title, tmp1148, function(_, callback) {
        var root331 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp1144 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp1145 = mobl.ref("Back");
        
        var nodes206 = $("<span>");
        root331.append(nodes206);
        subs__.addSub((ui.backButton)(tmp1145, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1144, function(_, callback) {
          var root332 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root332); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes206;
          nodes206 = node.contents();
          oldNodes.replaceWith(nodes206);
        }));
        
        var tmp1147 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll613) {
                               coll613 = coll613.reverse();
                               function processOne41() {
                                 var checked;var it;
                                 var tmp1174 = coll613.pop();
                                 checked = tmp1174._1;it = tmp1174._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll613.length > 0) processOne41(); else rest41();
                                   
                                 } else {
                                   {
                                     
                                     if(coll613.length > 0) processOne41(); else rest41();
                                     
                                   }
                                 }
                               }
                               function rest41() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll613.length > 0) processOne41(); else rest41();
                             });
                             
                           });
        
        
        var tmp1146 = mobl.ref("Done");
        
        var nodes207 = $("<span>");
        root331.append(nodes207);
        subs__.addSub((ui.button)(tmp1146, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1147, function(_, callback) {
          var root333 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root333); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes207;
          nodes207 = node.contents();
          oldNodes.replaceWith(nodes207);
        }));
        callback(root331); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes205;
        nodes205 = node.contents();
        oldNodes.replaceWith(nodes205);
      }));
      var nodes208 = $("<span>");
      root330.append(nodes208);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root334 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root334); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes208;
        nodes208 = node.contents();
        oldNodes.replaceWith(nodes208);
      }));
      callback(root330); return subs__;
      
      
    }
    if(coll614.length > 0) processOne42(); else rest42();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
  var root335 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp1149 = mobl.ref("Search term");
  
  
  var tmp1151 = mobl.ref(null);
  
  
  var tmp1150 = mobl.ref(null);
  
  var nodes209 = $("<span>");
  root335.append(nodes209);
  subs__.addSub((ui.searchBox)(phrase, tmp1149, tmp1150, tmp1151, function(_, callback) {
    var root336 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root336); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes209;
    nodes209 = node.contents();
    oldNodes.replaceWith(nodes209);
  }));
  
  var tmp1152 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp1152.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp1152.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp1152.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp1152.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp1152.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes210 = $("<span>");
  root335.append(nodes210);
  subs__.addSub((ui.masterDetail)(tmp1152, masterItem, detailItem, function(_, callback) {
    var root337 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root337); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes210;
    nodes210 = node.contents();
    oldNodes.replaceWith(nodes210);
  }));
  callback(root335); return subs__;
  
  
  return subs__;
};
ui.progressStyle = 'ui__progressStyle';
ui.startLoading = function() {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + ui.progressStyle + "'>Loading...</div>");
  
  mobl.$("body").prepend(loading);
};

ui.endLoading = function() {
   var __this = this;
  mobl.$("#progress").remove();
};

(function(__ns) {
__ns.floatBox = function(top, right, bottom, left, elements, callback) {
                  var root928 = $("<span>");
                  var node280 = $("<div style=\"position: absolute;\">");
                  var nodes681 = $("<span>");
                  node280.append(nodes681);
                  mobl.ref(elements).addEventListener('change', function() {
                                                                  renderControl102();
                                                                });
                  function renderControl102 ( ) {
                    (elements)(function(elements, callback) {
                                 var root929 = $("<span>");
                                 callback(root929);
                                 return;
                               }, function(node) {
                                    var oldNodes = nodes681;
                                    nodes681 = node.contents();
                                    oldNodes.replaceWith(nodes681);
                                  });
                  }
                  renderControl102();
                  root928.append(node280);
                  var box = node280;
                  if(top.get() !== null)
                  box.css("top", "" + top.get() + "px");
                  if(right.get() !== null)
                  box.css("right", "" + right.get() + "px");
                  if(bottom.get() !== null)
                  box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                  if(left.get() !== null)
                  box.css("left", "" + left.get() + "px");
                  function updateLocation ( ) {
                    if(top.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + top.get() ) + "px");
                    }
                    if(bottom.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                    }
                  }
                  $(window).bind('scroll', updateLocation);
                  $(window).bind('resize', updateLocation);
                  callback(root928);
                  return;
                };
}(ui));ui.accordionStyle = 'ui__accordionStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.inActiveSectionStyle = 'ui__inActiveSectionStyle';
ui.activeSectionStyle = 'ui__activeSectionStyle';

ui.accordion = function(sections, elements, callback) {
  var root338 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp1162 = mobl.ref(null);
  
  
  var tmp1161 = mobl.ref(null);
  
  var nodes211 = $("<span>");
  root338.append(nodes211);
  subs__.addSub((ui.block)(mobl.ref(ui.accordionStyle), tmp1161, tmp1162, function(_, callback) {
    var root339 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node157 = mobl.loadingSpan();
    root339.append(node157);
    var list26;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList26 = function() {
      var subs__ = listSubs__;
      list26 = sections.get();
      list26.list(function(results30) {
        node157.empty();
        for(var i594 = 0; i594 < results30.length; i594++) {
          (function() {
            var iternode26 = $("<span>");
            node157.append(iternode26);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results30), i594), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results30), i594), "_2");
            
            var tmp1156 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1156.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1156.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp1156.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp1156.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp1155 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp1157 = mobl.ref(null);
            
            var nodes212 = $("<span>");
            iternode26.append(nodes212);
            subs__.addSub((ui.span)(tmp1156, tmp1157, tmp1155, function(_, callback) {
              var root340 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp1154 = mobl.ref(null);
              
              
              var tmp1153 = mobl.ref(null);
              
              var nodes213 = $("<span>");
              root340.append(nodes213);
              subs__.addSub((mobl.label)(sectionName, tmp1153, tmp1154, function(_, callback) {
                var root341 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root341); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes213;
                nodes213 = node.contents();
                oldNodes.replaceWith(nodes213);
              }));
              callback(root340); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes212;
              nodes212 = node.contents();
              oldNodes.replaceWith(nodes212);
            }));
            
            var tmp1158 = mobl.ref(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1158.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1158.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp1158.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp1158.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            
            var tmp1160 = mobl.ref(null);
            
            
            var tmp1159 = mobl.ref(null);
            
            var nodes214 = $("<span>");
            iternode26.append(nodes214);
            subs__.addSub((ui.block)(tmp1158, tmp1159, tmp1160, function(_, callback) {
              var root342 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes215 = $("<span>");
              root342.append(nodes215);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl66();
              }));
              
              function renderControl66() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root343 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root343); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes215;
                  nodes215 = node.contents();
                  oldNodes.replaceWith(nodes215);
                }));
              }
              renderControl66();
              callback(root342); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes214;
              nodes214 = node.contents();
              oldNodes.replaceWith(nodes214);
            }));
            
            var oldNodes = iternode26;
            iternode26 = iternode26.contents();
            oldNodes.replaceWith(iternode26);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list26.addEventListener('change', function() { listSubs__.unsubscribe(); renderList26(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList26(true); }));
      });
    };
    renderList26();
    
    callback(root339); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes211;
    nodes211 = node.contents();
    oldNodes.replaceWith(nodes211);
  }));
  callback(root338); return subs__;
  
  return subs__;
};
ui.tableStyle = 'ui__tableStyle';
ui.tdStyle = 'ui__tdStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';

ui.table = function(elements, callback) {
  var root344 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node158 = $("<table>");
  
  var ref170 = mobl.ref(ui.tableStyle);
  if(ref170.get() !== null) {
    node158.attr('class', ref170.get());
    subs__.addSub(ref170.addEventListener('change', function(_, ref, val) {
      node158.attr('class', val);
    }));
    
  }
  subs__.addSub(ref170.rebind());
  
  var nodes216 = $("<span>");
  node158.append(nodes216);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl67();
  }));
  
  function renderControl67() {
    subs__.addSub((elements)(function(elements, callback) {
      var root345 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root345); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes216;
      nodes216 = node.contents();
      oldNodes.replaceWith(nodes216);
    }));
  }
  renderControl67();
  root344.append(node158);
  callback(root344); return subs__;
  
  
  return subs__;
};

ui.row = function(elements, callback) {
  var root346 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node159 = $("<tr>");
  
  var ref171 = mobl.ref(ui.trStyle);
  if(ref171.get() !== null) {
    node159.attr('class', ref171.get());
    subs__.addSub(ref171.addEventListener('change', function(_, ref, val) {
      node159.attr('class', val);
    }));
    
  }
  subs__.addSub(ref171.rebind());
  
  var nodes217 = $("<span>");
  node159.append(nodes217);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl68();
  }));
  
  function renderControl68() {
    subs__.addSub((elements)(function(elements, callback) {
      var root347 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root347); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes217;
      nodes217 = node.contents();
      oldNodes.replaceWith(nodes217);
    }));
  }
  renderControl68();
  root346.append(node159);
  callback(root346); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, elements, callback) {
  var root348 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node160 = $("<td>");
  
  var ref172 = width;
  if(ref172.get() !== null) {
    node160.attr('width', ref172.get());
    subs__.addSub(ref172.addEventListener('change', function(_, ref, val) {
      node160.attr('width', val);
    }));
    
  }
  subs__.addSub(ref172.rebind());
  
  var ref173 = mobl.ref(ui.tdStyle);
  if(ref173.get() !== null) {
    node160.attr('class', ref173.get());
    subs__.addSub(ref173.addEventListener('change', function(_, ref, val) {
      node160.attr('class', val);
    }));
    
  }
  subs__.addSub(ref173.rebind());
  
  var nodes218 = $("<span>");
  node160.append(nodes218);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl69();
  }));
  
  function renderControl69() {
    subs__.addSub((elements)(function(elements, callback) {
      var root349 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root349); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes218;
      nodes218 = node.contents();
      oldNodes.replaceWith(nodes218);
    }));
  }
  renderControl69();
  root348.append(node160);
  callback(root348); return subs__;
  
  
  return subs__;
};

ui.col = function(width, elements, callback) {
  var root350 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node161 = $("<td>");
  
  var ref174 = width;
  if(ref174.get() !== null) {
    node161.attr('width', ref174.get());
    subs__.addSub(ref174.addEventListener('change', function(_, ref, val) {
      node161.attr('width', val);
    }));
    
  }
  subs__.addSub(ref174.rebind());
  
  var ref175 = mobl.ref(ui.tdStyle);
  if(ref175.get() !== null) {
    node161.attr('class', ref175.get());
    subs__.addSub(ref175.addEventListener('change', function(_, ref, val) {
      node161.attr('class', val);
    }));
    
  }
  subs__.addSub(ref175.rebind());
  
  var nodes219 = $("<span>");
  node161.append(nodes219);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl70();
  }));
  
  function renderControl70() {
    subs__.addSub((elements)(function(elements, callback) {
      var root351 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root351); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes219;
      nodes219 = node.contents();
      oldNodes.replaceWith(nodes219);
    }));
  }
  renderControl70();
  root350.append(node161);
  callback(root350); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, elements, callback) {
  var root352 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node162 = $("<td>");
  
  var ref176 = width;
  if(ref176.get() !== null) {
    node162.attr('width', ref176.get());
    subs__.addSub(ref176.addEventListener('change', function(_, ref, val) {
      node162.attr('width', val);
    }));
    
  }
  subs__.addSub(ref176.rebind());
  
  var ref177 = mobl.ref(ui.tdStyle);
  if(ref177.get() !== null) {
    node162.attr('class', ref177.get());
    subs__.addSub(ref177.addEventListener('change', function(_, ref, val) {
      node162.attr('class', val);
    }));
    
  }
  subs__.addSub(ref177.rebind());
  
  
  var node163 = $("<strong>");
  
  var nodes220 = $("<span>");
  node163.append(nodes220);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl71();
  }));
  
  function renderControl71() {
    subs__.addSub((elements)(function(elements, callback) {
      var root353 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root353); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes220;
      nodes220 = node.contents();
      oldNodes.replaceWith(nodes220);
    }));
  }
  renderControl71();
  node162.append(node163);
  root352.append(node162);
  callback(root352); return subs__;
  
  
  
  return subs__;
};

ui.scroller = function(height, elements, callback) {
  var root354 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node164 = $("<div>");
  node164.attr('class', "scroller");
  
  var nodes221 = $("<span>");
  node164.append(nodes221);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl72();
  }));
  
  function renderControl72() {
    subs__.addSub((elements)(function(elements, callback) {
      var root355 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root355); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes221;
      nodes221 = node.contents();
      oldNodes.replaceWith(nodes221);
    }));
  }
  renderControl72();
  root354.append(node164);
  var result__ = ui.setupScrollers();
  callback(root354); return subs__;
  
  
  return subs__;
};
(function(__ns) {
setTimeout(function() {
             scrollTo(0, -1);
           }, 250);
__ns.scrollUp = function() {
                  scrollTo(0, 0);
                };
__ns.setupScrollers = function() {
                        setTimeout(function() {
                                     var allScrollers = $("div.scroller");
                                     for(var i = 0; i < allScrollers.length; i++)
                                     {
                                       var scroller = allScrollers.eq(i);
                                       if(!scroller.data("scroller"))
                                       {
                                         scroller.data("scroller", new TouchScroll(scroller[0],{
                                                                                                 elastic: true
                                                                                               }));
                                       }
                                     }
                                   }, 250);
                      };
setInterval(function() {
              var allScrollers = $("div.scroller");
              for(var i = 0; i < allScrollers.length; i++)
              {
                var scroller = allScrollers.eq(i).data("scroller");
                if(scroller)
                {
                  scroller.setupScroller();
                }
              }
            }, 1000);
}(ui));