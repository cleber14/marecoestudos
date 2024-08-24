const apiKey = '3H9CGKYCGVZSOBBQ';
const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=${apiKey}`;

let tickerData = [];

async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        updateTickerData(data);
        displayData();
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

function updateTickerData(data) {
    const timeSeries = data['Time Series (5min)'];
    if (timeSeries) {
        tickerData = []; // Limpa os dados anteriores
        for (const [time, values] of Object.entries(timeSeries)) {
            tickerData.push(`MSFT (${time}): $${values['1. open']}`);
        }
    }
}

function displayData() {
    const container = document.querySelector('.container-realtime-feed');
    if (tickerData.length > 0) {
        const tickerContent = tickerData.join(' | '); // Junta os dados com um separador
        container.innerHTML = `<div class="ticker">${tickerContent}</div>`;
    } else {
        container.innerHTML = 'Sem dados disponíveis.';
    }
}

setInterval(fetchData, 300000); // Atualiza os dados a cada 5 minutos
fetchData(); // Busca os dados ao carregar a página

