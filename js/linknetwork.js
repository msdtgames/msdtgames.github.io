var langs = [
  "en",                                         // English
  "es",                                         // Spanish
  "fr",                                         // French
  "it",                                         // Italian
  "de",                                         // German
  "pl",                                         // Polish
  "ru",                                         // Russian
  "jp",                                         // Japanese
  "zh",                                         // Chinese
  "ko",                                         // Korean
];
var links = [
  `https://msdtgames.github.io/${lang}/`,
  `https://msdtgames.github.io/${lang}/news.html`,
  `https://msdtgames.github.io/${lang}/games.html`,
  `https://msdtgames.github.io/${lang}/blog.html`,
  `https://msdtgames.github.io/${lang}/behindthescenes.html`,
  `https://msdtgames.github.io/${lang}/artwork.html`,
  `https://msdtgames.github.io/${lang}/about.html`,
];

function getLang(language) { return langs[language]; }
var lang = getLang(english);

const english  = 0;
const spanish  = 1;
const french   = 2;
const italian  = 3;
const german   = 4;
const polish   = 5;
const russian  = 6;
const japanese = 7;
const chinese  = 8;
const korean   = 9;

const home            = 0;
const news            = 1;
const games           = 2;
const blog            = 3;
const behindthescenes = 4;
const artwork         = 5;
const about           = 6;

function changeLang(language) { lang = getLang(language); }
function page(html)
{
  var elem = document.createElement("a");
  elem.setAttribute("href", links[html]);
  
  document.body.appendChild(elem);
  elem.click();
  
  document.body.deleteChild(elem);
  return;
}
