document.getElementById('payment-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Disable the submit button
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerText = 'Processing...';

    const cardholderName = document.getElementById('cardholder-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expirationDate = document.getElementById('expiration-date').value;
    const cvv = document.getElementById('cvv').value;

    // Simulate a payment process (you can replace this with actual API integration, e.g., Stripe or PayPal)
    const paymentStatus = document.getElementById('payment-status');

    try {
        const response = await processPayment(cardholderName, cardNumber, expirationDate, cvv);
        if (response.success) {
            paymentStatus.innerHTML = '<span style="color: green;">Payment Successful!</span>';
        } else {
            paymentStatus.innerHTML = '<span style="color: red;">Payment Failed. Please try again.</span>';
        }
    } catch (error) {
        paymentStatus.innerHTML = '<span style="color: red;">An error occurred. Please try again.</span>';
    }

    // Re-enable the submit button
    submitBtn.disabled = false;
    submitBtn.innerText = 'Pay Now';
});

// Mock payment processing function
async function processPayment(name, cardNumber, expirationDate, cvv) {
    // In a real-world scenario, you would call an API endpoint to process the payment here
    return new Promise((resolve) => {
        setTimeout(() => {
            // Mock response (success or failure)
            resolve({ success: Math.random() > 0.5 });
        }, 2000);
    });
}
document.getElementById('card-number').addEventListener('input', function(event) {
    const input = event.target;
    const value = input.value;

    // Allow only digits and restrict input to 16 characters
    if (!/^\d{0,16}$/.test(value)) {
        input.value = value.replace(/\D/g, '');  // Remove non-digit characters
    }

    // Display error message if the number is not exactly 16 digits
    const errorMessage = document.getElementById('error-message1');
    if (value.length !== 16) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});
document.getElementById('expiration-date').addEventListener('input', function(event) {
    const input = event.target;
    const value = input.value;

    // Allow only digits and restrict input to 4 characters
    if (!/^\d{0,4}$/.test(value)) {
        input.value = value.replace(/\D/g, '');  // Remove non-digit characters
    }

    // Display error message if the number is not exactly 4 digits
    const errorMessage = document.getElementById('error-message2');
    if (value.length !== 4) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});
document.getElementById('cvv').addEventListener('input', function(event) {
    const input = event.target;
    const value = input.value;

    // Allow only digits and restrict input to 3 characters
    if (!/^\d{0,3}$/.test(value)) {
        input.value = value.replace(/\D/g, '');  // Remove non-digit characters
    }

    // Display error message if the number is not exactly 3 digits
    const errorMessage = document.getElementById('error-message3');
    if (value.length !== 3) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});