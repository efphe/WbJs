/*
 * I load the js framework dynamically: once loaded,
 * I'll populate the online booking form.
 *
 */

function wbLoadScript(sScriptSrc, oCallback) {
  var oHead = document.getElementById('head');
  var oScript = document.createElement('script');
  oScript.type = 'text/javascript';
  oScript.src = sScriptSrc;
  // most browsers
  oScript.onload = oCallback;
  // IE 6 & 7
  oScript.onreadystatechange = function() {
    if (this.readyState == 'complete') {
    oCallback();
    };
  }
  oHead.appendChild(oScript);
}


/* 
 * I try to detect the browser language,
 * and if I can't, I return the passed
 * arg
 */


function wbDetectLanguage(langdefault) {
  /* 
   * I also check if detected language is compatible,
   * ie it,fr,de,en,es,pt 
   */
  try {
    a= 1/0;
  } catch(e) {return langdefault};
}

/*
 * I load the js file and, with a callback,
 * I launch initWuBook() 
 *
 * Args passed are passed to initWuBook() (see
 * inside wbboking.js what's possible to do)
 */
_wbfile= 'https://wubook.net/js/wbk.js';
_wbfile= 'http://localhost:6587/js/wbk/wbk.js';
function wbLoadInit(lcode, dates, deletion, deflang, buttton) {
  /* try to get the better language */
  var wblang= wbDetectLanguage(deflang || 'it');
  wbLoadScript(_wbfile, function() {
    $(document).ready(function() {
      initWuBook(lcode, dates, deletion, deflang, buttton);
    });
  });
}
