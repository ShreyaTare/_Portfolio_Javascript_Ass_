/*zoom in img*/
const zoomImage = document.getElementById('zoomImage');

zoomImage.addEventListener('mouseenter', () => {
  zoomImage.classList.add('zoomed');
});

zoomImage.addEventListener('mouseleave', () => {
  zoomImage.classList.remove('zoomed');
});
/*
const zoomableImage = document.querySelectorAll('.zoomable-image');
zoomableImage.forEach(image => {
  new ImageZoom(image);
});*/
/*mouse over img */
const projectImages = document.querySelectorAll('.project img');

projectImages.forEach(image => {
  image.addEventListener('click', () => {
    const projectDetails = image.parentNode.querySelector('.project-details');
    projectDetails.style.visibility = 'visible';
    projectDetails.style.opacity = '1';
    
  });
});

/*connect with me linkdin */
const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    const link = icon.dataset.link;
    if (link) {
      window.location.href = link;
    }
  });
});

