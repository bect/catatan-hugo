# Catatan Hugo

![Theme Screenshot](https://raw.githubusercontent.com/bect/catatan-hugo/master/images/screenshot.png)

A vintage, archival Hugo theme with a gritty typewriter aesthetic and a built-in Web Worker-powered search.

## Features
- Minimalist typewriter typography.
- Fully local, client-side search (Web Worker).
- Dynamic SVG coffee stain and ink distortion filters.
- Responsive, single-column archival layout.

## Requirements
- Hugo Extended v0.165.0+

## Installation

### Method 1: Hugo Modules (Recommended)
1. Initialize Hugo modules:
   ```bash
   hugo mod init github.com/your-username/your-repo
   ```
2. Add the module to your `hugo.yaml`:
   ```yaml
   module:
     imports:
       - path: github.com/bect/catatan-hugo
   ```

### Method 2: Git Submodule
1. Clone the theme as a submodule:
   ```bash
   git submodule add https://github.com/bect/catatan-hugo.git themes/catatan-hugo
   ```
2. Enable the theme in your `hugo.yaml`:
   ```yaml
   theme: "catatan-hugo"
   ```

## Configuration

**Enable Search:**
To make the search feature work, configure Hugo to output a JSON index for the homepage. Add this to your `hugo.yaml`:
```yaml
outputs:
  home: ["HTML", "JSON"]
```

## Content Structure

Catatan Hugo dynamically adapts to your content. You are not restricted to predefined sections. 
Create any folder you want (e.g., `/dossier` or `/portfolio`) inside the `content/` directory. Add an `_index.md`, and the theme will instantly render the layout and resolve any images you drop into that folder.

**Homepage Highlights:**
Add `featured: true` to the front matter of any post, and it will automatically be pulled to the front page.

## Running the Example Site
```bash
cd exampleSite
hugo server --themesDir ../..
```
*(Note: The `exampleSite` directory uses placeholder images from Wikimedia Commons to demonstrate the archival aesthetic.)*
