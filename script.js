document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();

              const targetId = this.getAttribute('href');
              const targetElement = document.querySelector(targetId);

              if (targetElement) {
                  const offset = targetElement.offsetTop - (window.innerHeight - targetElement.offsetHeight) / 2;

                  window.scrollTo({
                      top: offset,
                      behavior: 'smooth'
                  });
              }
          });
      });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const productLink = document.querySelector('#priceNavLink'); // Select the PRODUCTS link in the navbar
    const productSection = document.getElementById('price'); // Select the "price" section
    let navbarHeight = document.querySelector('.head').offsetHeight;
    let offset = 50; // Initial offset distance

    // Function to smooth scroll to product section with customizable offset
    const scrollToProduct = () => {
        const offsetTop = productSection.offsetTop - navbarHeight - offset;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    };

    // Event listener for clicking on the PRODUCTS link in the navbar
    productLink.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToProduct();
    });

    // Function to update offset distance
    const updateOffset = (newOffset) => {
        offset = newOffset;
        scrollToProduct(); // Scroll to product section with updated offset
    };

    // Example: Update offset distance to 150 when needed
    // updateOffset(150);
});


document.addEventListener("DOMContentLoaded", function() {
    const ccExpirationInput = document.getElementById('cc-expiration');

    ccExpirationInput.addEventListener('input', function(e) {
        const value = ccExpirationInput.value;
        const selectionStart = ccExpirationInput.selectionStart;

        // Check if the backspace key is pressed and the cursor is right after the "/"
        if (e.inputType === 'deleteContentBackward' && value[selectionStart - 1] === '/') {
            // Delete the "/"
            ccExpirationInput.value = value.slice(0, selectionStart - 1) + value.slice(selectionStart);
            // Adjust the cursor position
            ccExpirationInput.setSelectionRange(selectionStart - 1, selectionStart - 1);
        } else if (value.length === 2 && !value.includes('/')) {
            // Automatically add "/" after the user types the second digit of the month
            ccExpirationInput.value = value + '/';
        }
    });
});



