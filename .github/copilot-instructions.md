# Copilot Instructions - Vaiswanara.com GitHub Pages Site

## Project Overview
This is a backup/alternate website for vaiswanara.com hosted on GitHub Pages. It provides access to Vedic astrology course materials (videos, lectures) in multiple languages (Kannada, Telugu, English) when the main site is unavailable.

## Architecture & Data Flow

### Core Components
- **Static Pages**: `index.html`, `blog.html`, `about.html`, `donate.html`, `epata.html` - All share the same navigation structure and styling
- **Data Source**: `links.txt` - CSV file containing playlist/course metadata (Playlist name, Title, YouTube ID, Google Drive link)
- **Script**: `script.js` - Single-page data binding logic that fetches and displays course content
- **Styling**: `style.css` - Responsive design for mobile and desktop

### Data Processing Pattern
[script.js](script.js#L1-L30) implements a fetch-and-filter workflow:
1. Fetches `links.txt` as CSV (comma-separated: Playlist | Title | YouTube_ID | PDF_link)
2. Parses rows and extracts unique playlist names
3. Populates dropdown with playlist options
4. On selection, filters rows and renders HTML table with video/PDF links

### Key Validation Logic
[script.js](script.js#L21) validates YouTube video IDs using regex `/^[a-zA-Z0-9_-]{11}$/` - must be exactly 11 alphanumeric/dash characters. Invalid IDs skip video link generation.

## Critical Patterns

### Navigation & Layout
- All HTML pages use identical navbar: Home > My Blog > About > e-PATA > Donate
- Embedded styles in each HTML file (not just external CSS) for logo, nav, content layout
- Responsive breakpoint at 600px for mobile optimization

### links.txt Format
```
Playlist, Tittle, YouTube_Vidoe_ID, google_doc_link
JYOTISHA(ಕನ್ನದ)-2025,01: Course Introduction,QSoXOqu8Z8E,https://drive.google.com/...
```
- Header row is skipped in parsing (`.slice(1)`)
- "none" string in PDF link column = no PDF link shown
- Empty or invalid YouTube IDs result in no video link
- Supports multilingual playlist names (Kannada, Telugu, English)

### Styling Conventions
- Centralized layouts: buttons, dropdowns, tables use `margin: 0 auto` for centering
- Consistent color scheme: links `#007bff`, borders `#ddd`, hover state adds underline
- Table styling: alternating row colors with `nth-child(even)`, hover highlight
- Left-align first column for readability (`td:first-child { text-align: left }`)

## Development Workflow

### Adding New Course Content
1. Edit [links.txt](links.txt) - append new rows with format: `PlaylistName,Title,YouTubeID,DriveLink`
2. No code changes needed - JavaScript dynamically populates dropdowns from this file
3. Validate YouTube IDs are exactly 11 characters; use "none" for missing PDFs

### Creating New Pages
- Copy structure from existing HTML files (nav, logo, styling)
- Include `<script src="script.js"></script>` and `<link rel="stylesheet" href="style.css">`
- Update `<title>` and page-specific content within `.content` div

### Testing
- Use browser console to check fetch errors: `console.error` catches CSV loading failures
- Validate table rendering after dropdown selection
- Test responsive layout at 600px breakpoint (Chrome DevTools)

## Notes for AI Agents
- **No build step**: Static HTML served directly by GitHub Pages
- **External dependencies**: Google Drive links and YouTube embeds - validate URLs are accessible
- **CSV vulnerability**: Current `.split(',')` is naive - won't handle commas within quoted fields (low risk given simple data)
- **Language support**: Already multilingual - maintain character encoding (UTF-8) in links.txt
