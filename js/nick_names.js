const names = [
    "moBiletv2",
    "moBILETv2",
    "mob1l3tv2",
    "m0B1L3Tv2",
    "mobIletv2"
];

// Function to update the text content of the element with id "nick_names"
function updateName() {
    // Get the current name index from the data attribute or start with 0
    let currentIndex = parseInt(document.getElementById('small_writing').getAttribute('data-index')) || 0;
    
    // Update the text content with the current name
    document.getElementById('small_writing').textContent = names[currentIndex];
    
    // Calculate the next index (circularly)
    const nextIndex = (currentIndex + 1) % names.length;
    
    // Update the data attribute with the next index
    document.getElementById('small_writing').setAttribute('data-index', nextIndex);
}

// Set an interval to update the name every 2 seconds
setInterval(updateName, 270);

// Initial call to set the first name
updateName();