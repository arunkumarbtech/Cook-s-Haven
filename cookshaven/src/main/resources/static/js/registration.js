// Optional JavaScript for input animation (if more advanced effects are needed)
const inputs = document.querySelectorAll('input, select');
inputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.style.borderColor = '#4CAF50';
        this.style.boxShadow = '0 0 10px #4CAF50';
    });

    input.addEventListener('blur', function () {
        this.style.borderColor = '#ccc';
        this.style.boxShadow = 'none';
    });
});
