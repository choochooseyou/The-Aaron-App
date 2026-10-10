const quotes = [
  {text:"You're my favourite German.", category:"Sweet"},
  {text:"Your neck is suspiciously long for a normal human.", category:"Stupid"},
  {text:"I like doing absolutely nothing with you.", category:"Sweet"},
  {text:"Somehow, out of all the people in Germany, I picked you.", category:"Romantic"},
  {text:"Reminder: you are objectively quite a good egg.", category:"Encouragement"},
  {text:"I hope you know how much I appreciate you.", category:"Sweet"},
  {text:"HAPPY BIRTHDAY YOU BEAUTIFUL HUMAN, lots and lots and LOTS of smooches are coming your way", category:"Sweet"},
  {text:"This message was professionally approved by the Department of Sarah.", category:"Nonsense"},
  {text:"Go drink some water, you dehydrated little German.", category:"Important"},
  {text:"I still think you're pretty great.", category:"Sweet"},
  {text:"I like your bum", category:"Sweet"},
  {text:"Roses are Rote, Violets are Blau, Your bum sounds like a motor and it really smells", category:"Nonsense"},
  {text:"I have concrete evidence that people think youre a good person", category:"Encouragement"},
  {text:"You smell delicious, I want to LICK you up, like an icecream", category:"Romantically stupid"},
  {text:"If everyone in the world was like you, it would be an interesting place", category:"Nonsense"},
  {text:"You really do smell good", category:"Sweet"},
  {text:"You are like an Onion, I keep peeling back more and more layers", category:"Romantic"},
  {text:"That time when we did the stag dance, inspired by Bridgerton, I loved that", category:"Sweet"},
  {text:"Fleishmeister", category:"Nonsense"},
  {text:"On a scale of 1 to 10, youre a 9 and Im the 1 your need", category:"Romantic"},
  {text:"You can do it, Do the thing!", category:"Encouragement"},
  {text:"Tiny Habits build great things, such as a plumpy dumpy", category:"Encouragement"},
  {text:"Youre like coffee, hot and I want you every day. Gimme that cream top Mein Schatz", category:"Romantic"},
  {text:"", category:""},
  {text:"", category:""},
  {text:"If you were a vegetable, you'd be a Cutecummer", category:"Romantic"},
  {text:"", category:""},
  {text:"", category:""},
  {text:"Would you still like me if I was a worm?", category:"Nonsense"},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"I wrote a poem about our relationship, want to hear it?", category:"Sweet"},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"", category:""},
  {text:"Do you believe in Soul Mates, because I am starting to", category:"Romantic"},
];

const today = new Date();
const key = `aaron-favourites`;
const favourites = JSON.parse(localStorage.getItem(key) || "[]");

function dayIndex() {
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  return Math.floor(diff / 86400000) % quotes.length;
}

let currentIndex = dayIndex();

function render() {
  const q = quotes[currentIndex];
  document.querySelector("#date").textContent =
    today.toLocaleDateString(undefined, {weekday:"long", day:"numeric", month:"long"});
  document.querySelector("#quote").textContent = q.text;
  document.querySelector("#category").textContent = q.category;
  document.querySelector("#favBtn").textContent =
    favourites.includes(currentIndex) ? "♥" : "♡";
}

document.querySelector("#favBtn").addEventListener("click", () => {
  const pos = favourites.indexOf(currentIndex);
  if (pos >= 0) favourites.splice(pos, 1);
  else favourites.push(currentIndex);
  localStorage.setItem(key, JSON.stringify(favourites));
  render();
});

render();
