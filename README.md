# Archive.ph Firefox Extension

>[!IMPORTANT]
> This is for educational purposes only. This shows how easy it is to put link to open in via the right hand click.

A Firefox extension that allows you to right-click on any link and open it via archive.ph.

## Features

- Right-click on any link to see "Open in Archive.ph" option
- Automatically opens the link in a new tab via archive.ph

## Installation

### Direct Installation (Development)

1. Open Firefox and navigate to `about:debugging`
2. Click **"This Firefox"** in the sidebar
3. Click **"Load Temporary Add-on..."** button
4. Navigate to this extension folder and select the `manifest.json` file
5. The extension will be loaded and ready to use

## Usage

1. Right-click on any link on a webpage
2. Select "Open in Archive.ph" from the context menu
3. A new tab will open with the link archived via archive.ph

## Development

This extension uses the WebExtensions API (Manifest V3) and is designed for Firefox. The code is compatible with:
- Firefox (primary target)
- Chrome/Edge (for testing, may require minor adjustments)

## Files

- `manifest.json` - Extension manifest file (WebExtensions Manifest V3 format)
- `background.js` - Background script that handles context menu clicks
- `icons/` - Extension icons
- `README.md` - This file

## Notes

- The extension requires permissions for `contextMenus` and `tabs`
- It only appears in the context menu when right-clicking on links
- The archive.ph URL format is: `https://archive.ph/<original-url>`

## License

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for details.

