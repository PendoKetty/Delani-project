const serviceItems = document.querySelectorAll('.what-we-do-item');

// Add event listeners for mouse enter and leave events
serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hovered'); 
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hovered'); 
    });
});