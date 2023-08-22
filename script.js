 function highlight() {
  // Get all the bold elements within the paragraph
  const boldWords = document.querySelectorAll('p strong');

  // Change the color of bold words to green
  boldWords.forEach(word => {
    word.style.color = 'green';
  });
}

function return_normal() {
  // Get all the bold elements within the paragraph
  const boldWords = document.querySelectorAll('p strong');

  // Revert the color of bold words back to black
  boldWords.forEach(word => {
    word.style.color = 'black';
  });
}
