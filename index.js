/*cv download */
const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', () => {
  window.open('resources/my_cv/CV_SHREYA_RAJESH_TARE.pdf', '_blank');
});


/*zoom in img*/

const zoomImages = document.querySelectorAll('.zoomable-image');

  zoomImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
      image.classList.add('zoomed');
    });

    image.addEventListener('mouseleave', () => {
      image.classList.remove('zoomed');
    });
  });
/*

/*mouse over img */
const projectImages = document.querySelectorAll('.project img');

projectImages.forEach(image => {
  image.addEventListener('click', () => {
    const projectDetails = image.parentNode.querySelector('.project-details');
    projectDetails.style.visibility = 'visible';
    projectDetails.style.opacity = '1';
    
  });
});

/*connect with me linkdin const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    const link = icon.dataset.link;
    if (link) {
      window.location.href = link;
    }
  });
}); */



const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    const link = icon.dataset.link;
    if (link) {
      window.open(link, '_blank');
    }
  });
});

