// Toggle content visibility based on button clicks
function toggleContent(contentId) {
    // Get all content boxes
    const contentBoxes = document.querySelectorAll('.content-box');
    
    // Hide all content boxes
    contentBoxes.forEach(box => {
        box.style.display = 'none';
    });

    // Show the selected content box
    const contentBox = document.getElementById(contentId);
    if (contentBox) {
        contentBox.style.display = contentBox.style.display === 'block' ? 'none' : 'block';
    }
}
