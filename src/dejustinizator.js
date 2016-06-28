/*!
 * Dejustinizator (https://github.com/ZDroid/dejustinizator)
 * Licensed under the MIT License.
 */

(function () {
  'use strict';

  // Handle "Biebered" text
  function handle(text) {

    // Words to be replaced
    var searches = [
      /\bJustin Bieber\b/i,
      /\bBieber\b/i
    ];

    // Replacements
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
      case 1:   // Element
      case 9:   // Document
      case 11:  // Document fragment
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
