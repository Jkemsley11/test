
function openLightbox(item) {
    const img = item.querySelector('img');
    const title = item.getAttribute('data-name');
    const desc = item.getAttribute('data-desc');
    const price = item.getAttribute('data-price');

    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox-name').textContent = title;
    document.getElementById('lightbox-desc').textContent = desc;
    document.getElementById('lightbox-price').textContent = price;

    // Reset flip state each time
    document.getElementById('lightboxFlip').classList.remove('flipped');
    document.getElementById('lightbox').classList.add('active');
  }

  function flipLightbox(event) {
    event.stopPropagation(); // stops click from closing the lightbox
    document.getElementById('lightboxFlip').classList.toggle('flipped');
  }

  function closeLightbox(event) {
    if (event.target === document.getElementById('lightbox') ||
        event.target.classList.contains('lightbox-close')) {
      document.getElementById('lightbox').classList.remove('active');
    }
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.getElementById('lightbox').classList.remove('active');
    }
  });
// Product search filter (only runs on pages that have #productSearch)
const productSearchInput = document.getElementById('productSearch');

if (productSearchInput) {
  productSearchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase().trim();
    const items = document.querySelectorAll('.grid-item');

    items.forEach(item => {
      const name = item.getAttribute('data-name')?.toLowerCase() || '';
      item.classList.toggle('hidden', !name.includes(query));
    });
  });
}
