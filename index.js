function scrolltop() {
    let a = window.document;
    a = location.href = '#home';
}
let contact = document.getElementById('contactForm');
contact.addEventListener('submit', function (e) {
    e.preventDefault();
    alert(`Sorry Request cannot be accepted due to some technical errors`);
})


/*zoom img*/
const zoomImages = document.querySelectorAll('.zoomable-image');

  zoomImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
      image.classList.add('zoomed');
    });

    image.addEventListener('mouseleave', () => {
      image.classList.remove('zoomed');
    });
  });


  /* cv / Resume*/
 
const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', () => {
  window.open('resources/my_cv/CV_SHREYA_RAJESH_TARE.pdf', '_blank');
});