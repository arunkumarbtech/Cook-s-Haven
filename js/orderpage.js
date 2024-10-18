function imgScrollRight(gallery, rightButton, leftButton) {
    const scrollStep = 200; // Adjust this value based on image width
    const galleryWidth = gallery.scrollWidth; // Total width of the gallery content
    const containerWidth = gallery.offsetParent.offsetWidth; // Visible width of the gallery container
    let scrollAmount = parseInt(gallery.getAttribute('data-scroll-amount')) || 0;

    if (scrollAmount < galleryWidth - containerWidth) {
        scrollAmount += scrollStep;
        gallery.style.transform = `translateX(-${scrollAmount}px)`;
        gallery.setAttribute('data-scroll-amount', scrollAmount);
        updateButtons(gallery, rightButton, leftButton);
    }
}

function imgScrollLeft(gallery, rightButton, leftButton) {
    const scrollStep = 200; // Adjust this value based on image width
    let scrollAmount = parseInt(gallery.getAttribute('data-scroll-amount')) || 0;

    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    gallery.style.transform = `translateX(-${scrollAmount}px)`;
    gallery.setAttribute('data-scroll-amount', scrollAmount);
    updateButtons(gallery, rightButton, leftButton);
}

function updateButtons(gallery, rightButton, leftButton) {
    const galleryWidth = gallery.scrollWidth;
    const containerWidth = gallery.offsetParent.offsetWidth;
    let scrollAmount = parseInt(gallery.getAttribute('data-scroll-amount')) || 0;

    // Disable right button if we're at the end
    if (scrollAmount >= galleryWidth - containerWidth) {
        rightButton.disabled = true;
    } else {
        rightButton.disabled = false;
    }

    // Disable left button if we're at the start
    if (scrollAmount <= 0) {
        leftButton.disabled = true;
    } else {
        leftButton.disabled = false;
    }
}

// Initial button state update for each gallery
document.querySelectorAll('.gallery-container').forEach(container => {
    const gallery = container.querySelector('.flex');
    const rightButton = container.querySelector('.right-nav');
    const leftButton = container.querySelector('.left-nav');

    // Attach event listeners to buttons
    rightButton.addEventListener('click', () => imgScrollRight(gallery, rightButton, leftButton));
    leftButton.addEventListener('click', () => imgScrollLeft(gallery, rightButton, leftButton));

    // Initialize button states
    updateButtons(gallery, rightButton, leftButton);
});


const scrollcontainer = document.querySelectorAll(".cart-list");
for (const item of scrollcontainer) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}

// Get the input field and button
const mobileNumberInput = document.getElementById('phonenumber');
const getOtpBtn = document.getElementById('getotp');

// Function to enable or disable the button based on input length
mobileNumberInput.addEventListener('input', function () {
    const isValid = mobileNumberInput.value.length === 10;
    getOtpBtn.disabled = !isValid;
});

function openLogin(){
    window.location.href = '/html/login.html';
}

