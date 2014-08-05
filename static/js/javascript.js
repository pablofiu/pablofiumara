//closures: lets you associate some data (the enviroment) with a function that
//operates on that data. You can use a closure where you might use an object
//(which has data called object's properties) with a single method (function)

function makeSizer(size) {
    //activating it on a function-by-function basis because my page might depend
    //on features of non-strict mode (if strict mode would be activated, it'd
    //break).
    'use strict';
//makeSizer:function factory because it returns (or creates) a new function
  return function() {
      //document:object
      //body:one of document's properties.Returns the <body> element(node) of the
      //current document:Contains the content of the document
    document.body.style.fontSize = size + 'px';
  };
}

//3 closures: functions with same function body but stores different enviroments
//size === 12
var size12 = makeSizer(12); //resizes the body text to 12
//size === 14
var size14 = makeSizer(14);
//size === 18
var size18 = makeSizer(18);

//window object: each tabbed browser tab contains its own window object
//onload: an EVENT handler PROPERTY for window loading
//onload: part of GlobalEventHandlers INTERFACE
//window.onload = funcRef 
//funcRef:the handler function to be called when the window's load event fires.
//Code is attached to onload event as a callback: single function executed in 
//response to the event
window.onload = function() {
    'use strict';
    //attach size12, size14 and size18 functions to buttons
    //each web page loaded in the browser has its own document object
    //getElementById: one of document's methods
    document.getElementById('size-12').onclick = size12;
    document.getElementById('size-14').onclick = size14;
    document.getElementById('size-18').onclick = size18;
}
