// Main JavaScript for homepage
document.addEventListener('DOMContentLoaded', function() {
  console.log("Psychology Exam Prep loaded!");
  
  // Add animation to year cards
  const yearCards = document.querySelectorAll('.year-card');
  yearCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('animate__animated', 'animate__fadeInUp');
  });
});