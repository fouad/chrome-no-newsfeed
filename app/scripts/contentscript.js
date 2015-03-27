'use strict';

function extract() {
  var pagelet = document.getElementById('stream_pagelet')
  var divs = pagelet.querySelectorAll(':scope > div')
  var stream = divs[divs.length - 1]
  var rightCol = document.getElementById('rightCol');

  pagelet.removeChild(stream)
  rightCol.parentNode.removeChild(rightCol)
}

setTimeout(extract, 0)
