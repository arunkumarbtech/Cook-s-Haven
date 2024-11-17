const bankNameSelect = document.getElementById('bank-name');
const otherBankContainer = document.getElementById('other-bank-name-container');
const otherBankInput = document.getElementById('other-bank-name');

bankNameSelect.addEventListener('change', function () {
    if (this.value === 'Other') {
        otherBankContainer.style.display = 'block';
        otherBankInput.required = true;
    } else {
        otherBankContainer.style.display = 'none';
        otherBankInput.required = false;
    }
});



document.getElementById('others').addEventListener('change', function() {
    var otherCuisineContainer = document.getElementById('other-cuisine-container');
    if (this.checked) {
        otherCuisineContainer.style.display = 'block'; // Show the input field when 'Others' is checked
    } else {
        otherCuisineContainer.style.display = 'none'; // Hide the input field when 'Others' is unchecked
    }
});




const steps = document.querySelectorAll('.form-step');
let currentStep = 0; // Start at Step 1

// Helper Functions
function showStep(index) {
    steps.forEach((step, i) => {
        if (i === index) {
            step.classList.add('active');
            step.classList.remove('previous');
        } else if (i < index) {
            step.classList.add('previous'); // Move off-screen to the left
            step.classList.remove('active');
        } else {
            step.classList.remove('active', 'previous'); // Move off-screen to the right
        }
    });
    
}


// Initial State
showStep(currentStep);

// Event Listeners for Buttons
document.querySelectorAll('button[id^="next-"]').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const form = steps[currentStep].querySelector('form');
        if (form.checkValidity()) {
            currentStep++;
            showStep(currentStep);
        } else {
            form.reportValidity(); // Highlight missing fields
        }
    });
});

document.querySelectorAll('button[id^="back-"]').forEach((btn) => {
    btn.addEventListener('click', () => {
        currentStep--;
        showStep(currentStep);
    });
});

document.getElementById('submit')?.addEventListener('click', () => {
    alert('Form submitted successfully!');
    // Handle form submission logic here
});