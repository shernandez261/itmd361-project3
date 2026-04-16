function initMap() {
  const mapElement = document.getElementById("map");

  if (mapElement && window.google) {
    const schoolLocation = { lat: 41.8349, lng: -87.6270 };

    const map = new google.maps.Map(mapElement, {
      center: schoolLocation,
      zoom: 13,
      mapTypeControl: true,
      streetViewControl: true
    });

    const marker = new google.maps.Marker({
      position: schoolLocation,
      map: map,
      title: "Illinois Institute of Technology"
    });

    const infoWindow = new google.maps.InfoWindow({
      content: "<p>Illinois Institute of Technology, Chicago</p>"
    });

    marker.addListener("click", function () {
      infoWindow.open(map, marker);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const sliderImage = document.getElementById("slider-image");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (sliderImage && prevBtn && nextBtn) {
    const images = [
      "slide1.jpeg",
      "slide2.jpeg",
      "slide3.jpeg"
    ];

    let currentIndex = 0;

    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % images.length;
      sliderImage.src = images[currentIndex];
    });

    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      sliderImage.src = images[currentIndex];
    });
  }
});
