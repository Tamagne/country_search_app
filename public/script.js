document.getElementById('searchBtn').addEventListener('click', async () => {
    const countryName = document.getElementById('countryInput').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (!countryName) {
        resultDiv.innerHTML = '<p>Please enter a country name.</p>';
        return;
    }

    try {
        const response = await fetch(`/api/country?name=${countryName}`);
        if (!response.ok) {
            throw new Error('Country not found');
        }

        const data = await response.json();
        const { name, flags, capital, population, languages } = data;
        const languagesSpoken = Object.values(languages).join(', ');

        resultDiv.innerHTML = `
            <div class="card">
                <h2>${name.common}</h2>
                <img src="${flags.png}" alt="Flag of ${name.common}">
                <p><strong>Capital:</strong> ${capital[0]}</p>
                <p><strong>Population:</strong> ${population.toLocaleString()}</p>
                <p><strong>Languages:</strong> ${languagesSpoken}</p>
            </div>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p>${error.message}</p>`;
    }
});
