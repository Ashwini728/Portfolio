document.querySelector('.read-more-btn').addEventListener('click', function () {
    const moreText = document.querySelector('.more-text');
    const btn = this;
    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'inline';
        btn.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        btn.textContent = 'Read More';
    }
});
function toggleDescription(button) {
    var portfolioItem = button.closest('.portfolio-item'); // Get the closest portfolio item container
    var shortDescription = portfolioItem.querySelector('.short-description');
    var fullDescription = portfolioItem.querySelector('.full-description');

    // Check if the full description is hidden or visible
    if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
        fullDescription.style.display = 'block';
        shortDescription.style.display = 'none';
        button.textContent = 'Read Less';
    } else {
        fullDescription.style.display = 'none';
        shortDescription.style.display = 'block';
        button.textContent = 'Read More';
    }
}


