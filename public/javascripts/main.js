function populateFields() {
    const select = document.getElementById("productSelect");
    const specs = document.getElementById("productSpecs");
    const image = document.getElementById("productImage");
    const hiddenProductName = document.getElementById("hiddenProductName");
    const hiddenProductImage = document.getElementById("hiddenProductImage");

    // Populate fields based on selected product
    if (select.value === "limited_edition_mji_pheonix") {
        hiddenProductName.value = "Limited Edition Mji Pheonix";
        hiddenProductImage.value = "/images/drone1.png";
    } else if (select.value === "dreamliner_x300_eagle") {
        hiddenProductName.value = "Dreamliner x300 Eagle";
        hiddenProductImage.value = "/images/drone2.png";
    } else {
        // Clear fields if no product selected
        hiddenProductName.value = "";
        hiddenProductImage.value = "";
    }
}
