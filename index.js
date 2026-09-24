// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area=";

// Your code here!
const input = document.querySelector("#state-input");
const button = document.querySelector("#fetch-alerts");
const alerts = document.querySelector("#alerts-display");
const errorMessage = document.querySelector("#error-message");

button.addEventListener("click", () => {
  const state = input.value;
  input.value = "";

  fetch(weatherApi + state)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      errorMessage.textContent = "";
      errorMessage.classList.add("hidden");

      alerts.textContent = `${data.title}: ${data.features.length}`;
      
      data.features.forEach((alert) => {
          const alertElement = document.createElement("p");
          alertElement.textContent = alert.properties.headline;
          alerts.append(alertElement);
        });
    })
    .catch((error) => {
        console.log(error.message);
        errorMessage.textContent = error.message;
        errorMessage.classList.remove("hidden");
    });
});
