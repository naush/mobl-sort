mobl.provides('mobl.ui.generic');
mobl.provides('mobl.ui');
mobl.ui.generic.loadingStyle = 'mobl__ui__generic__loadingStyle';

mobl.ui.generic.whenLoaded = function(value, elements, callback) {
  var root356 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node165 = $("<span>");
  root356.append(node165);
  var condSubs26 = new mobl.CompSubscription();
  subs__.addSub(condSubs26);
  var oldValue26;
  var renderCond26 = function() {
    var value50 = value.get();
    if(oldValue26 === value50) return;
    oldValue26 = value50;
    var subs__ = condSubs26;
    subs__.unsubscribe();
    node165.empty();
    if(value50) {
      var nodes222 = $("<span>");
      node165.append(nodes222);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl73();
      }));
      
      function renderControl73() {
        subs__.addSub((elements)(function(elements, callback) {
          var root357 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root357); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes222;
          nodes222 = node.contents();
          oldNodes.replaceWith(nodes222);
        }));
      }
      renderControl73();
      
      
    } else {
      
      var tmp1184 = mobl.ref(null);
      
      
      var tmp1183 = mobl.ref(null);
      
      var nodes223 = $("<span>");
      node165.append(nodes223);
      subs__.addSub((mobl.ui.generic.block)(mobl.ref(mobl.ui.generic.loadingStyle), tmp1183, tmp1184, function(_, callback) {
        var root358 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        root358.append("Loading...");
        
        var tmp1177 = mobl.ref("middle");
        
        
        var tmp1176 = mobl.ref("mobl/ui/generic/loading-large.gif");
        
        
        var tmp1182 = mobl.ref(null);
        
        
        var tmp1181 = mobl.ref(null);
        
        
        var tmp1180 = mobl.ref(null);
        
        
        var tmp1179 = mobl.ref(null);
        
        
        var tmp1178 = mobl.ref(null);
        
        var nodes224 = $("<span>");
        root358.append(nodes224);
        subs__.addSub((mobl.ui.generic.image)(tmp1176, tmp1178, tmp1179, tmp1180, tmp1181, tmp1177, tmp1182, function(_, callback) {
          var root359 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root359); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes224;
          nodes224 = node.contents();
          oldNodes.replaceWith(nodes224);
        }));
        callback(root358); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes223;
        nodes223 = node.contents();
        oldNodes.replaceWith(nodes223);
      }));
      
      
    }
  };
  renderCond26();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond26();
  }));
  
  callback(root356); return subs__;
  
  return subs__;
};
mobl.ui.generic.headerStyle = 'mobl__ui__generic__headerStyle';
mobl.ui.generic.headerContainerStyle = 'mobl__ui__generic__headerContainerStyle';
mobl.ui.generic.headerTextStyle = 'mobl__ui__generic__headerTextStyle';

mobl.ui.generic.header = function(text, onclick, elements, callback) {
  var root360 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node166 = $("<div>");
  
  var ref181 = mobl.ref(mobl.ui.generic.headerStyle);
  if(ref181.get() !== null) {
    node166.attr('class', ref181.get());
    subs__.addSub(ref181.addEventListener('change', function(_, ref, val) {
      node166.attr('class', val);
    }));
    
  }
  subs__.addSub(ref181.rebind());
  
  var val98 = onclick.get();
  if(val98 !== null) {
    subs__.addSub(mobl.domBind(node166, 'tap', val98));
  }
  
  
  var node167 = $("<div>");
  
  var ref180 = mobl.ref(mobl.ui.generic.headerContainerStyle);
  if(ref180.get() !== null) {
    node167.attr('class', ref180.get());
    subs__.addSub(ref180.addEventListener('change', function(_, ref, val) {
      node167.attr('class', val);
    }));
    
  }
  subs__.addSub(ref180.rebind());
  
  
  var node168 = $("<div>");
  
  var ref178 = text;
  node168.text(""+ref178.get());
  var ignore41 = false;
  subs__.addSub(ref178.addEventListener('change', function(_, ref, val) {
    if(ignore41) return;
    node168.text(""+val);
  }));
  subs__.addSub(ref178.rebind());
  
  
  var ref179 = mobl.ref(mobl.ui.generic.headerTextStyle);
  if(ref179.get() !== null) {
    node168.attr('class', ref179.get());
    subs__.addSub(ref179.addEventListener('change', function(_, ref, val) {
      node168.attr('class', val);
    }));
    
  }
  subs__.addSub(ref179.rebind());
  
  node167.append(node168);
  node166.append(node167);
  var nodes225 = $("<span>");
  node166.append(nodes225);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl74();
  }));
  
  function renderControl74() {
    subs__.addSub((elements)(function(elements, callback) {
      var root361 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root361); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes225;
      nodes225 = node.contents();
      oldNodes.replaceWith(nodes225);
    }));
  }
  renderControl74();
  root360.append(node166);
  callback(root360); return subs__;
  
  
  
  
  return subs__;
};
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root362 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref182 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref182.get() !== null) {
    sp.attr('class', ref182.get());
    subs__.addSub(ref182.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref182.rebind());
  
  var val99 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val99 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val99));
  }
  
  var val100 = function(event, callback) {
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
  if(val100 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val100));
  }
  
  var val101 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after246(result__) {
                    var tmp1245 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after246);if(result__ !== undefined) after246(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val101 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val101));
  }
  
  var val102 = function(event, callback) {
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
  if(val102 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val102));
  }
  
  var ref183 = text;
  sp.text(""+ref183.get());
  var ignore42 = false;
  subs__.addSub(ref183.addEventListener('change', function(_, ref, val) {
    if(ignore42) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref183.rebind());
  
  
  root362.append(sp);
  callback(root362); return subs__;
  
  return subs__;
};
mobl.ui.generic.sideButtonStyle = 'mobl__ui__generic__sideButtonStyle';
mobl.ui.generic.sideButtonPushedStyle = 'mobl__ui__generic__sideButtonPushedStyle';

mobl.ui.generic.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root363 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes226 = $("<span>");
  root363.append(nodes226);
  subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root364 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root364); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes226;
    nodes226 = node.contents();
    oldNodes.replaceWith(nodes226);
  }));
  callback(root363); return subs__;
  
  return subs__;
};
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';

mobl.ui.generic.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root365 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes227 = $("<span>");
  root365.append(nodes227);
  subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root366 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root366); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes227;
    nodes227 = node.contents();
    oldNodes.replaceWith(nodes227);
  }));
  callback(root365); return subs__;
  
  return subs__;
};

mobl.ui.generic.block = function(cssClass, id, onclick, elements, callback) {
  var root367 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node169 = $("<div>");
  
  var ref184 = id;
  if(ref184.get() !== null) {
    node169.attr('id', ref184.get());
    subs__.addSub(ref184.addEventListener('change', function(_, ref, val) {
      node169.attr('id', val);
    }));
    
  }
  subs__.addSub(ref184.rebind());
  
  var ref185 = cssClass;
  if(ref185.get() !== null) {
    node169.attr('class', ref185.get());
    subs__.addSub(ref185.addEventListener('change', function(_, ref, val) {
      node169.attr('class', val);
    }));
    
  }
  subs__.addSub(ref185.rebind());
  
  var val103 = onclick.get();
  if(val103 !== null) {
    subs__.addSub(mobl.domBind(node169, 'tap', val103));
  }
  
  var nodes228 = $("<span>");
  node169.append(nodes228);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl75();
  }));
  
  function renderControl75() {
    subs__.addSub((elements)(function(elements, callback) {
      var root368 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root368); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes228;
      nodes228 = node.contents();
      oldNodes.replaceWith(nodes228);
    }));
  }
  renderControl75();
  root367.append(node169);
  callback(root367); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.span = function(cssClass, id, onclick, elements, callback) {
  var root369 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node170 = $("<span>");
  
  var ref186 = id;
  if(ref186.get() !== null) {
    node170.attr('id', ref186.get());
    subs__.addSub(ref186.addEventListener('change', function(_, ref, val) {
      node170.attr('id', val);
    }));
    
  }
  subs__.addSub(ref186.rebind());
  
  var ref187 = cssClass;
  if(ref187.get() !== null) {
    node170.attr('class', ref187.get());
    subs__.addSub(ref187.addEventListener('change', function(_, ref, val) {
      node170.attr('class', val);
    }));
    
  }
  subs__.addSub(ref187.rebind());
  
  var val104 = onclick.get();
  if(val104 !== null) {
    subs__.addSub(mobl.domBind(node170, 'tap', val104));
  }
  
  var nodes229 = $("<span>");
  node170.append(nodes229);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl76();
  }));
  
  function renderControl76() {
    subs__.addSub((elements)(function(elements, callback) {
      var root370 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root370); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes229;
      nodes229 = node.contents();
      oldNodes.replaceWith(nodes229);
    }));
  }
  renderControl76();
  root369.append(node170);
  callback(root369); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.groupStyle = 'mobl__ui__generic__groupStyle';

mobl.ui.generic.group = function(elements, callback) {
  var root371 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node171 = $("<ul>");
  
  var ref188 = mobl.ref(mobl.ui.generic.groupStyle);
  if(ref188.get() !== null) {
    node171.attr('class', ref188.get());
    subs__.addSub(ref188.addEventListener('change', function(_, ref, val) {
      node171.attr('class', val);
    }));
    
  }
  subs__.addSub(ref188.rebind());
  
  var nodes230 = $("<span>");
  node171.append(nodes230);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl77();
  }));
  
  function renderControl77() {
    subs__.addSub((elements)(function(elements, callback) {
      var root372 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root372); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes230;
      nodes230 = node.contents();
      oldNodes.replaceWith(nodes230);
    }));
  }
  renderControl77();
  root371.append(node171);
  callback(root371); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root373 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node172 = $("<img>");
  
  var ref189 = url;
  if(ref189.get() !== null) {
    node172.attr('src', ref189.get());
    subs__.addSub(ref189.addEventListener('change', function(_, ref, val) {
      node172.attr('src', val);
    }));
    
  }
  subs__.addSub(ref189.rebind());
  
  var ref190 = width;
  if(ref190.get() !== null) {
    node172.attr('width', ref190.get());
    subs__.addSub(ref190.addEventListener('change', function(_, ref, val) {
      node172.attr('width', val);
    }));
    
  }
  subs__.addSub(ref190.rebind());
  
  var ref191 = height;
  if(ref191.get() !== null) {
    node172.attr('height', ref191.get());
    subs__.addSub(ref191.addEventListener('change', function(_, ref, val) {
      node172.attr('height', val);
    }));
    
  }
  subs__.addSub(ref191.rebind());
  
  var ref192 = style;
  if(ref192.get() !== null) {
    node172.attr('class', ref192.get());
    subs__.addSub(ref192.addEventListener('change', function(_, ref, val) {
      node172.attr('class', val);
    }));
    
  }
  subs__.addSub(ref192.rebind());
  
  var val105 = onclick.get();
  if(val105 !== null) {
    subs__.addSub(mobl.domBind(node172, 'tap', val105));
  }
  
  var ref193 = valign;
  if(ref193.get() !== null) {
    node172.attr('valign', ref193.get());
    subs__.addSub(ref193.addEventListener('change', function(_, ref, val) {
      node172.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref193.rebind());
  
  var ref194 = align;
  if(ref194.get() !== null) {
    node172.attr('align', ref194.get());
    subs__.addSub(ref194.addEventListener('change', function(_, ref, val) {
      node172.attr('align', val);
    }));
    
  }
  subs__.addSub(ref194.rebind());
  
  root373.append(node172);
  callback(root373); return subs__;
  
  return subs__;
};
mobl.ui.generic.itemStyle = 'mobl__ui__generic__itemStyle';
mobl.ui.generic.itemPushedStyle = 'mobl__ui__generic__itemPushedStyle';
mobl.ui.generic.itemArrowStyle = 'mobl__ui__generic__itemArrowStyle';

mobl.ui.generic.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root374 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref195 = mobl.ref(mobl.ui.generic.itemStyle);
  if(ref195.get() !== null) {
    el.attr('class', ref195.get());
    subs__.addSub(ref195.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref195.rebind());
  
  var ref196 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref196.get() !== null) {
    el.attr('class', ref196.get());
    subs__.addSub(ref196.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(mobl.ref(mobl.ui.generic.itemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(style.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    
  }
  subs__.addSub(ref196.rebind());
  
  var val106 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp1246 = result__;
                                           function after247(result__) {
                                             var tmp1247 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after247);if(result__ !== undefined) after247(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp1248 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val106 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val106));
  }
  
  var nodes231 = $("<span>");
  el.append(nodes231);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl78();
  }));
  
  function renderControl78() {
    subs__.addSub((elements)(function(elements, callback) {
      var root375 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root375); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes231;
      nodes231 = node.contents();
      oldNodes.replaceWith(nodes231);
    }));
  }
  renderControl78();
  root374.append(el);
  callback(root374); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.checkBox = function(b, label, onchange, elements, callback) {
  var root376 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node173 = $("<input>");
  node173.attr('type', "checkbox");
  
  var ref198 = b;
  node173.attr('checked', !!ref198.get());
  subs__.addSub(ref198.addEventListener('change', function(_, ref, val) {
    if(ref === ref198) node173.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node173, 'change', function() {
    b.set(!!node173.attr('checked'));
  }));
  
  var val108 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val108 !== null) {
    subs__.addSub(mobl.domBind(node173, 'tap', val108));
  }
  
  var val109 = onchange.get();
  if(val109 !== null) {
    subs__.addSub(mobl.domBind(node173, 'change', val109));
  }
  
  root376.append(node173);
  
  root376.append(" ");
  
  var node174 = $("<span>");
  
  var ref197 = label;
  node174.text(""+ref197.get());
  var ignore43 = false;
  subs__.addSub(ref197.addEventListener('change', function(_, ref, val) {
    if(ignore43) return;
    node174.text(""+val);
  }));
  subs__.addSub(ref197.rebind());
  
  
  var val107 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after248(result__) {
                    var tmp1249 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after248);if(result__ !== undefined) after248(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val107 !== null) {
    subs__.addSub(mobl.domBind(node174, 'tap', val107));
  }
  
  root376.append(node174);
  callback(root376); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.textFieldStyle = 'mobl__ui__generic__textFieldStyle';

mobl.ui.generic.textField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
  var root377 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node175 = $("<span>");
  root377.append(node175);
  var condSubs27 = new mobl.CompSubscription();
  subs__.addSub(condSubs27);
  var oldValue27;
  var renderCond27 = function() {
    var value51 = label.get();
    if(oldValue27 === value51) return;
    oldValue27 = value51;
    var subs__ = condSubs27;
    subs__.unsubscribe();
    node175.empty();
    if(value51) {
      
      var node176 = $("<span>");
      node176.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref202 = label;
      node176.text(""+ref202.get());
      var ignore45 = false;
      subs__.addSub(ref202.addEventListener('change', function(_, ref, val) {
        if(ignore45) return;
        node176.text(""+val);
      }));
      subs__.addSub(ref202.rebind());
      
      
      node175.append(node176);
      
      var node177 = $("<span>");
      node177.attr('style', "float: left");
      
      
      var node178 = $("<input>");
      node178.attr('type', "text");
      
      var ref199 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref199.get() !== null) {
        node178.attr('class', ref199.get());
        subs__.addSub(ref199.addEventListener('change', function(_, ref, val) {
          node178.attr('class', val);
        }));
        
      }
      subs__.addSub(ref199.rebind());
      
      var ref200 = placeholder;
      if(ref200.get() !== null) {
        node178.attr('placeholder', ref200.get());
        subs__.addSub(ref200.addEventListener('change', function(_, ref, val) {
          node178.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref200.rebind());
      
      var ref201 = s;
      node178.val(""+ref201.get());
      var ignore44 = false;
      subs__.addSub(ref201.addEventListener('change', function(_, ref, val) {
        if(ignore44) return;
        node178.val(""+val);
      }));
      subs__.addSub(ref201.rebind());
      
      subs__.addSub(mobl.domBind(node178, 'keyup change', function() {
        ignore44 = true;
        s.set(mobl.stringTomobl__String(node178.val()));
        ignore44 = false;
      }));
      
      
      var val110 = onchange.get();
      if(val110 !== null) {
        subs__.addSub(mobl.domBind(node178, 'change', val110));
      }
      
      var val111 = onkeyup.get();
      if(val111 !== null) {
        subs__.addSub(mobl.domBind(node178, 'keyup', val111));
      }
      
      var val112 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val112 !== null) {
        subs__.addSub(mobl.domBind(node178, 'blur', val112));
      }
      
      node177.append(node178);
      node175.append(node177);
      
      
      
      
    } else {
      
      var node179 = $("<input>");
      node179.attr('type', "text");
      
      var ref203 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref203.get() !== null) {
        node179.attr('class', ref203.get());
        subs__.addSub(ref203.addEventListener('change', function(_, ref, val) {
          node179.attr('class', val);
        }));
        
      }
      subs__.addSub(ref203.rebind());
      
      var ref204 = placeholder;
      if(ref204.get() !== null) {
        node179.attr('placeholder', ref204.get());
        subs__.addSub(ref204.addEventListener('change', function(_, ref, val) {
          node179.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref204.rebind());
      
      var ref205 = s;
      node179.val(""+ref205.get());
      var ignore46 = false;
      subs__.addSub(ref205.addEventListener('change', function(_, ref, val) {
        if(ignore46) return;
        node179.val(""+val);
      }));
      subs__.addSub(ref205.rebind());
      
      subs__.addSub(mobl.domBind(node179, 'keyup change', function() {
        ignore46 = true;
        s.set(mobl.stringTomobl__String(node179.val()));
        ignore46 = false;
      }));
      
      
      var val113 = onchange.get();
      if(val113 !== null) {
        subs__.addSub(mobl.domBind(node179, 'change', val113));
      }
      
      var val114 = onkeyup.get();
      if(val114 !== null) {
        subs__.addSub(mobl.domBind(node179, 'keyup', val114));
      }
      
      var val115 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val115 !== null) {
        subs__.addSub(mobl.domBind(node179, 'blur', val115));
      }
      
      node175.append(node179);
      
      
    }
  };
  renderCond27();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond27();
  }));
  
  callback(root377); return subs__;
  
  return subs__;
};

mobl.ui.generic.numField = function(n, placeholder, label, onchange, elements, callback) {
  var root378 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node180 = $("<span>");
  root378.append(node180);
  var condSubs28 = new mobl.CompSubscription();
  subs__.addSub(condSubs28);
  var oldValue28;
  var renderCond28 = function() {
    var value52 = label.get();
    if(oldValue28 === value52) return;
    oldValue28 = value52;
    var subs__ = condSubs28;
    subs__.unsubscribe();
    node180.empty();
    if(value52) {
      
      var node181 = $("<span>");
      node181.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref209 = label;
      node181.text(""+ref209.get());
      var ignore48 = false;
      subs__.addSub(ref209.addEventListener('change', function(_, ref, val) {
        if(ignore48) return;
        node181.text(""+val);
      }));
      subs__.addSub(ref209.rebind());
      
      
      node180.append(node181);
      
      var node182 = $("<span>");
      node182.attr('style', "float: left");
      
      
      var node183 = $("<input>");
      node183.attr('type', "text");
      
      var ref206 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref206.get() !== null) {
        node183.attr('class', ref206.get());
        subs__.addSub(ref206.addEventListener('change', function(_, ref, val) {
          node183.attr('class', val);
        }));
        
      }
      subs__.addSub(ref206.rebind());
      
      var ref207 = placeholder;
      if(ref207.get() !== null) {
        node183.attr('placeholder', ref207.get());
        subs__.addSub(ref207.addEventListener('change', function(_, ref, val) {
          node183.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref207.rebind());
      
      var ref208 = n;
      node183.val(""+ref208.get());
      var ignore47 = false;
      subs__.addSub(ref208.addEventListener('change', function(_, ref, val) {
        if(ignore47) return;
        node183.val(""+val);
      }));
      subs__.addSub(ref208.rebind());
      
      subs__.addSub(mobl.domBind(node183, 'keyup change', function() {
        ignore47 = true;
        n.set(mobl.stringTomobl__Num(node183.val()));
        ignore47 = false;
      }));
      
      
      var val116 = onchange.get();
      if(val116 !== null) {
        subs__.addSub(mobl.domBind(node183, 'change', val116));
      }
      
      var val117 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val117 !== null) {
        subs__.addSub(mobl.domBind(node183, 'blur', val117));
      }
      
      node182.append(node183);
      node180.append(node182);
      
      
      
      
    } else {
      
      var node184 = $("<input>");
      node184.attr('type', "text");
      
      var ref210 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref210.get() !== null) {
        node184.attr('class', ref210.get());
        subs__.addSub(ref210.addEventListener('change', function(_, ref, val) {
          node184.attr('class', val);
        }));
        
      }
      subs__.addSub(ref210.rebind());
      
      var ref211 = placeholder;
      if(ref211.get() !== null) {
        node184.attr('placeholder', ref211.get());
        subs__.addSub(ref211.addEventListener('change', function(_, ref, val) {
          node184.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref211.rebind());
      
      var ref212 = n;
      node184.val(""+ref212.get());
      var ignore49 = false;
      subs__.addSub(ref212.addEventListener('change', function(_, ref, val) {
        if(ignore49) return;
        node184.val(""+val);
      }));
      subs__.addSub(ref212.rebind());
      
      subs__.addSub(mobl.domBind(node184, 'keyup change', function() {
        ignore49 = true;
        n.set(mobl.stringTomobl__Num(node184.val()));
        ignore49 = false;
      }));
      
      
      var val118 = onchange.get();
      if(val118 !== null) {
        subs__.addSub(mobl.domBind(node184, 'change', val118));
      }
      
      var val119 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val119 !== null) {
        subs__.addSub(mobl.domBind(node184, 'blur', val119));
      }
      
      node180.append(node184);
      
      
    }
  };
  renderCond28();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond28();
  }));
  
  callback(root378); return subs__;
  
  return subs__;
};

mobl.ui.generic.passwordField = function(s, placeholder, label, onchange, onkeyup, elements, callback) {
  var root379 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node185 = $("<span>");
  root379.append(node185);
  var condSubs29 = new mobl.CompSubscription();
  subs__.addSub(condSubs29);
  var oldValue29;
  var renderCond29 = function() {
    var value53 = label.get();
    if(oldValue29 === value53) return;
    oldValue29 = value53;
    var subs__ = condSubs29;
    subs__.unsubscribe();
    node185.empty();
    if(value53) {
      
      var node186 = $("<span>");
      node186.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref216 = label;
      node186.text(""+ref216.get());
      var ignore51 = false;
      subs__.addSub(ref216.addEventListener('change', function(_, ref, val) {
        if(ignore51) return;
        node186.text(""+val);
      }));
      subs__.addSub(ref216.rebind());
      
      
      node185.append(node186);
      
      var node187 = $("<span>");
      node187.attr('style', "float: left");
      
      
      var node188 = $("<input>");
      node188.attr('type', "password");
      
      var ref213 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref213.get() !== null) {
        node188.attr('class', ref213.get());
        subs__.addSub(ref213.addEventListener('change', function(_, ref, val) {
          node188.attr('class', val);
        }));
        
      }
      subs__.addSub(ref213.rebind());
      
      var ref214 = placeholder;
      if(ref214.get() !== null) {
        node188.attr('placeholder', ref214.get());
        subs__.addSub(ref214.addEventListener('change', function(_, ref, val) {
          node188.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref214.rebind());
      
      var ref215 = s;
      node188.val(""+ref215.get());
      var ignore50 = false;
      subs__.addSub(ref215.addEventListener('change', function(_, ref, val) {
        if(ignore50) return;
        node188.val(""+val);
      }));
      subs__.addSub(ref215.rebind());
      
      subs__.addSub(mobl.domBind(node188, 'keyup change', function() {
        ignore50 = true;
        s.set(mobl.stringTomobl__String(node188.val()));
        ignore50 = false;
      }));
      
      
      var val120 = onchange.get();
      if(val120 !== null) {
        subs__.addSub(mobl.domBind(node188, 'change', val120));
      }
      
      var val121 = onkeyup.get();
      if(val121 !== null) {
        subs__.addSub(mobl.domBind(node188, 'keyup', val121));
      }
      
      var val122 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val122 !== null) {
        subs__.addSub(mobl.domBind(node188, 'blur', val122));
      }
      
      node187.append(node188);
      node185.append(node187);
      
      
      
      
    } else {
      
      var node189 = $("<input>");
      node189.attr('type', "password");
      
      var ref217 = mobl.ref(mobl.ui.generic.textFieldStyle);
      if(ref217.get() !== null) {
        node189.attr('class', ref217.get());
        subs__.addSub(ref217.addEventListener('change', function(_, ref, val) {
          node189.attr('class', val);
        }));
        
      }
      subs__.addSub(ref217.rebind());
      
      var ref218 = placeholder;
      if(ref218.get() !== null) {
        node189.attr('placeholder', ref218.get());
        subs__.addSub(ref218.addEventListener('change', function(_, ref, val) {
          node189.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref218.rebind());
      
      var ref219 = s;
      node189.val(""+ref219.get());
      var ignore52 = false;
      subs__.addSub(ref219.addEventListener('change', function(_, ref, val) {
        if(ignore52) return;
        node189.val(""+val);
      }));
      subs__.addSub(ref219.rebind());
      
      subs__.addSub(mobl.domBind(node189, 'keyup change', function() {
        ignore52 = true;
        s.set(mobl.stringTomobl__String(node189.val()));
        ignore52 = false;
      }));
      
      
      var val123 = onchange.get();
      if(val123 !== null) {
        subs__.addSub(mobl.domBind(node189, 'change', val123));
      }
      
      var val124 = onkeyup.get();
      if(val124 !== null) {
        subs__.addSub(mobl.domBind(node189, 'keyup', val124));
      }
      
      var val125 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val125 !== null) {
        subs__.addSub(mobl.domBind(node189, 'blur', val125));
      }
      
      node185.append(node189);
      
      
    }
  };
  renderCond29();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond29();
  }));
  
  callback(root379); return subs__;
  
  return subs__;
};
mobl.ui.generic.tabbarStyle = 'mobl__ui__generic__tabbarStyle';
mobl.ui.generic.inActiveTabButtonStyle = 'mobl__ui__generic__inActiveTabButtonStyle';
mobl.ui.generic.activeTabButtonStyle = 'mobl__ui__generic__activeTabButtonStyle';
mobl.ui.generic.inActiveTabStyle = 'mobl__ui__generic__inActiveTabStyle';
mobl.ui.generic.activeTabStyle = 'mobl__ui__generic__activeTabStyle';

mobl.ui.generic.tabSet = function(tabs, elements, callback) {
  var root380 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeTabName = mobl.ref(tabs.get().get(0)._1);
  
  var s = mobl.ref("");
  
  var tmp1191 = mobl.ref(null);
  
  
  var tmp1190 = mobl.ref(null);
  
  var nodes232 = $("<span>");
  root380.append(nodes232);
  subs__.addSub((mobl.ui.generic.block)(mobl.ref(mobl.ui.generic.tabbarStyle), tmp1190, tmp1191, function(_, callback) {
    var root381 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node190 = mobl.loadingSpan();
    root381.append(node190);
    var list27;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList27 = function() {
      var subs__ = listSubs__;
      list27 = tabs.get();
      list27.list(function(results33) {
        node190.empty();
        for(var i595 = 0; i595 < results33.length; i595++) {
          (function() {
            var iternode27 = $("<span>");
            node190.append(iternode27);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results33), i595), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results33), i595), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results33), i595), "_3");
            
            var tmp1188 = mobl.ref(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            subs__.addSub(activeTabName.addEventListener('change', function() {
              tmp1188.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp1188.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeTabButtonStyle).addEventListener('change', function() {
              tmp1188.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabButtonStyle).addEventListener('change', function() {
              tmp1188.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
            }));
            
            
            var tmp1187 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTabName.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp1189 = mobl.ref(null);
            
            var nodes233 = $("<span>");
            iternode27.append(nodes233);
            subs__.addSub((mobl.ui.generic.span)(tmp1188, tmp1189, tmp1187, function(_, callback) {
              var root382 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp1186 = mobl.ref(null);
              
              
              var tmp1185 = mobl.ref(null);
              
              var nodes234 = $("<span>");
              root382.append(nodes234);
              subs__.addSub((mobl.label)(tabName, tmp1185, tmp1186, function(_, callback) {
                var root383 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root383); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes234;
                nodes234 = node.contents();
                oldNodes.replaceWith(nodes234);
              }));
              callback(root382); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes233;
              nodes233 = node.contents();
              oldNodes.replaceWith(nodes233);
            }));
            
            var oldNodes = iternode27;
            iternode27 = iternode27.contents();
            oldNodes.replaceWith(iternode27);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list27.addEventListener('change', function() { listSubs__.unsubscribe(); renderList27(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList27(true); }));
      });
    };
    renderList27();
    
    callback(root381); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes232;
    nodes232 = node.contents();
    oldNodes.replaceWith(nodes232);
  }));
  
  var node191 = mobl.loadingSpan();
  root380.append(node191);
  var list28;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList28 = function() {
    var subs__ = listSubs__;
    list28 = tabs.get();
    list28.list(function(results34) {
      node191.empty();
      for(var i596 = 0; i596 < results34.length; i596++) {
        (function() {
          var iternode28 = $("<span>");
          node191.append(iternode28);
          var tabName;var tabIcon;var tabControl;
          tabName = mobl.ref(mobl.ref(mobl.ref(results34), i596), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results34), i596), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results34), i596), "_3");
          
          var tmp1192 = mobl.ref(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          subs__.addSub(activeTabName.addEventListener('change', function() {
            tmp1192.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(tabName.addEventListener('change', function() {
            tmp1192.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.activeTabStyle).addEventListener('change', function() {
            tmp1192.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabStyle).addEventListener('change', function() {
            tmp1192.set(activeTabName.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
          }));
          
          
          var tmp1194 = mobl.ref(null);
          
          
          var tmp1193 = mobl.ref(null);
          
          var nodes235 = $("<span>");
          iternode28.append(nodes235);
          subs__.addSub((mobl.ui.generic.block)(tmp1192, tmp1193, tmp1194, function(_, callback) {
            var root384 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes236 = $("<span>");
            root384.append(nodes236);
            subs__.addSub((mobl.screenContext)(function(_, callback) {
              var root385 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes237 = $("<span>");
              root385.append(nodes237);
              subs__.addSub(tabControl.addEventListener('change', function() {
                renderControl79();
              }));
              
              function renderControl79() {
                subs__.addSub((tabControl.get())(function(elements, callback) {
                  var root386 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root386); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes237;
                  nodes237 = node.contents();
                  oldNodes.replaceWith(nodes237);
                }));
              }
              renderControl79();
              callback(root385); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes236;
              nodes236 = node.contents();
              oldNodes.replaceWith(nodes236);
            }));
            callback(root384); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes235;
            nodes235 = node.contents();
            oldNodes.replaceWith(nodes235);
          }));
          
          var oldNodes = iternode28;
          iternode28 = iternode28.contents();
          oldNodes.replaceWith(iternode28);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list28.addEventListener('change', function() { listSubs__.unsubscribe(); renderList28(true); }));
      subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList28(true); }));
    });
  };
  renderList28();
  
  callback(root380); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.searchboxStyle = 'mobl__ui__generic__searchboxStyle';
mobl.ui.generic.searchBoxInputStyle = 'mobl__ui__generic__searchBoxInputStyle';

mobl.ui.generic.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root387 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node192 = $("<div>");
  
  var ref223 = mobl.ref(mobl.ui.generic.searchboxStyle);
  if(ref223.get() !== null) {
    node192.attr('class', ref223.get());
    subs__.addSub(ref223.addEventListener('change', function(_, ref, val) {
      node192.attr('class', val);
    }));
    
  }
  subs__.addSub(ref223.rebind());
  
  
  var node193 = $("<input>");
  node193.attr('type', "text");
  
  var ref220 = mobl.ref(mobl.ui.generic.searchBoxInputStyle);
  if(ref220.get() !== null) {
    node193.attr('class', ref220.get());
    subs__.addSub(ref220.addEventListener('change', function(_, ref, val) {
      node193.attr('class', val);
    }));
    
  }
  subs__.addSub(ref220.rebind());
  
  var ref221 = placeholder;
  if(ref221.get() !== null) {
    node193.attr('placeholder', ref221.get());
    subs__.addSub(ref221.addEventListener('change', function(_, ref, val) {
      node193.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref221.rebind());
  
  var ref222 = s;
  node193.val(""+ref222.get());
  var ignore53 = false;
  subs__.addSub(ref222.addEventListener('change', function(_, ref, val) {
    if(ignore53) return;
    node193.val(""+val);
  }));
  subs__.addSub(ref222.rebind());
  
  subs__.addSub(mobl.domBind(node193, 'keyup change', function() {
    ignore53 = true;
    s.set(mobl.stringTomobl__String(node193.val()));
    ignore53 = false;
  }));
  
  
  var val126 = onsearch.get();
  if(val126 !== null) {
    subs__.addSub(mobl.domBind(node193, 'change', val126));
  }
  
  var val127 = onkeyup.get();
  if(val127 !== null) {
    subs__.addSub(mobl.domBind(node193, 'keyup', val127));
  }
  node193.attr('autocorrect', "off");
  node193.attr('autocapitalize', "off");
  node193.attr('autocomplete', "off");
  
  node192.append(node193);
  root387.append(node192);
  callback(root387); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.contextMenuStyle = 'mobl__ui__generic__contextMenuStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.contextMenu = function(elements, callback) {
  var root388 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref224 = mobl.ref(mobl.ui.generic.contextMenuStyle);
  if(ref224.get() !== null) {
    menu.attr('class', ref224.get());
    subs__.addSub(ref224.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref224.rebind());
  
  var nodes238 = $("<span>");
  menu.append(nodes238);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl80();
  }));
  
  function renderControl80() {
    subs__.addSub((elements)(function(elements, callback) {
      var root389 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root389); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes238;
      nodes238 = node.contents();
      oldNodes.replaceWith(nodes238);
    }));
  }
  renderControl80();
  root388.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "mobl/ui/generic/contextmenu.png");
  img.attr('style', "float: right;");
  
  var val128 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp1252 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val128 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val128));
  }
  
  root388.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root388); return subs__;
  
  
  
  return subs__;
};

mobl.ui.generic.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root390 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp1244 = mobl.ref(mobl.window.get().innerWidth > 500);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp1244.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node194 = $("<span>");
  root390.append(node194);
  var condSubs30 = new mobl.CompSubscription();
  subs__.addSub(condSubs30);
  var oldValue30;
  var renderCond30 = function() {
    var value54 = tmp1244.get();
    if(oldValue30 === value54) return;
    oldValue30 = value54;
    var subs__ = condSubs30;
    subs__.unsubscribe();
    node194.empty();
    if(value54) {
      items.get().one(function(result__) {
        var current = mobl.ref(result__);
        
        var node195 = $("<div>");
        node195.attr('width', "100%");
        
        
        var node196 = $("<div>");
        node196.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes240 = $("<span>");
        node196.append(nodes240);
        subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
          var root392 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node198 = mobl.loadingSpan();
          root392.append(node198);
          var list29;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList29 = function() {
            var subs__ = listSubs__;
            list29 = items.get();
            list29.list(function(results35) {
              node198.empty();
              for(var i597 = 0; i597 < results35.length; i597++) {
                (function() {
                  var iternode29 = $("<span>");
                  node198.append(iternode29);
                  var it;
                  it = mobl.ref(mobl.ref(results35), i597);
                  
                  var tmp1208 = mobl.ref(it.get() == current.get());
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp1208.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp1208.set(it.get() == current.get());
                  }));
                  
                  
                  var node199 = $("<span>");
                  iternode29.append(node199);
                  var condSubs31 = new mobl.CompSubscription();
                  subs__.addSub(condSubs31);
                  var oldValue31;
                  var renderCond31 = function() {
                    var value55 = tmp1208.get();
                    if(oldValue31 === value55) return;
                    oldValue31 = value55;
                    var subs__ = condSubs31;
                    subs__.unsubscribe();
                    node199.empty();
                    if(value55) {
                      
                      var tmp1204 = mobl.ref(false);
                      
                      
                      var tmp1203 = mobl.ref(null);
                      
                      
                      var tmp1202 = mobl.ref(null);
                      
                      var nodes241 = $("<span>");
                      node199.append(nodes241);
                      subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.selectedItemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp1202, tmp1203, tmp1204, function(_, callback) {
                        var root393 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes242 = $("<span>");
                        root393.append(nodes242);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl82();
                        }));
                        
                        function renderControl82() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root394 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root394); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes242;
                            nodes242 = node.contents();
                            oldNodes.replaceWith(nodes242);
                          }));
                        }
                        renderControl82();
                        callback(root393); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes241;
                        nodes241 = node.contents();
                        oldNodes.replaceWith(nodes241);
                      }));
                      
                      
                    } else {
                      
                      var tmp1206 = mobl.ref(function(event, callback) {
                                           if(event && event.stopPropagation) event.stopPropagation();
                                           var result__ = it.get();
                                           current.set(result__);
                                           if(callback && callback.apply) callback(); return;
                                         });
                      
                      
                      var tmp1205 = mobl.ref(true);
                      
                      
                      var tmp1207 = mobl.ref(null);
                      
                      var nodes243 = $("<span>");
                      node199.append(nodes243);
                      subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp1206, tmp1207, tmp1205, function(_, callback) {
                        var root395 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes244 = $("<span>");
                        root395.append(nodes244);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl83();
                        }));
                        
                        function renderControl83() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root396 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root396); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes244;
                            nodes244 = node.contents();
                            oldNodes.replaceWith(nodes244);
                          }));
                        }
                        renderControl83();
                        callback(root395); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes243;
                        nodes243 = node.contents();
                        oldNodes.replaceWith(nodes243);
                      }));
                      
                      
                    }
                  };
                  renderCond31();
                  subs__.addSub(tmp1208.addEventListener('change', function() {
                    renderCond31();
                  }));
                  
                  
                  var oldNodes = iternode29;
                  iternode29 = iternode29.contents();
                  oldNodes.replaceWith(iternode29);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list29.addEventListener('change', function() { listSubs__.unsubscribe(); renderList29(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList29(true); }));
            });
          };
          renderList29();
          
          callback(root392); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes240;
          nodes240 = node.contents();
          oldNodes.replaceWith(nodes240);
        }));
        node195.append(node196);
        
        var node197 = $("<div>");
        node197.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        var nodes239 = $("<span>");
        node197.append(nodes239);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl81();
        }));
        
        function renderControl81() {
          subs__.addSub((detail.get())(current, function(elements, callback) {
            var root391 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root391); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes239;
            nodes239 = node.contents();
            oldNodes.replaceWith(nodes239);
          }));
        }
        renderControl81();
        node195.append(node197);
        node194.append(node195);
        
        
        
        
        
        
      });
    } else {
      var nodes245 = $("<span>");
      node194.append(nodes245);
      subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
        var root397 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node200 = mobl.loadingSpan();
        root397.append(node200);
        var list30;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList30 = function() {
          var subs__ = listSubs__;
          list30 = items.get();
          list30.list(function(results36) {
            node200.empty();
            for(var i598 = 0; i598 < results36.length; i598++) {
              (function() {
                var iternode30 = $("<span>");
                node200.append(iternode30);
                var it;
                it = mobl.ref(mobl.ref(results36), i598);
                
                var tmp1195 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     mobl.call('mobl.ui.generic.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                     var tmp1253 = result__;
                                     if(callback && callback.apply) callback(); return;
                                     });
                                   });
                
                
                var tmp1197 = mobl.ref(false);
                
                
                var tmp1196 = mobl.ref(null);
                
                var nodes246 = $("<span>");
                iternode30.append(nodes246);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp1195, tmp1196, tmp1197, function(_, callback) {
                  var root398 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes247 = $("<span>");
                  root398.append(nodes247);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl84();
                  }));
                  
                  function renderControl84() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root399 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root399); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes247;
                      nodes247 = node.contents();
                      oldNodes.replaceWith(nodes247);
                    }));
                  }
                  renderControl84();
                  callback(root398); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes246;
                  nodes246 = node.contents();
                  oldNodes.replaceWith(nodes246);
                }));
                
                var oldNodes = iternode30;
                iternode30 = iternode30.contents();
                oldNodes.replaceWith(iternode30);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list30.addEventListener('change', function() { listSubs__.unsubscribe(); renderList30(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList30(true); }));
          });
        };
        renderList30();
        
        callback(root397); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes245;
        nodes245 = node.contents();
        oldNodes.replaceWith(nodes245);
      }));
      
      
    }
  };
  renderCond30();
  subs__.addSub(tmp1244.addEventListener('change', function() {
    renderCond30();
  }));
  
  callback(root390); return subs__;
  
  return subs__;
};

mobl.ui.generic.detailScreen = function(it, detail, callback, screenCallback) {
  var root400 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var tmp1200 = mobl.ref("Detail");
  
  
  var tmp1201 = mobl.ref(null);
  
  var nodes248 = $("<span>");
  root400.append(nodes248);
  subs__.addSub((mobl.ui.generic.header)(tmp1200, tmp1201, function(_, callback) {
    var root401 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var tmp1199 = mobl.ref(function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       });
    
    
    var tmp1198 = mobl.ref("Back");
    
    var nodes249 = $("<span>");
    root401.append(nodes249);
    subs__.addSub((mobl.ui.generic.backButton)(tmp1198, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp1199, function(_, callback) {
      var root402 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root402); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes249;
      nodes249 = node.contents();
      oldNodes.replaceWith(nodes249);
    }));
    callback(root401); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes248;
    nodes248 = node.contents();
    oldNodes.replaceWith(nodes248);
  }));
  var nodes250 = $("<span>");
  root400.append(nodes250);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl85();
  }));
  
  function renderControl85() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root403 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root403); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes250;
      nodes250 = node.contents();
      oldNodes.replaceWith(nodes250);
    }));
  }
  renderControl85();
  callback(root400); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.selectedItemStyle = 'mobl__ui__generic__selectedItemStyle';

mobl.ui.generic.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root404 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes251 = $("<span>");
  root404.append(nodes251);
  subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
    var root405 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node201 = mobl.loadingSpan();
    root405.append(node201);
    var list31;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList31 = function() {
      var subs__ = listSubs__;
      list31 = coll.get();
      list31.list(function(results37) {
        node201.empty();
        for(var i599 = 0; i599 < results37.length; i599++) {
          (function() {
            var iternode31 = $("<span>");
            node201.append(iternode31);
            var it;
            it = mobl.ref(mobl.ref(results37), i599);
            
            var tmp1215 = mobl.ref(it.get() == selected.get());
            subs__.addSub(it.addEventListener('change', function() {
              tmp1215.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp1215.set(it.get() == selected.get());
            }));
            
            
            var node202 = $("<span>");
            iternode31.append(node202);
            var condSubs32 = new mobl.CompSubscription();
            subs__.addSub(condSubs32);
            var oldValue32;
            var renderCond32 = function() {
              var value56 = tmp1215.get();
              if(oldValue32 === value56) return;
              oldValue32 = value56;
              var subs__ = condSubs32;
              subs__.unsubscribe();
              node202.empty();
              if(value56) {
                
                var tmp1211 = mobl.ref(false);
                
                
                var tmp1210 = mobl.ref(null);
                
                
                var tmp1209 = mobl.ref(null);
                
                var nodes252 = $("<span>");
                node202.append(nodes252);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp1209, tmp1210, tmp1211, function(_, callback) {
                  var root406 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes253 = $("<span>");
                  root406.append(nodes253);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl86();
                  }));
                  
                  function renderControl86() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root407 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root407); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes253;
                      nodes253 = node.contents();
                      oldNodes.replaceWith(nodes253);
                    }));
                  }
                  renderControl86();
                  callback(root406); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes252;
                  nodes252 = node.contents();
                  oldNodes.replaceWith(nodes252);
                }));
                
                
              } else {
                
                var tmp1213 = mobl.ref(true);
                
                
                var tmp1212 = mobl.ref(function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     selected.set(result__);
                                     if(callback && callback.apply) callback(); return;
                                   });
                
                
                var tmp1214 = mobl.ref(null);
                
                var nodes254 = $("<span>");
                node202.append(nodes254);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp1212, tmp1214, tmp1213, function(_, callback) {
                  var root408 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes255 = $("<span>");
                  root408.append(nodes255);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl87();
                  }));
                  
                  function renderControl87() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root409 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root409); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes255;
                      nodes255 = node.contents();
                      oldNodes.replaceWith(nodes255);
                    }));
                  }
                  renderControl87();
                  callback(root408); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes254;
                  nodes254 = node.contents();
                  oldNodes.replaceWith(nodes254);
                }));
                
                
              }
            };
            renderCond32();
            subs__.addSub(tmp1215.addEventListener('change', function() {
              renderCond32();
            }));
            
            
            var oldNodes = iternode31;
            iternode31 = iternode31.contents();
            oldNodes.replaceWith(iternode31);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list31.addEventListener('change', function() { listSubs__.unsubscribe(); renderList31(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList31(true); }));
      });
    };
    renderList31();
    
    callback(root405); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes251;
    nodes251 = node.contents();
    oldNodes.replaceWith(nodes251);
  }));
  callback(root404); return subs__;
  
  return subs__;
};
mobl.ui.generic.loadMoreStyle = 'mobl__ui__generic__loadMoreStyle';

mobl.ui.generic.stagedList = function(coll, listCtrl, initialItems, step, elements, callback) {
  var root410 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var total = mobl.ref(result__);
    var nodes256 = $("<span>");
    root410.append(nodes256);
    subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
      var root411 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var tmp1219 = mobl.ref(coll.get().limit(n.get()));
      subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
        tmp1219.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(coll.addEventListener('change', function() {
        tmp1219.set(coll.get().limit(n.get()));
      }));
      subs__.addSub(n.addEventListener('change', function() {
        tmp1219.set(coll.get().limit(n.get()));
      }));
      
      
      var node203 = mobl.loadingSpan();
      root411.append(node203);
      var list32;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList32 = function() {
        var subs__ = listSubs__;
        list32 = tmp1219.get();
        list32.list(function(results38) {
          node203.empty();
          for(var i600 = 0; i600 < results38.length; i600++) {
            (function() {
              var iternode32 = $("<span>");
              node203.append(iternode32);
              var it;
              it = mobl.ref(mobl.ref(results38), i600);
              
              var tmp1216 = mobl.ref(function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   if(callback && callback.apply) callback(); return;
                                 });
              
              
              var tmp1218 = mobl.ref(false);
              
              
              var tmp1217 = mobl.ref(null);
              
              var nodes257 = $("<span>");
              iternode32.append(nodes257);
              subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp1216, tmp1217, tmp1218, function(_, callback) {
                var root412 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes258 = $("<span>");
                root412.append(nodes258);
                subs__.addSub(listCtrl.addEventListener('change', function() {
                  renderControl88();
                }));
                
                function renderControl88() {
                  subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                    var root413 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root413); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes258;
                    nodes258 = node.contents();
                    oldNodes.replaceWith(nodes258);
                  }));
                }
                renderControl88();
                callback(root412); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes257;
                nodes257 = node.contents();
                oldNodes.replaceWith(nodes257);
              }));
              
              var oldNodes = iternode32;
              iternode32 = iternode32.contents();
              oldNodes.replaceWith(iternode32);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list32.addEventListener('change', function() { listSubs__.unsubscribe(); renderList32(true); }));
          subs__.addSub(tmp1219.addEventListener('change', function() { listSubs__.unsubscribe(); renderList32(true); }));
        });
      };
      renderList32();
      
      
      var tmp1220 = mobl.ref(n.get() < total.get());
      subs__.addSub(n.addEventListener('change', function() {
        tmp1220.set(n.get() < total.get());
      }));
      subs__.addSub(total.addEventListener('change', function() {
        tmp1220.set(n.get() < total.get());
      }));
      
      
      var node204 = $("<span>");
      root411.append(node204);
      var condSubs33 = new mobl.CompSubscription();
      subs__.addSub(condSubs33);
      var oldValue33;
      var renderCond33 = function() {
        var value57 = tmp1220.get();
        if(oldValue33 === value57) return;
        oldValue33 = value57;
        var subs__ = condSubs33;
        subs__.unsubscribe();
        node204.empty();
        if(value57) {
          
          var node205 = $("<li>");
          
          var ref225 = mobl.ref(mobl.ui.generic.loadMoreStyle);
          if(ref225.get() !== null) {
            node205.attr('class', ref225.get());
            subs__.addSub(ref225.addEventListener('change', function(_, ref, val) {
              node205.attr('class', val);
            }));
            
          }
          subs__.addSub(ref225.rebind());
          
          var val129 = function(event, callback) {
                        if(event && event.stopPropagation) event.stopPropagation();
                        var result__ = n.get() + step.get();
                        n.set(result__);
                        if(callback && callback.apply) callback(); return;
                      };
          if(val129 !== null) {
            subs__.addSub(mobl.domBind(node205, 'tap', val129));
          }
          
          
          node205.append("More");
          node204.append(node205);
          
          
        } else {
          
        }
      };
      renderCond33();
      subs__.addSub(tmp1220.addEventListener('change', function() {
        renderCond33();
      }));
      
      callback(root411); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes256;
      nodes256 = node.contents();
      oldNodes.replaceWith(nodes256);
    }));
    callback(root410); return subs__;
    
  });
  return subs__;
};

mobl.ui.generic.markableList = function(items, elements, callback) {
  var root414 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes259 = $("<span>");
  root414.append(nodes259);
  subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
    var root415 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node206 = mobl.loadingSpan();
    root415.append(node206);
    var list33;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList33 = function() {
      var subs__ = listSubs__;
      list33 = items.get();
      list33.list(function(results39) {
        node206.empty();
        for(var i601 = 0; i601 < results39.length; i601++) {
          (function() {
            var iternode33 = $("<span>");
            node206.append(iternode33);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results39), i601), "_1");it = mobl.ref(mobl.ref(mobl.ref(results39), i601), "_2");
            
            var tmp1224 = mobl.ref(false);
            
            
            var tmp1223 = mobl.ref(null);
            
            
            var tmp1222 = mobl.ref(null);
            
            var nodes260 = $("<span>");
            iternode33.append(nodes260);
            subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp1222, tmp1223, tmp1224, function(_, callback) {
              var root416 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp1221 = mobl.ref(null);
              
              var nodes261 = $("<span>");
              root416.append(nodes261);
              subs__.addSub((mobl.ui.generic.checkBox)(checked, it, tmp1221, function(_, callback) {
                var root417 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root417); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes261;
                nodes261 = node.contents();
                oldNodes.replaceWith(nodes261);
              }));
              callback(root416); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes260;
              nodes260 = node.contents();
              oldNodes.replaceWith(nodes260);
            }));
            
            var oldNodes = iternode33;
            iternode33 = iternode33.contents();
            oldNodes.replaceWith(iternode33);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list33.addEventListener('change', function() { listSubs__.unsubscribe(); renderList33(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList33(true); }));
      });
    };
    renderList33();
    
    callback(root415); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes259;
    nodes259 = node.contents();
    oldNodes.replaceWith(nodes259);
  }));
  callback(root414); return subs__;
  
  return subs__;
};

mobl.ui.generic.selectList = function(title, coll, callback, screenCallback) {
  var root418 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll622) {
    coll622 = coll622.reverse();
    function processOne44() {
      var it;
      it = coll622.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll622.length > 0) processOne44(); else rest44();
      
    }
    function rest44() {
      
      var tmp1229 = mobl.ref(null);
      
      var nodes262 = $("<span>");
      root418.append(nodes262);
      subs__.addSub((mobl.ui.generic.header)(title, tmp1229, function(_, callback) {
        var root419 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var tmp1225 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = null;
                             if(callback && callback.apply) callback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           });
        
        
        var tmp1226 = mobl.ref("Back");
        
        var nodes263 = $("<span>");
        root419.append(nodes263);
        subs__.addSub((mobl.ui.generic.backButton)(tmp1226, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp1225, function(_, callback) {
          var root420 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root420); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes263;
          nodes263 = node.contents();
          oldNodes.replaceWith(nodes263);
        }));
        
        var tmp1228 = mobl.ref(function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = [];
                             var selected = result__;
                             var result__ = items.get();
                             items.get().list(function(coll621) {
                               coll621 = coll621.reverse();
                               function processOne43() {
                                 var checked;var it;
                                 var tmp1255 = coll621.pop();
                                 checked = tmp1255._1;it = tmp1255._2;
                                 var result__ = checked;
                                 if(result__) {
                                   var result__ = selected.push(it);
                                   
                                   if(coll621.length > 0) processOne43(); else rest43();
                                   
                                 } else {
                                   {
                                     
                                     if(coll621.length > 0) processOne43(); else rest43();
                                     
                                   }
                                 }
                               }
                               function rest43() {
                                 var result__ = selected;
                                 if(screenCallback) screenCallback(result__);
                                 return;
                                 if(callback && callback.apply) callback(); return;
                               }
                               if(coll621.length > 0) processOne43(); else rest43();
                             });
                             
                           });
        
        
        var tmp1227 = mobl.ref("Done");
        
        var nodes264 = $("<span>");
        root419.append(nodes264);
        subs__.addSub((mobl.ui.generic.button)(tmp1227, mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp1228, function(_, callback) {
          var root421 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root421); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes264;
          nodes264 = node.contents();
          oldNodes.replaceWith(nodes264);
        }));
        callback(root419); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes262;
        nodes262 = node.contents();
        oldNodes.replaceWith(nodes262);
      }));
      var nodes265 = $("<span>");
      root418.append(nodes265);
      subs__.addSub((mobl.ui.generic.markableList)(items, function(_, callback) {
        var root422 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root422); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes265;
        nodes265 = node.contents();
        oldNodes.replaceWith(nodes265);
      }));
      callback(root418); return subs__;
      
      
    }
    if(coll622.length > 0) processOne44(); else rest44();
  });
  
  return subs__;
};

mobl.ui.generic.searchList = function(Ent, masterItem, detailItem, resultLimit, elements, callback) {
  var root423 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  
  var tmp1230 = mobl.ref("Search term");
  
  
  var tmp1232 = mobl.ref(null);
  
  
  var tmp1231 = mobl.ref(null);
  
  var nodes266 = $("<span>");
  root423.append(nodes266);
  subs__.addSub((mobl.ui.generic.searchBox)(phrase, tmp1230, tmp1231, tmp1232, function(_, callback) {
    var root424 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root424); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes266;
    nodes266 = node.contents();
    oldNodes.replaceWith(nodes266);
  }));
  
  var tmp1233 = mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp1233.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp1233.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp1233.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp1233.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp1233.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes267 = $("<span>");
  root423.append(nodes267);
  subs__.addSub((mobl.ui.generic.masterDetail)(tmp1233, masterItem, detailItem, function(_, callback) {
    var root425 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root425); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes267;
    nodes267 = node.contents();
    oldNodes.replaceWith(nodes267);
  }));
  callback(root423); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.progressStyle = 'mobl__ui__generic__progressStyle';
mobl.ui.generic.startLoading = function() {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + mobl.ui.generic.progressStyle + "'>Loading...</div>");
  
  mobl.$("body").prepend(loading);
};

mobl.ui.generic.endLoading = function() {
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
}(mobl.ui.generic));mobl.ui.generic.accordionStyle = 'mobl__ui__generic__accordionStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.inActiveSectionStyle = 'mobl__ui__generic__inActiveSectionStyle';
mobl.ui.generic.activeSectionStyle = 'mobl__ui__generic__activeSectionStyle';

mobl.ui.generic.accordion = function(sections, elements, callback) {
  var root426 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(sections.get().get(0)._1);
  
  var tmp1243 = mobl.ref(null);
  
  
  var tmp1242 = mobl.ref(null);
  
  var nodes268 = $("<span>");
  root426.append(nodes268);
  subs__.addSub((mobl.ui.generic.block)(mobl.ref(mobl.ui.generic.accordionStyle), tmp1242, tmp1243, function(_, callback) {
    var root427 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node207 = mobl.loadingSpan();
    root427.append(node207);
    var list34;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList34 = function() {
      var subs__ = listSubs__;
      list34 = sections.get();
      list34.list(function(results40) {
        node207.empty();
        for(var i602 = 0; i602 < results40.length; i602++) {
          (function() {
            var iternode34 = $("<span>");
            node207.append(iternode34);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results40), i602), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results40), i602), "_2");
            
            var tmp1237 = mobl.ref(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1237.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1237.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp1237.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp1237.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            
            
            var tmp1236 = mobl.ref(function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = sectionName.get();
                                 activeSection.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               });
            
            
            var tmp1238 = mobl.ref(null);
            
            var nodes269 = $("<span>");
            iternode34.append(nodes269);
            subs__.addSub((mobl.ui.generic.span)(tmp1237, tmp1238, tmp1236, function(_, callback) {
              var root428 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var tmp1235 = mobl.ref(null);
              
              
              var tmp1234 = mobl.ref(null);
              
              var nodes270 = $("<span>");
              root428.append(nodes270);
              subs__.addSub((mobl.label)(sectionName, tmp1234, tmp1235, function(_, callback) {
                var root429 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root429); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes270;
                nodes270 = node.contents();
                oldNodes.replaceWith(nodes270);
              }));
              callback(root428); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes269;
              nodes269 = node.contents();
              oldNodes.replaceWith(nodes269);
            }));
            
            var tmp1239 = mobl.ref(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp1239.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp1239.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionStyle).addEventListener('change', function() {
              tmp1239.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionStyle).addEventListener('change', function() {
              tmp1239.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            
            
            var tmp1241 = mobl.ref(null);
            
            
            var tmp1240 = mobl.ref(null);
            
            var nodes271 = $("<span>");
            iternode34.append(nodes271);
            subs__.addSub((mobl.ui.generic.block)(tmp1239, tmp1240, tmp1241, function(_, callback) {
              var root430 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes272 = $("<span>");
              root430.append(nodes272);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl89();
              }));
              
              function renderControl89() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root431 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root431); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes272;
                  nodes272 = node.contents();
                  oldNodes.replaceWith(nodes272);
                }));
              }
              renderControl89();
              callback(root430); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes271;
              nodes271 = node.contents();
              oldNodes.replaceWith(nodes271);
            }));
            
            var oldNodes = iternode34;
            iternode34 = iternode34.contents();
            oldNodes.replaceWith(iternode34);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list34.addEventListener('change', function() { listSubs__.unsubscribe(); renderList34(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList34(true); }));
      });
    };
    renderList34();
    
    callback(root427); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes268;
    nodes268 = node.contents();
    oldNodes.replaceWith(nodes268);
  }));
  callback(root426); return subs__;
  
  return subs__;
};
mobl.ui.generic.tableStyle = 'mobl__ui__generic__tableStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';

mobl.ui.generic.table = function(elements, callback) {
  var root432 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node208 = $("<table>");
  
  var ref226 = mobl.ref(mobl.ui.generic.tableStyle);
  if(ref226.get() !== null) {
    node208.attr('class', ref226.get());
    subs__.addSub(ref226.addEventListener('change', function(_, ref, val) {
      node208.attr('class', val);
    }));
    
  }
  subs__.addSub(ref226.rebind());
  
  var nodes273 = $("<span>");
  node208.append(nodes273);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl90();
  }));
  
  function renderControl90() {
    subs__.addSub((elements)(function(elements, callback) {
      var root433 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root433); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes273;
      nodes273 = node.contents();
      oldNodes.replaceWith(nodes273);
    }));
  }
  renderControl90();
  root432.append(node208);
  callback(root432); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.row = function(elements, callback) {
  var root434 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node209 = $("<tr>");
  
  var ref227 = mobl.ref(mobl.ui.generic.trStyle);
  if(ref227.get() !== null) {
    node209.attr('class', ref227.get());
    subs__.addSub(ref227.addEventListener('change', function(_, ref, val) {
      node209.attr('class', val);
    }));
    
  }
  subs__.addSub(ref227.rebind());
  
  var nodes274 = $("<span>");
  node209.append(nodes274);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl91();
  }));
  
  function renderControl91() {
    subs__.addSub((elements)(function(elements, callback) {
      var root435 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root435); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes274;
      nodes274 = node.contents();
      oldNodes.replaceWith(nodes274);
    }));
  }
  renderControl91();
  root434.append(node209);
  callback(root434); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.cell = function(width, elements, callback) {
  var root436 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node210 = $("<td>");
  
  var ref228 = width;
  if(ref228.get() !== null) {
    node210.attr('width', ref228.get());
    subs__.addSub(ref228.addEventListener('change', function(_, ref, val) {
      node210.attr('width', val);
    }));
    
  }
  subs__.addSub(ref228.rebind());
  
  var ref229 = mobl.ref(mobl.ui.generic.tdStyle);
  if(ref229.get() !== null) {
    node210.attr('class', ref229.get());
    subs__.addSub(ref229.addEventListener('change', function(_, ref, val) {
      node210.attr('class', val);
    }));
    
  }
  subs__.addSub(ref229.rebind());
  
  var nodes275 = $("<span>");
  node210.append(nodes275);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl92();
  }));
  
  function renderControl92() {
    subs__.addSub((elements)(function(elements, callback) {
      var root437 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root437); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes275;
      nodes275 = node.contents();
      oldNodes.replaceWith(nodes275);
    }));
  }
  renderControl92();
  root436.append(node210);
  callback(root436); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.col = function(width, elements, callback) {
  var root438 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node211 = $("<td>");
  
  var ref230 = width;
  if(ref230.get() !== null) {
    node211.attr('width', ref230.get());
    subs__.addSub(ref230.addEventListener('change', function(_, ref, val) {
      node211.attr('width', val);
    }));
    
  }
  subs__.addSub(ref230.rebind());
  
  var ref231 = mobl.ref(mobl.ui.generic.tdStyle);
  if(ref231.get() !== null) {
    node211.attr('class', ref231.get());
    subs__.addSub(ref231.addEventListener('change', function(_, ref, val) {
      node211.attr('class', val);
    }));
    
  }
  subs__.addSub(ref231.rebind());
  
  var nodes276 = $("<span>");
  node211.append(nodes276);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl93();
  }));
  
  function renderControl93() {
    subs__.addSub((elements)(function(elements, callback) {
      var root439 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root439); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes276;
      nodes276 = node.contents();
      oldNodes.replaceWith(nodes276);
    }));
  }
  renderControl93();
  root438.append(node211);
  callback(root438); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.headerCol = function(width, elements, callback) {
  var root440 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node212 = $("<td>");
  
  var ref232 = width;
  if(ref232.get() !== null) {
    node212.attr('width', ref232.get());
    subs__.addSub(ref232.addEventListener('change', function(_, ref, val) {
      node212.attr('width', val);
    }));
    
  }
  subs__.addSub(ref232.rebind());
  
  var ref233 = mobl.ref(mobl.ui.generic.tdStyle);
  if(ref233.get() !== null) {
    node212.attr('class', ref233.get());
    subs__.addSub(ref233.addEventListener('change', function(_, ref, val) {
      node212.attr('class', val);
    }));
    
  }
  subs__.addSub(ref233.rebind());
  
  
  var node213 = $("<strong>");
  
  var nodes277 = $("<span>");
  node213.append(nodes277);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl94();
  }));
  
  function renderControl94() {
    subs__.addSub((elements)(function(elements, callback) {
      var root441 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root441); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes277;
      nodes277 = node.contents();
      oldNodes.replaceWith(nodes277);
    }));
  }
  renderControl94();
  node212.append(node213);
  root440.append(node212);
  callback(root440); return subs__;
  
  
  
  return subs__;
};

mobl.ui.generic.scroller = function(height, elements, callback) {
  var root442 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node214 = $("<div>");
  node214.attr('class', "scroller");
  
  var nodes278 = $("<span>");
  node214.append(nodes278);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl95();
  }));
  
  function renderControl95() {
    subs__.addSub((elements)(function(elements, callback) {
      var root443 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root443); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes278;
      nodes278 = node.contents();
      oldNodes.replaceWith(nodes278);
    }));
  }
  renderControl95();
  root442.append(node214);
  var result__ = mobl.ui.generic.setupScrollers();
  callback(root442); return subs__;
  
  
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
}(mobl.ui.generic));