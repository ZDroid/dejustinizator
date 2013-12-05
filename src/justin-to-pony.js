/*! Justin to pony | MIT License | http://git.io/justin-to-pony */

// Handle "Biebered" text
function handleText(textNode) {
  'use strict';

  var searches = [
        /\bJustin Bieber\b/i,
        /\bBieber\b/i
      ],
      replacements = [
        'Little crazy pink pony',
        'Pepper pony'
      ],
      val = textNode.nodeValue,
      i;

  // Replacing loop
  for (i = 0; i < searches.length; i++) {
    val = val.replace(searches[i], replacements[i]);
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

// Finally replace Justin Bieber with Little crazy pink pony
walk(document.body);