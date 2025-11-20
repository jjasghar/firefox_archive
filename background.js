// Use browser API if available (Firefox), otherwise fall back to chrome (Chrome/Safari)
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

// Function to create context menu item
function createContextMenu() {
  browserAPI.contextMenus.create({
    id: "archive-link",
    title: "Open in Archive.ph",
    contexts: ["link"]
  }).catch(() => {
    // Menu item already exists, ignore error
  });
}

// Create context menu item when extension is installed
browserAPI.runtime.onInstalled.addListener(() => {
  createContextMenu();
});

// Also create on startup in case it wasn't created (for Firefox)
if (browserAPI.runtime.onStartup) {
  browserAPI.runtime.onStartup.addListener(() => {
    createContextMenu();
  });
}

// Handle context menu clicks
browserAPI.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "archive-link" && info.linkUrl) {
    // Construct the archive.ph URL by prepending the archive.ph domain
    const archiveUrl = `https://archive.ph/${info.linkUrl}`;
    
    // Open in a new tab
    browserAPI.tabs.create({
      url: archiveUrl,
      active: true
    });
  }
});

