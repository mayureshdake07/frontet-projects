// script.js

document.addEventListener('DOMContentLoaded', () => {
  const locationInput = document.getElementById('location');
  
  // Optional: Autofill with user's real location if permitted
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // In real-world, you'd convert coordinates to an address, e.g., via Google Maps API.
        locationInput.placeholder = "Detected your location!";
      },
      (error) => {
        // If denied or errored, fallback placeholder stays.
        // Optionally, show a message to user.
      }
    );
  }

  // Optional: Show entered location as an alert when user hits Enter
  locationInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const value = locationInput.value.trim();
      if(value) {
        alert("Delivery location set to: " + value);
      } else {
        alert("Please enter a delivery location.");
      }
    }
  });
});
