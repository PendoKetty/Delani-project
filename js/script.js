const serviceItems = document.querySelectorAll('.what-we-do-item');

serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hovered'); 
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hovered'); 
    });
});