// Part 2: JavaScript Functions

// Global variable
let globalCounter = 0;

// Function with parameters and return value
function calculateRectangleArea(width, height) {
    // Local variables
    const area = width * height;
    return area;
}

// Function with default parameters
function greetUser(name = "Guest") {
    return `Hello, ${name}!`;
}

// Function demonstrating scope
function scopeDemo() {
    // Local variable with same name as global
    let globalCounter = 100;
    console.log("Inside function:", globalCounter);
}

// Function to calculate area and display result
function calculateArea() {
    const width = Math.floor(Math.random() * 10) + 1;
    const height = Math.floor(Math.random() * 10) + 1;
    const area = calculateRectangleArea(width, height);
    
    document.getElementById('output').innerHTML = `
        <p>Rectangle dimensions: ${width} x ${height}</p>
        <p>Area: ${area}</p>
    `;
}

// Function for string manipulation
function stringManipulation() {
    const name = prompt("Enter your name:", "John");
    const greeting = greetUser(name);
    
    document.getElementById('output').innerHTML = `
        <p>${greeting}</p>
        <p>Your name in uppercase: ${name.toUpperCase()}</p>
        <p>Your name length: ${name.length}</p>
    `;
}

// Function to demonstrate scope
function showScopeDemo() {
    globalCounter++;
    document.getElementById('output').innerHTML = `
        <p>Global counter: ${globalCounter}</p>
    `;
    
    // Call function that has a local variable with the same name
    scopeDemo();
    
    document.getElementById('output').innerHTML += `
        <p>Global counter after function call: ${globalCounter}</p>
        <p>The function could not change the global counter because it declared its own local variable with the same name.</p>
    `;
}

// Part 3: Combining CSS & JavaScript

// Function to flip card
function flipCard() {
    const card = document.getElementById('card');
    card.classList.toggle('flipped');
}

// Function to show modal
function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');
}

// Function to hide modal
function hideModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}

// Function to start animation
function startAnimation() {
    const boxes = document.querySelectorAll('.animated-box');
    boxes.forEach(box => {
        box.style.animation = 'none';
        setTimeout(() => {
            box.style.animation = '';
        }, 10);
    });
}

// Initialize page with some animations
document.addEventListener('DOMContentLoaded', function() {
    // Add slide-in animation to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.animation = `slideIn 0.5s ease-out ${index * 0.2}s forwards`;
        section.style.opacity = 0;
    });
});