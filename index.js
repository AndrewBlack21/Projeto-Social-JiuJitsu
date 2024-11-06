function toggleText() {
    const moreText = document.querySelector('.more-text');
    const btnText = document.querySelector('.txt-more');

    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        btnText.textContent = 'Ver menos';
    } else {
        moreText.style.display = 'none';
        btnText.textContent = 'Saiba mais!';
    }
}

function toggleText2() {
    const moreText = document.querySelector('.more-text2');
    const btnText = document.querySelector('.txt-more2');

    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        btnText.textContent = 'Ver menos';
    } else {
        moreText.style.display = 'none';
        btnText.textContent = 'Saiba mais!';
    }
}