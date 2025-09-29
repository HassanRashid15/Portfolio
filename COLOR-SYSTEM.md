# Dynamic Color System

Your portfolio now uses a dynamic color system that allows you to change colors globally by updating CSS variables in one place.

## How to Change Colors

To change the primary color throughout your entire portfolio, simply edit the CSS variables in `style/styles.css`:

```css
:root {
  /* Dynamic Color Variables - Change these values to update colors everywhere */
  --primary-color: #9333ea; /* Purple-600 equivalent - CHANGE THIS */
  --primary-color-hover: #7c3aed; /* Purple-700 for hover states */
  --primary-color-light: #a855f7; /* Purple-500 for lighter variants */
  --primary-color-dark: #6b21a8; /* Purple-800 for darker variants */
  --primary-bg-light: #f3e8ff; /* Purple-100 for light backgrounds */
  --primary-bg-hover: #e9d5ff; /* Purple-200 for hover backgrounds */
}
```

## Available Color Classes

The following utility classes are now available and will automatically use your dynamic colors:

### Text Colors
- `.text-primary` - Main primary color
- `.text-primary-hover` - Darker variant for hover states
- `.text-primary-light` - Lighter variant
- `.text-primary-dark` - Darker variant

### Background Colors
- `.bg-primary` - Main primary background
- `.bg-primary-hover` - Darker background for hover states
- `.bg-primary-light` - Light background
- `.bg-primary-hover-bg` - Light background for hover states

### Border Colors
- `.border-primary` - Primary border color

### Hover States
- `.hover:text-primary:hover` - Text color on hover
- `.hover:bg-primary:hover` - Background color on hover
- `.hover:bg-primary-hover:hover` - Light background on hover

## Examples

### Change to Blue Theme
```css
:root {
  --primary-color: #2563eb; /* Blue-600 */
  --primary-color-hover: #1d4ed8; /* Blue-700 */
  --primary-color-light: #3b82f6; /* Blue-500 */
  --primary-color-dark: #1e40af; /* Blue-800 */
  --primary-bg-light: #dbeafe; /* Blue-100 */
  --primary-bg-hover: #bfdbfe; /* Blue-200 */
}
```

### Change to Green Theme
```css
:root {
  --primary-color: #059669; /* Emerald-600 */
  --primary-color-hover: #047857; /* Emerald-700 */
  --primary-color-light: #10b981; /* Emerald-500 */
  --primary-color-dark: #065f46; /* Emerald-800 */
  --primary-bg-light: #d1fae5; /* Emerald-100 */
  --primary-bg-hover: #a7f3d0; /* Emerald-200 */
}
```

### Change to Red Theme
```css
:root {
  --primary-color: #dc2626; /* Red-600 */
  --primary-color-hover: #b91c1c; /* Red-700 */
  --primary-color-light: #ef4444; /* Red-500 */
  --primary-color-dark: #991b1b; /* Red-800 */
  --primary-bg-light: #fee2e2; /* Red-100 */
  --primary-bg-hover: #fecaca; /* Red-200 */
}
```

## What Was Updated

✅ **CSS Variables**: Added dynamic color variables to `style/styles.css`
✅ **Utility Classes**: Created comprehensive utility classes that use CSS variables
✅ **HTML Files**: Replaced all hardcoded purple color classes with dynamic equivalents
✅ **JavaScript Files**: Updated all hardcoded colors in JS files to use dynamic classes
✅ **CSS Components**: Updated all hardcoded purple colors in CSS to use variables
✅ **Responsive Styles**: Updated all media query styles to use variables
✅ **Active & Hover States**: All interactive states now use dynamic colors

## Files Modified

- `style/styles.css` - Added CSS variables and comprehensive utility classes
- `index.html` - Updated all color classes (3 changes)
- `about.html` - Updated color classes (1 change)
- `projects.html` - Updated color classes (1 change)
- `project-detail.html` - Updated color classes (2 changes)
- `contact.html` - Updated color classes (3 changes)
- `javascript/index.js` - Updated all hardcoded colors (33 changes)
- `javascript/project-data.js` - Updated all hardcoded colors (32 changes)
- `javascript/projects.js` - Updated all hardcoded colors (11 changes)
- `javascript/project-detail.js` - Updated all hardcoded colors (2 changes)

**Total: 88+ color instances updated across 9 files!**

Now you can change your entire portfolio's color scheme by simply updating the CSS variables in one place! 🎨
