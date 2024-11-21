/* Filtre Javascript */
function sortImages(order) {
  const imageContainers = document.querySelectorAll('.image-container');
  const images = [];
  imageContainers.forEach(container => {
    images.push(container.querySelector('img'));
  });
  images.sort((a, b) => {
    if (order === 'asc') {
      if (a.alt < b.alt) {
        return -1;
      }
      if (a.alt > b.alt) {
        return 1;
      }
      return 0;
    } else {
      if (a.alt < b.alt) {
        return 1;
      }
      if (a.alt > b.alt) {
        return -1;
      }
      return 0;
    }
  });
  const imageContainer = document.getElementById('image-container');
  imageContainer.innerHTML = '';
  images.forEach(image => {
    const container = document.createElement('div');
    container.className = 'image-container';
    container.appendChild(image);
    imageContainer.appendChild(container);
  });
}
