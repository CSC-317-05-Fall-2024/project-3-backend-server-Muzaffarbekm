/* This file should contain definitions for deleteRestaurantCard,
    and js to attach it as a handler per card.
*/

// Function to delete a restaurant card from the DOM
function deleteRestaurantCard(button) {
    const card = button.closest('.restaurant-card');  // Find the closest restaurant card
    card.remove();  // Remove the card from the DOM
}
