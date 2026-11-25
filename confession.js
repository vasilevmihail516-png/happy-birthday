// Финальное послание намеренно оставлено автору: здесь должны быть только его собственные слова.
const CONFESSION = {
  title: "Последняя страница",
  paragraphs: [],
  sign: ""
};

const unlocked = (() => {
  try { return window.localStorage.getItem("for-rita-final-unlocked-v7") === "yes"; }
  catch { return false; }
})();
const root = document.querySelector("#confessionContent");

if (!unlocked) {
  root.innerHTML = '<div class="confession-lock"><div class="confession-flower">✧</div><div class="section-kicker">NOT YET</div><h1>Послание пока закрыто</h1><p>Сначала пройди двенадцать этапов THE LOCK и введи код, который Михаил скажет тебе лично.</p><a class="primary-button" href="index.html#lock">Вернуться к THE LOCK ↗</a></div>';
} else if (!CONFESSION.paragraphs.length) {
  root.innerHTML = '<div class="confession-lock"><div class="confession-flower">✧</div><div class="section-kicker">THE FINAL PAGE</div><h1>Последняя страница</h1><p>Эта часть пока не готова. Автор оставил её для своих собственных слов.</p><a class="primary-button" href="index.html">Вернуться на сайт ↗</a></div>';
} else {
  root.innerHTML = `<div class="confession-flower">❀</div><div class="section-kicker">A NOTE FROM THE HEART</div><h1>${CONFESSION.title}</h1><div class="confession-copy">${CONFESSION.paragraphs.map(x => `<p>${x}</p>`).join("")}</div><div class="confession-sign">${CONFESSION.sign}</div><a class="primary-button" style="margin-top:34px" href="index.html">Вернуться на сайт ↗</a>`;
}
