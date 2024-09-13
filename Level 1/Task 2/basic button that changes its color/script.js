const button = document.getElementById('colorButton');

button.addEventListener('click', () => {
    const currentColor = button.style.backgroundColor;
    
    // Toggle between two colors
    if (currentColor === 'rgb(52, 152, 219)') {  // #3498db in rgb
        button.style.backgroundColor = '#e74c3c';  // Change to red
    } else {
        button.style.backgroundColor = '#3498db';  // Change to blue
    }
});
