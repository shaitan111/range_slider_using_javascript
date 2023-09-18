// Get references to the slider and price divs
const priceSlider = document.getElementById("priceSlider");
const priceDivs = document.querySelectorAll(".price");

// Add an event listener to the slider
priceSlider.addEventListener("input", updatePriceRange);

// Function to update the displayed price packs based on the slider value
function updatePriceRange() {
  const selectedValue = parseInt(priceSlider.value);

  // Loop through each price div and enable/disable based on the selected range
  priceDivs.forEach((div) => {
    const minRange = parseInt(div.getAttribute("data-min"));
    const maxRange = parseInt(div.getAttribute("data-max"));

    if (selectedValue >= minRange && selectedValue <= maxRange) {
      div.classList.remove("disabled");
    } else {
      div.classList.add("disabled");
    }
  });
}

// Initialize the price range when the page loads
updatePriceRange();
