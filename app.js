const quotes = [
  {text:"You're my favourite German.", category:"Sweet"},
  {text:"Your neck is suspiciously long for a normal human.", category:"Stupid"},
  {text:"I like doing absolutely nothing with you.", category:"Sweet"},
  {text:"Somehow, out of all the people in Germany, I picked you.", category:"Romantic"},
  {text:"Reminder: you are objectively quite a good egg.", category:"Encouragement"},
  {text:"I hope you know how much I appreciate you.", category:"Sweet"},
  {text:"This message was professionally approved by the Department of Sarah.", category:"Nonsense"},
  {text:"Go drink some water, you dehydrated little German.", category:"Important"},
  {text:"I still think you're pretty great.", category:"Sweet"}
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
