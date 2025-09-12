const fs = require('fs');

// Read the file
let content = fs.readFileSync('javascript/project-data.js', 'utf8');

// Remove all remaining overlay content patterns
const patterns = [
    // Remove grid layouts
    /                    <div class="grid grid-cols-7 gap-1">[\s\S]*?                    <\/div>/g,
    /                    <div class="grid grid-cols-2 gap-2">[\s\S]*?                    <\/div>/g,
    /                    <div class="grid grid-cols-3 gap-2">[\s\S]*?                    <\/div>/g,
    
    // Remove space-y-2 divs
    /                    <div class="space-y-2">[\s\S]*?                    <\/div>/g,
    
    // Remove flex space-x-2 divs
    /                    <div class="flex space-x-2">[\s\S]*?                    <\/div>/g,
    
    // Remove individual overlay elements
    /                    <div class="bg-gray-100 rounded p-2 mb-2">[\s\S]*?                    <\/div>/g,
    /                    <div class="w-full h-20 bg-gray-200 rounded relative">[\s\S]*?                    <\/div>/g,
    /                    <div class="flex items-center space-x-2 p-2 bg-orange-50 rounded">[\s\S]*?                    <\/div>/g,
    /                    <div class="flex items-center space-x-2 p-2 bg-purple-50 rounded">[\s\S]*?                    <\/div>/g,
    /                    <div class="p-2 bg-gray-50 rounded">[\s\S]*?                    <\/div>/g,
    /                    <div class="p-2 bg-blue-50 rounded">[\s\S]*?                    <\/div>/g,
    /                    <div class="p-2 bg-green-50 rounded">[\s\S]*?                    <\/div>/g,
    /                    <div class="p-2 bg-yellow-50 rounded">[\s\S]*?                    <\/div>/g,
    /                    <div class="p-2 bg-purple-50 rounded">[\s\S]*?                    <\/div>/g,
    /                    <div class="p-2 bg-orange-50 rounded">[\s\S]*?                    <\/div>/g,
    /                    <div class="p-2 bg-blue-50 rounded">[\s\S]*?                    <\/div>/g,
    
    // Remove individual items
    /                    <div class="h-6 bg-purple-100 rounded flex items-center justify-center">[\s\S]*?                    <\/div>/g,
    /                    <div class="h-6 bg-gray-100 rounded"><\/div>/g,
    /                    <div class="h-6 bg-gray-100 rounded"><\/div>/g,
    /                    <div class="w-6 h-6 bg-gray-200 rounded-full"><\/div>/g,
    /                    <div class="w-8 h-8 bg-gray-200 rounded"><\/div>/g,
    /                    <div class="w-8 h-8 bg-blue-500 rounded-full"><\/div>/g,
    /                    <div class="h-2 bg-gray-200 rounded-full">[\s\S]*?                    <\/div>/g,
    
    // Remove spans and text elements
    /                    <span class="text-xs">[\s\S]*?<\/span>/g,
    /                    <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">[\s\S]*?<\/span>/g,
    /                    <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">[\s\S]*?<\/span>/g,
    /                    <p class="text-xs text-gray-600">[\s\S]*?<\/p>/g,
    /                    <p class="text-xs font-medium">[\s\S]*?<\/p>/g,
    /                    <p class="text-xs text-gray-500">[\s\S]*?<\/p>/g,
    /                    <p class="text-xs text-blue-600">[\s\S]*?<\/p>/g,
    /                    <p class="text-xs text-green-600">[\s\S]*?<\/p>/g,
    /                    <p class="text-xs text-purple-600">[\s\S]*?<\/p>/g,
    /                    <p class="text-xs text-yellow-600">[\s\S]*?<\/p>/g,
    /                    <p class="text-xs text-orange-600">[\s\S]*?<\/p>/g,
    /                    <p class="text-lg font-bold text-blue-800">[\s\S]*?<\/p>/g,
    /                    <p class="text-lg font-bold text-green-800">[\s\S]*?<\/p>/g,
    /                    <p class="text-lg font-bold text-purple-800">[\s\S]*?<\/p>/g,
    /                    <p class="text-lg font-bold text-yellow-800">[\s\S]*?<\/p>/g,
    /                    <p class="text-lg font-bold text-orange-800">[\s\S]*?<\/p>/g,
    
    // Remove flex items-center justify-between
    /                    <div class="flex items-center justify-between">[\s\S]*?                    <\/div>/g,
    
    // Remove any remaining empty lines with just spaces
    /^\s*$/gm
];

// Apply all patterns
patterns.forEach(pattern => {
    content = content.replace(pattern, '');
});

// Clean up multiple empty lines
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

// Write the file back
fs.writeFileSync('javascript/project-data.js', content);

console.log('All overlay content removed successfully!');
