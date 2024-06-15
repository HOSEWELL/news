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
    const breakingnews = `https://newsdata.io/api/1/news?apikey=pub_45349352ccbe1b47e38b63929fe0cb3e6c6f6&q=entertainment `;
  
    fetch(breakingnews)
      .then(response => response.json())
      .then(data => {
        const news = data.articles.map(article => ({
          title: article.title,
          image: article.urlToImage,
          content: article.content,
          time:article.time,
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
  
  
    news.slice(0,1).forEach(article => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
      <div class= "newspage">
  
        <div>
          <span><img src="${article.image}" ></span>
        </div>
  
        <div class = "newscontent">
          <h2><b>${article.title}</b></h2>
          <br>
          <span>${article.content}</span>
          <br><br><br><br><br>
          <span class="time"> Breaking News. ${article.time}</span>
        </div>
       </div>` 
      
      newsList.appendChild(listItem);
    });
    news.slice(1,5).forEach(article => {
      const newsItem = document.createElement("div");
      newsItem.setAttribute('class','newspage')
      newsItem.innerHTML = `
      
  
        <div>
          <img src="${article.image}" >
        </div>
  
        <div class = "newscontent">
          <h2><b>${article.title}</b></h2>
          <br>
          <span>${article.content}</span>
          <br><br>
          <span class="time"> Breaking News. ${article.time}</span>
        </div>
       ` 
  
  latestNews.appendChild(newsItem)
    });
  
  
  
  
    
    news.slice(6,10).forEach(article => {
      const newsItem = document.createElement("div");
      newsItem.setAttribute('class','mustread')
      newsItem.innerHTML = `
        <div>
          <img src="${article.image}" >
        </div>
  
        <div class = "newscontent">
          <h2><b>${article.title}</b></h2>
          <br>
          <span>${article.content}</span>
          <br><br>
          <span class="time"> Breaking News. ${article.time}</span>
        </div>
       ` 
  mustread.appendChild(newsItem)
    });
  
    news.slice(4,7).forEach(article => {
      const newsItem = document.createElement("div");
      newsItem.setAttribute('class','recomendation')
      newsItem.innerHTML = `
      
  
        <div>
          <img src="${article.image}" >
        </div>
  
        <div class = "newscontent">
          <h2><b>${article.title}</b></h2>
          <br>
          <span>${article.content}</span>
          <br><br>
          <span class="time"> Breaking News. ${article.time}</span>
        </div>
       ` 
  
       recomendation.appendChild(newsItem)
    });

  }
  
  
  window.onload = searchNews;