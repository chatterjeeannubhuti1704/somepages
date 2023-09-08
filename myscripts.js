document.getElementById('cutleaf').style.opacity = 1;
document.getElementById('invisible').style.opacity = 0;
document.getElementById('green-house-play').style.opacity = 1;
document.getElementById('banner').style.opacity = 1;
window.addEventListener('scroll', () => {
    let val = window.scrollY;
    document.getElementById('cutleaf').style.opacity = 1;
    document.getElementById('invisible').style.opacity = 0;
    document.getElementById('green-house-play').style.opacity = 1;
    document.getElementById('banner').style.opacity = 1;
    document.getElementById('cutleaf').style.top = 55 - (val / 8) + '%';
    document.getElementById('cutleaf').style.transform = 'scale(' + (1 + val / 100) + ')';
    document.getElementById('hm').style.top = 69 - (val / 8) + '%';

    if (document.getElementById('hm').style.top <= '32%') {
        document.getElementById('cutleaf').style.opacity = 0.5;
        document.getElementById('green-house-play').style.opacity = 0;
        document.getElementById('banner').style.opacity = 0;
        document.getElementById('invisible').style.opacity = 1;
    }
});