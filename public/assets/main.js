const btn = document.querySelector('#contact-btn');

btn.addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth',
    });
});
