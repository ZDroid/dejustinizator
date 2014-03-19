/*!
 * Justin to pony (http://git.io/justin-to-pony)
 * Licensed under the MIT License.
 */

(function () {
  'use strict';

  // Handle "Biebered" text
  function handle(text) {
    var searches = [
      /\bJustin Bieber\b/i,
      /\bBieber\b/i
    ];
    var replacements = [
      'Little crazy pink pony',
      'Pepper pony'
    ];
    var value = text.nodeValue;

    // Replacing loop
    for (var i = 0; i < searches.length; i++) {
      value = value.replace(searches[i], replacements[i]);
    }

    text.nodeValue = value;
  }

  // "Unbieber" the text
  function unbieber(node) {
    var child;
    var next;

    switch (node.nodeType) {
      // Element
      case 1:
      // Document
      case 9:
      // Document fragment
      case 11:
        child = node.firstChild;
        while (child) {
          next = child.nextSibling;
          unbieber(child);
          child = next;
        }
        break;

      // Text node
      case 3:
        handle(node);
        break;
    }
  }

  // Invoke "unbiebering"
  unbieber(document);
})();
