document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  let currentSectionIndex = 0;

  function showNextSection() {
    if (currentSectionIndex < sections.length - 1) {
      sections[currentSectionIndex].classList.remove('show');
      currentSectionIndex++;
      sections[currentSectionIndex].classList.add('show');
    }
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      showNextSection();
    }
  });

  // Show the first section
  sections[currentSectionIndex].classList.add('show');

  // Popup functionality
  const popup = document.getElementById('popup');
  const popupContent = document.getElementById('popup-content');
  const popupClose = document.getElementById('popup-close');
  const popupText = document.getElementById('popup-text');

  document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', () => {
      const detail = button.getAttribute('data-detail');
      showPopup(detail);
    });
  });

  popupClose.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  function showPopup(detail) {
    // Add details for each section
    const details = {
      stay: '<h3>Where to Stay</h3><p>Here are some great places to stay nearby...</p>',
      area: '<h3>The Area</h3><p>Explore the beautiful surroundings...</p>',
      schedule: '<h3>Schedule of Events</h3><p>Here is the schedule for our wedding day...</p>',
      parking: '<h3>Parking</h3><p>Parking information and tips...</p>',
      attire: '<h3>Attire & Dress Code</h3><p>Dress code details...</p>',
      registry: '<h3>Registry</h3><p>Check out our wedding registry...</p>',
    };

    popupText.innerHTML = details[detail];
    popup.classList.remove('hidden');
  }
});
