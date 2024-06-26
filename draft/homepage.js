// Fetch seminar titles from CSV file
function fetchSeminarTitles() {
    fetch('seminar.csv')
        .then(response => response.text())
        .then(data => {
            const seminarTitles = data.split('\n').map(row => row.split(',')[0]);
            updateSeminarTitles(seminarTitles);
        })
        .catch(error => {
            console.error('Error fetching seminar titles:', error);
        });
}

// Update seminar titles dynamically
function updateSeminarTitles(titles) {
    const seminarTitleElement = document.querySelector('#PastSeminarTitle'); // Updated selector to target the element with id="PastSeminarTitle"
    let index = 0;

    setInterval(() => {
        seminarTitleElement.textContent = titles[index];
        index = (index + 1) % titles.length;
    }, 10000);
}

document.querySelectorAll('.buttonFilledJapanese').forEach(button => {
    // Store the original text and the hover text
    const originalText = button.querySelector('span').innerText;
    const hoverText = button.getAttribute('data-hover');

    button.addEventListener('mouseover', () => {
        button.querySelector('span').style.transition = 'opacity 0.25s';
        button.querySelector('span').style.opacity = 0;
        setTimeout(() => {
            button.querySelector('span').innerText = hoverText;
            button.querySelector('span').style.opacity = 1;
        }, 250); // Half of the transition time to ensure smooth fade in after fade out
    });
    button.addEventListener('mouseout', () => {
        button.querySelector('span').style.transition = 'opacity 0.25s';
        button.querySelector('span').style.opacity = 0;
        setTimeout(() => {
            button.querySelector('span').innerText = originalText;
            button.querySelector('span').style.opacity = 1;
        }, 250); // Half of the transition time to ensure smooth fade in after fade out
    });
});

// document.addEventListener('scroll', function() {
//     const seminarElement = document.querySelector('.Seminar');
//     if (!seminarElement) return;

//     const scrollPercentage = getScrollPercentage();
//     const gradientStartColor = '#778899'; // Start color of the gradient
//     const gradientEndColor = '#4B0082'; // End color of the gradient

//     // Apply the gradient background based on scroll position
//     seminarElement.style.backgroundImage = `linear-gradient(to bottom, ${gradientStartColor}, ${gradientEndColor} ${scrollPercentage}%)`;
// });

// function getScrollPercentage() {
//     const scrollProgress = window.scrollY;
//     const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     return (scrollProgress / height) * 100;
// }

// Call fetchSeminarTitles function when the page loads
window.addEventListener('load', fetchSeminarTitles);
