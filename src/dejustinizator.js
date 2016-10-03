/*!
 * Dejustinizator (https://github.com/zdroid/dejustinizator)
 * Licensed under the MIT License.
 */

'use strict';

{
  // Handle "biebered" text
  function handle(text) {
    // Words to be replaced
    let searches = [
      /\bjustin bieber/i,
      /justinbieber/i
    ];

    // Replacements
    let replacements = [
      'Little crazy pink pony',
      'FlyingCyanicTurtle'
    ];
    let value = text.nodeValue;

    // Replacing loop
    searches.forEach((element, index) => {
      value = value.replace(element, replacements[index]);
    });

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

      // Just in case (sorry for a horrible pun)
      default:
        break;
    }
  }

  // Invoke "unbiebering"
  unbieber(document);
}
