/*!
 * Dejustinizator (https://github.com/zdroid/dejustinizator)
 * Licensed under the MIT License.
 */

'use strict';

{
  // Handle "Biebered" text
  function handle(text) {

    // Words to be replaced
    let searches = [
      /\bJustin Bieber/i,
      /JustinBieber/i
    ];

    // Replacements
    let replacements = [
      'Little crazy pink pony',
      'FlyingCyanicTurtle'
    ];
    let value = text.nodeValue;

    // Replacing loop
    for (let i = 0; i < searches.length; i++) {
      value = value.replace(searches[i], replacements[i]);
    }

    text.nodeValue = value;
  }

  // "Unbieber" the text
  function unbieber(node) {
    let child;
    let next;

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

      // Just in case
      default:
        break;
    }
  }

  // Invoke "unbiebering"
  unbieber(document);
}
