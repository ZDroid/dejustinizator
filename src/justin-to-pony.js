/*! Justin to pony | MIT License | http://git.io/justin-to-pony */

// Handle Biebered text
function handleText(textNode) {
  'use strict';

  var val = textNode.nodeValue;
  val = val.replace(/\bJustin Bieber\b/g, "Little crazy pink pony")
  val = val.replace(/\bJustin bieber\b/g, "Little crazy pink pony");
  val = val.replace(/\bjustin bieber\b/g, "little crazy pink pony");
  // For pepper lovers
  val = val.replace(/\bBieber\b/g, "pony pepper");
  
  textNode.nodeValue = val;
}

// Walk it all around the world
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