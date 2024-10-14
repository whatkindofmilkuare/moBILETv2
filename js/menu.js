function openMenu() {
    const sideMenu = document.getElementById("sideMenu");
    const mainContent = document.getElementById("mainContent");
    const content = document.getElementById('content');
    const copiedContent = document.getElementById('copied_content');

    // Sprawdzanie, czy elementy istnieją
    if (sideMenu) {
        sideMenu.style.width = "85%";
    }
    if (mainContent) {
        mainContent.style.marginLeft = "85%";
    }
    if (content) {
        if (content.style.cssText) {
            content.style.cssText = content.style.cssText.replace(/display\s*:\s*[^;]+;/, 'display: none;');
        } else {
            content.style.display = 'none';
        }
    }
    if (copiedContent) {
        copiedContent.style.display = 'block';
    }
}

function closeMenu() {
    const sideMenu = document.getElementById("sideMenu");
    const mainContent = document.getElementById("mainContent");
    const content = document.getElementById('content');
    const copiedContent = document.getElementById('copied_content');

    // Sprawdzanie, czy elementy istnieją
    if (sideMenu) {
        sideMenu.style.width = "0";
    }
    if (mainContent) {
        mainContent.style.marginLeft = "0";
    }
    if (content) {
        if (content.style.cssText) {
            content.style.cssText = content.style.cssText.replace(/display\s*:\s*[^;]+;/, 'display: block;');
        } else {
            content.style.display = 'none';
        }
    }
    if (copiedContent) {
        copiedContent.style.display = 'none';
    }
}
