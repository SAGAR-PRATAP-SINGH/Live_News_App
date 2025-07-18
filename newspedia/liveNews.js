document.addEventListener('DOMContentLoaded', () => {
    const liveNewsContainer = document.getElementById('liveNewsContainer');
    const apiKey = "af09f919ed144b17a41293e3caff2479"; // Replace with your actual API key from newsapi.org

    if (!apiKey || apiKey === 'YOUR_NEWS_API_KEY') {
        liveNewsContainer.innerHTML = '<p>Please get an API key from <a href="https://newsapi.org/" target="_blank">newsapi.org</a> and replace YOUR_NEWS_API_KEY in liveNews.js</p>';
        return;
    }

    const fetchNews = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
            const data = await response.json();

            if (data.status === 'ok' && data.articles.length > 0) {
                liveNewsContainer.innerHTML = ''; // Clear existing content
                data.articles.forEach(article => {
                    const newsCard = `
                        <div class="news-card">
                            <img src="${article.urlToImage || 'https://via.placeholder.com/150'}" alt="${article.title}">
                            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                            <p>${article.description || ''}</p>
                            <span>${new Date(article.publishedAt).toLocaleDateString()}</span>
                        </div>
                    `;
                    liveNewsContainer.innerHTML += newsCard;
                });
            } else {
                liveNewsContainer.innerHTML = '<p>No live news available at the moment.</p>';
            }
        } catch (error) {
            console.error('Error fetching news:', error);
            liveNewsContainer.innerHTML = '<p>Failed to load news. Please check your internet connection or API key.</p>';
        }
    };

    fetchNews();
});