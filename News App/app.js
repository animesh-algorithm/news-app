
const url = 'https://newsapi.org/v2/top-headlines?' +
'country=us&' +     'apiKey=89eed2be904741288b6e80b2647dcb10';

fetch(url)
.then(response => response.json())
.then(jsonData => {
    let articles = jsonData.articles
    console.log(articles)
    articles.forEach(function(article) {
        document.querySelector('.container1').innerHTML += "<a href='news.html' style='text-decoration: none; color: white'><div class='news justify-content-center'>" + "<img src='"+article.urlToImage+"'>"+ "<h1 class='lead'>" + article.title + "</h1>" + "<h6>Source - " + article.source.name + "</h6><br>" + "<p> Author - " + article.author + "</p>"
        + "<p>Published At - " + article.publishedAt + "</p>"
        "</div></a>"
    })
})

const typingTag = document.getElementsByTagName('h1')[0]
const textToType = ' Chronicle Annals'
let i = 0

function typingText() {
    if (i < textToType.length) {
        typingTag.innerHTML += textToType[i]
        i++
        setTimeout(typingText, 50)
    }
}

setTimeout(typingText, 100)


let newsArticles = document.querySelector('.container1').childNodes
let displayNews = document.getElementById('showNews')

newsArticles.forEach(function(article) {
    article.onclick = function() {
        displayNews.innerHTML = "Hello"
    }
})

