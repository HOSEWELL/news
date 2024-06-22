function toggleNav() {
    let navLinks = document.querySelector('.navlink');
    navLinks.classList.toggle('open');
  
    let menuIcon = document.getElementById('menuIcon');
    let isStar = menuIcon.classList.contains('fa-star');
  
    if (isStar) {
        menuIcon.classList.remove('fa-star', 'star');
        menuIcon.classList.add('fa-bars');
    } else {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-star', 'star');
    }
  }
  
  
  // Fetch news using an API
  
  function searchNews() {
    const breakingnews = `https://api.currentsapi.services/v1/latest-news?apiKey=2TIRGcB2GZDlEjUVthEoLPcQakkKI4t7uCAdwWj8DJW9SKpA`;

  
    fetch(breakingnews)
      .then(response => response.json())
      .then(data => {
        const news = data.news.map(article => ({
          title: article.title,
          image: article.image,
          description: article.description,
          url: article.url 
        }));
        displayNews(news);
      })
        
  }
  
  function displayNews(news) {
    const newsList = document.getElementById("newslist");
    const latestNews = document.getElementById("latest-news");
    const mustread = document.getElementById("mustread");
    
    const recomendation = document.getElementById("recomendation");
    newsList.innerHTML = '';
  
  
    news.slice(11,12).forEach(article => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
      <div class= "newspage">
  
        <div>
          <span><img src="${article.image}" ></span>
        </div>
  
        <div class = "newscontent">
          <h2><b>${article.title}</b></h2>
          <br>
          <span>${article.description}</span>
          <br><br>
          <span><a href="${article.url}" target="_blank">${article.url}</a></span>
          </div>
        </div>
       </div>` 
      
      newsList.appendChild(listItem);
    });
    news.slice(12,16).forEach(article => {
      const newsItem = document.createElement("div");
      newsItem.setAttribute('class','newspage')
      newsItem.innerHTML = `
      
  
        <div>
          <img src="${article.image}" >
        </div>
  
        <div class = "newscontent">
          <h2><b>${article.title}</b></h2>
          <br>
          <span>${article.description}</span>
          <br><br>
          <span><a href="${article.url}" target="_blank">${article.url}</a></span>
          </div>
        </div>
       ` 
  
  latestNews.appendChild(newsItem)
    });
    news.slice(16,20).forEach(article => {
      const newsItem = document.createElement("div");
      newsItem.setAttribute('class','mustread')
      newsItem.innerHTML = `
        <div>
          <img src="${article.image}" >
        </div>
  
        <div class = "newscontent">
          <h2><b>${article.title}</b></h2>
          <br>
          <span>${article.description}</span>
          <br><br>
          <span><a href="${article.url}" target="_blank">${article.url}</a></span>
          </div>
        </div>
       ` 
  mustread.appendChild(newsItem)
    });
  
    news.slice(24,27).forEach(article => {
      const newsItem = document.createElement("div");
      newsItem.setAttribute('class','recomendation')
      newsItem.innerHTML = `
      
  
        <div>
          <img src="${article.image}" >
        </div>
  
        <div class = "newscontent">
          <h2><b>${article.title}</b></h2>
          <br>
          <span>${article.description}</span>
          <br><br>
          <span><a href="${article.url}" target="_blank">${article.url}</a></span>
          </div>
        </div>
       ` 
  
       recomendation.appendChild(newsItem)
    });

  }
  document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const email = document.getElementById('email').value;
  
    alert(`Email received: ${email}`);
  
  });
  
  window.onload = searchNews;
  


