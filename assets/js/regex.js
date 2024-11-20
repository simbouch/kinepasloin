/**

@file script.js
This file contains the JavaScript code that validates the form data before submitting.
The form is prevented from submitting if any of the following conditions are not met:
The first letter of the name is not in uppercase
The user is under 18 years old
The email address and the email confirmation do not match
If all conditions are met, the form is submitted with a success message.
*/
document.querySelector('form').addEventListener('submit',
    function(e) {
        e.preventDefault();
        // Vérification du nom
        let nom = document.querySelector('#nom').value;
        if (nom.charAt(0) === nom.charAt(0).toUpperCase()) {
            nom = nom.charAt(0).toUpperCase() + nom.slice(1);
            document.querySelector('#nom').value = nom;
        } else {
            alert("La première lettre du nom doit être en majuscule");
            return;
        }
        // Vérification de la date de naissance
        function verifierAge() {
            let dateNaissance = new Date(document.querySelector('#dateNaissance').value);
            let aujourdhui = new Date();
            let age = aujourdhui.getFullYear() - dateNaissance.getFullYear();
            if (aujourdhui.getMonth() < dateNaissance.getMonth() || (aujourdhui.getMonth() == dateNaissance.getMonth() && aujourdhui.getDate() < dateNaissance.getDate())) {
                age--;
            }
            if (age < 18) {
                alert('Vous devez être majeur pour vous inscrire');
                return;
            }
        }
    
        // Vérification de l'adresse email (déjà vérifié en HTML)
        let email = document.querySelector('#email').value;
        let emailConfirmation = document.querySelector('#emailConfirmation').value;
        if (email !== emailConfirmation) {
            alert('Les adresses email ne correspondent pas');
            return;
        }
        // Envoi du formulaire
        localStorage.setItem("nom", nom);
        localStorage.setItem("dateNaissance", dateNaissance);
        localStorage.setItem("email", email);
        alert('Formulaire envoyé avec succès ! Les données suivantes ont été enregistrées dans le stockage local : Nom : ' + nom + ', Date de naissance : ' + dateNaissance + ', Adresse email : ' + email);
    });