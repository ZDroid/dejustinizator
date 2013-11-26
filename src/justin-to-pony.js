/*! Justin to pony | MIT License | http://git.io/justin-to-pony */

// Handle "Biebered" text
function handleText(textNode) {
  'use strict';

  var search = [
        // Strings for search
        /\bJustin Bieber\b/i,
        /\bBieber\b/i
      ],
      replace = [
        // Replacements
        'Little crazy pink pony',
        'Pepper pony'
      ],
      val = textNode.nodeValue,
      i;

  // Replacing loop
  for (i = 0; i < search.length; i++) {
    val = val.replace(search[i], replace[i]);
  }

  textNode.nodeValue = val;
}

// Walk it all around the page
function walk(node) {
  'use strict';

  var child,
      next;

  switch(node.nodeType) {
    // Element
    case 1:
    // Document
    case 9:
    // Document fragment
    case 11:
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
    break;

    // Text node
    case 3:
      handleText(node);
    break;
  }
}

// Finally replace Justin with little crazy pink pony
walk(document.body);