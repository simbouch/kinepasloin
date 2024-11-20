/**
 * Retrieves data from local storage and calculates the cost of tickets based on the type and quantity
 * before updating the HTML elements to display the retrieved data and calculated cost.
 */
document.addEventListener("DOMContentLoaded", function () {
  try {
    // Get the values stored in local storage
    var type = localStorage.getItem("type");
    var quantity = localStorage.getItem("quantity");
    var prenom = localStorage.getItem("prenom");
    var nom = localStorage.getItem("nom");
    var email = localStorage.getItem("email");
    var cost = 0;

    if (type === "Normal") {
      cost = 20 * quantity;
    } else if (type === "Enfant") {
      cost = 10 * quantity;
    } else if (type === "Groupe(3 tickets et plus)") {
      cost = 13 * quantity;
    }

    // Update the HTML elements to display the values
    document.getElementById("display-type").innerHTML = type;
    document.getElementById("display-quantity").innerHTML = quantity;
    document.getElementById("display-prenom").innerHTML = prenom;
    document.getElementById("display-nom").innerHTML = nom;
    document.getElementById("display-email").innerHTML = email;
    document.getElementById("totalCost").innerHTML = cost;
  } catch (error) {
    alert("Une erreur s'est produite");
  }
});

/**
 * Clears the cart by removing the stored data from local storage and resetting the displayed information.
 */
function clearCart() {
  try {
    localStorage.removeItem("type");
    localStorage.removeItem("quantity");
    localStorage.removeItem("prenom");
    localStorage.removeItem("nom");
    localStorage.removeItem("email");

    document.getElementById("display-type").innerHTML = "";
    document.getElementById("display-quantity").innerHTML = "";
    document.getElementById("display-prenom").innerHTML = "";
    document.getElementById("display-nom").innerHTML = "";
    document.getElementById("display-email").innerHTML = "";
    document.getElementById("totalCost").innerHTML = "";
  } catch (error) {
    alert("Une erreur s'est produite");
  }
}

document.getElementById("clearCart").addEventListener("click", clearCart);
