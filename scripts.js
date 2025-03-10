document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  let currentSectionIndex = 0;

  function showNextSection() {
    if (currentSectionIndex < sections.length - 1) {
      sections[currentSectionIndex].classList.remove('show');
      currentSectionIndex++;
      sections[currentSectionIndex].classList.add('show');
    }
  }

  // Show the first section
  sections[currentSectionIndex].classList.add('show');

  document.querySelectorAll('.down-arrow').forEach(arrow => {
    arrow.addEventListener('click', showNextSection);
  });

  // Envelope hover effect
  const envelopeClosed = document.querySelector('.envelope .closed');
  const envelopeOpen = document.querySelector('.envelope .open');

  envelopeClosed.addEventListener('mouseover', () => {
    envelopeOpen.classList.remove('hidden');
  });

  envelopeClosed.addEventListener('mouseout', () => {
    envelopeOpen.classList.add('hidden');
  });

  envelopeClosed.addEventListener('click', showNextSection);

  // Popup functionality
  const popup = document.getElementById('popup');
  const popupContent = document.getElementById('popup-content');
  const popupClose = document.getElementById('popup-close');
  const popupText = document.getElementById('popup-text');

  document.querySelectorAll('.detail-item').forEach(item => {
    item.addEventListener('click', () => {
      const detail = item.getAttribute('data-detail');
      showPopup(detail);
    });
  });

  popupClose.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  function showPopup(detail) {
    // Add details for each section
    const details = {
      'story': '<h3>Our Story</h3><p>Here is our love story...</p>',
      'area': '<h3>The Area</h3><p>Explore the beautiful surroundings...</p>',
      'dress-code': '<h3>Dress Code</h3><p>Dress code details...</p>',
      'stay': '<h3>Where to Stay</h3><p>Here are some great places to stay nearby...</p>',
      'getting-here': '<h3>Getting Here</h3><p>How to get to our wedding venue...</p>',
    };

    popupText.innerHTML = details[detail];
    popup.classList.remove('hidden');
  }
});
