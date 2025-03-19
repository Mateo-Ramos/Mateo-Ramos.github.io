function changeText() {
    var newText = document.getElementById("inputText").value;
    document.getElementById("changeableText").innerText = newText;

    var randomColor = '#' + Math.floor(Math.random() * 16777218).toString(16);

    document.querySelector(".container").style.backgroundColor = randomColor;
}

document.addEventListener("DOMContentLoaded", function() {
    fetchNews();
});

function fetchNews() {
    const apiKey = "32f8379affe8459eaebadba0b6cc8936";
    const category = "general"
    const url = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}&country=us`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.articles) {
                displayNews(data.articles);
            }
        })
        .catch(error => console.error("Error fetching news", error));
}

function displayNews(articles) {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = "";

    articles.slice(0,10).forEach(article => {
        const newsCard = `
            <div class="col-md-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <h6 class="card-subtitle text-muted">${article.source.name}</h6>
                        <p class="card-text">${article.description || "No description available."}</p>
                        <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        `;
        newsContainer.innerHTML += newsCard;
    });
}

const url = `https://api.allorigins.win/get?url=${encodeURIComponent("https://newsapi.org/v2/top-headlines?category=technology&apiKey=TU_API_KEY&country=us")}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
      console.log(JSON.parse(data.contents)); // Muestra las noticias sin bloqueos
  })
  .catch(error => console.error("Error:", error));
