/**
 * Gets the date and day  and displays it in the "currentDate" span element.
 */
function displayCurrentDate() {
  try {
    // Get the current date
    var today = new Date();
    
    // Display the current date and day in the "currentDate" span element
    document.getElementById("currentDate").innerHTML = today.toLocaleDateString("default", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  } catch (error) {
    alert("Une erreur s'est produite: " + error);
  }
}

displayCurrentDate();
