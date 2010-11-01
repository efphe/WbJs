/*
 * I load the js framework dynamically: once loaded,
 * I'll populate the online booking form.
 *
 */

/* 
 * I try to detect the browser language,
 * and if I can't, I return the passed
 * arg
 */

function wbDetectLanguage(langdefault) {
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
function wbLoadInit(arg1, arg2, langdefault, arg3....) {
  /* try to get the better language */
  var wblang= wbDetectLanguage(langdefault);
}
