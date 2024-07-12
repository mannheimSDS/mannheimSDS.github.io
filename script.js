document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.right-frame a[data-src]');
    const iframe = document.getElementById('slides-frame');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const src = this.getAttribute('data-src');
            iframe.setAttribute('src', src);
        });
    });
});
