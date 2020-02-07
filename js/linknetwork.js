var home = "https://msdtgames.github.io/en/";
var news = "https://msdtgames.github.io/en/news.html";
var games = "https://msdtgames.github.io/en/games.html";
var blog = "https://msdtgames.github.io/en/blog.html";
var behindthescenes = "https://msdtgames.github.io/en/behindthescenes.html";
var artwork = "https://msdtgames.github.io/en/artwork.html";
var about = "https://msdtgames.github.io/en/about.html";

function page(url)
{
  var elem = document.createElement("a");
  elem.setAttribute("href", url);
  document.body.appendChild(elem);
  elem.click();
  document.body.deleteChild(elem);
  return;
}
