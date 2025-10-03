const loadBar = document.getElementById('line');

window.addEventListener('scroll', function() {

        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const scrollRange = 2100; //pixels at which width changes
        const minWidth = 1; //percent
        const maxWidth = 100; //percent

        let newWidth = minWidth + (scrollPosition / scrollRange) * (maxWidth - minWidth);

        newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));

        loadBar.style.width = newWidth + '%';
});