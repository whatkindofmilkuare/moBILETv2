document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 250);
    });
});