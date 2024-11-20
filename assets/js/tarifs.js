/**
 * Calculates the total cost of the tickets based on the selected ticket type and quantity.
 * Displays the total cost in the "totalCost" input field.
 */
try {
  document.getElementById('quantity').addEventListener('change', function() {
    var type = document.getElementById('type').value;
    var quantity = document.getElementById('quantity').value;
    var cost = 0;

    if (type === 'Normal') {
      cost = 20 * quantity;
    } else if (type === 'Enfant') {
      cost = 10 * quantity;
    } else if (type === 'Groupe(3 tickets et plus)') {
      cost = 13 * quantity;
    }

    document.getElementById('totalCost').value = cost;
  });
} catch (error) {
  alert("Une erreur s'est produite");
}


/**
 * Adds an event listener to the "Ajouter au panier" button.
 * Validates the email input and stores the form data in local storage when the button is clicked.
 */
document.getElementById("email").addEventListener("input", function() {
  var email = document.getElementById("email").value;
  var emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  if (emailRegEx.test(email)) {
    document.getElementById("addToCartButton").removeAttribute("disabled");
  } else {
    document.getElementById("addToCartButton").setAttribute("disabled", true);
  }
});

document.getElementById("addToCartButton").addEventListener("click", function() {
  var email = document.getElementById("email").value;
  var emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  if (!emailRegEx.test(email)) {
    alert("Adresse email non valide");
    return;
  } else {
    document.getElementById('ticketForm').addEventListener('submit', function(e) {
      e.preventDefault();

      var type = document.getElementById('type').value;
      var quantity = document.getElementById('quantity').value;
      var email = document.getElementById('email').value;
      var prenom = document.getElementById('prenom').value;
      var nom = document.getElementById('nom').value.replace(/\b\w/g, l => l.toUpperCase());
      var cost = document.getElementById('totalCost').value;

      localStorage.setItem('type', type);
      localStorage.setItem('quantity', quantity);
      localStorage.setItem('email', email);
      localStorage.setItem('prenom', prenom);
      localStorage.setItem('nom', nom);
      localStorage.setItem('cost', cost);

      window.location = 'panier.html';
    });
  }
});
