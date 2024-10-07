document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.menu-item');

    items.forEach((item) => {
        item.addEventListener('click', function() {
            // Toggle the 'expanded' class to expand/collapse
            item.classList.toggle('expanded');

            // Collapse other expanded items
            items.forEach((otherItem) => {
                if (item !== otherItem && otherItem.classList.contains('expanded')) {
                    otherItem.classList.remove('expanded');
                }
            });
        });
    });
});
