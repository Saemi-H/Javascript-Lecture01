// const ajax = new XMLHttpRequest();
// const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';

// ajax.open('GET', NEWS_URL, false);
// ajax.send();

// const newsFeed = JSON.parse(ajax.response);
// const ul = document.createElement('ul');

// for(let i = 0; i < 10; i++) {
//   const li = document.createElement('li');

//   li.innerHTML = newsFeed[i].title;

//   ul.appendChild(li);
// }

// document.getElementById('root').appendChild(ul);


// 1. ajax define
let ajax = new XMLHttpRequest();
// 2. news url open with ajax. Not going to use async
ajax.open('GET','https://api.hnpwa.com/v0/news/1.json', false )
// 3. ajax send
ajax.send()
// 4. ajax response
const res = ajax.response
// 5. JSON parse
const results = JSON.parse(res)
// 6. looping items
const mapResult = results.map(item => `<li>${item.title}</li>`)

document.getElementById("root").innerHTML = mapResult