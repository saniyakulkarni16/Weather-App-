function getWeather() {
  const location = document.getElementById('locationInput').value;
  const apiKey = '5b26487a85264c6a9c8133832250107';
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        document.getElementById('weatherResult').innerHTML = 
          `<p style="color:red;">${data.error.message}</p>`;
      } else {
        const temp = data.current.temp_c;
        const condition = data.current.condition.text;
        document.getElementById('weatherResult').innerHTML = `
          <p><strong>Location:</strong> ${data.location.name}, ${data.location.country}</p>
          <p><strong>Temperature:</strong> ${temp}°C</p>
          <p><strong>Condition:</strong> ${condition}</p>
        `;
      }
    })
    .catch(error => {
      document.getElementById('weatherResult').innerHTML = 
        `<p style="color:red;">Failed to fetch weather data.</p>`;
      console.error("Error:", error);
    });
}
