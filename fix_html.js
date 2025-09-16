const fs = require('fs');

// Read the file
let content = fs.readFileSync('javascript/project-data.js', 'utf8');

// Fix malformed img tags where attributes are on separate lines
// Pattern: <img src="..." />\n                     alt="..." \n                     class="...">
// Should be: <img src="..." \n                     alt="..." \n                     class="...">

content = content.replace(
    /<img src="([^"]+)" \/>\s+alt="([^"]+)"\s+class="([^"]+)">/g,
    '<img src="$1" \n                     alt="$2" \n                     class="$3">'
);

// Fix any remaining malformed img tags
content = content.replace(
    /<img src="([^"]+)" \/>\s+alt="([^"]+)"\s+class="([^"]+)">/g,
    '<img src="$1" \n                     alt="$2" \n                     class="$3">'
);

// Write the file back
fs.writeFileSync('javascript/project-data.js', content);

console.log('HTML malformation fixed successfully!');




