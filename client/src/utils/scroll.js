export const smoothScrollToMenu = e => {
    e.preventDefault();
    if (e.target.textContent.toLowerCase() === 'most popular') {
        window.scrollTo({
            top: document.getElementById('menu').offsetTop,
            behavior: 'smooth',
        });
        document.getElementById('popular-btn').click();
    } else if (e.target.textContent.toLowerCase() === 'menu' || e.target.textContent.toLowerCase() === '') {
        window.scrollTo({
            top: document.getElementById('menu').offsetTop,
            behavior: 'smooth',
        });
    } 
}