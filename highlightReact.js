function highlightReact() {
  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-reactid]'));

  if (nodes.length) {
    nodes.forEach(function (n) {
      var randHex = '#' + ('00000' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6);
      n.style.border = 'solid 1px ' + randHex;
    });
    return 'YAY!!! This page uses react.js. There are ' + nodes.length + ' DOM node controlled by react.';
  } else {
    return 'BOO!! This page does not use react.js.';
  }
}

highlightReact();
