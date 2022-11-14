function currentDateInDMY() {
  return (new Date()).toLocaleDateString('pt-BR');
}

function convertDMYToDate(dateInDMY) {
  const [dd,mm,yyyy] = dateInDMY.split('/');
  return new Date(yyyy, (mm - 1), dd);
}

function compareDatesInDMY(firstDate, secondDate) {
  const timestampFromFirstDate = convertDMYToDate(firstDate).getTime();
  const timestampFromSecondDate = convertDMYToDate(secondDate).getTime();
  return timestampFromFirstDate > timestampFromSecondDate;
}

function getDayName(dateInDMY) {
  const date = convertDMYToDate(dateInDMY);
  return date.toLocaleDateString('pt-BR', {weekday: 'long'});
}

function toggleVisibilityById(id) {
  const element = document.querySelector(`#${id}`);
  element.classList.toggle('hide');
}

function getMarkupCard(args) {
  const {date, day, arrayLi} = args;
  return `
    <div class="card">
      <h2>${date}<span class="day">${day}</span></h2>
      <ul>
        ${arrayLi.join('\n')}
      </ul>
    </div>
  `;
}

function getMarkupLi(args) {
  const {player1, hour, player2} = args;
  return `
    <li>
      <img src="assets/img/icon-${player1}.svg" alt="Bandeira ${player1}">
      <strong>${hour}</strong>
      <img src="assets/img/icon-${player2}.svg" alt="Bandeira ${player2}">
    </li>
  `;
}

function showTodayGames() {
  // const currentDate = '22/11/2022';
  const currentDate = currentDateInDMY();
  for (const date in data.games.dates) {
    const match = currentDate === date;
    if (match) {
      const gamesInCurrentDate = data.games.dates[date];
      const arrayLi = [];
      for (const game of gamesInCurrentDate) {
        const {player1, hour, player2} = game;
        const rawLi = getMarkupLi({player1, hour, player2});
        arrayLi.push(rawLi);
      }
      const day = getDayName(date);
      const rawCard = getMarkupCard({date, day, arrayLi});
      const cards = document.querySelector('#cards');
      cards.innerHTML = rawCard;
      return;
    }
  }
  toggleVisibilityById('btns');
  // provisório
  alert('Hoje não tem jogo!');
}

function showAllGames() {
  // const currentDate = '22/11/2022';
  const currentDate = currentDateInDMY();
  const arrayCards = [];
  for (const date in data.games.dates) {
    const dayPassed = compareDatesInDMY(currentDate, date);
    // Não mostrar jogos de datas passadas.
    if (!dayPassed) {
      const gamesInCurrentDate = data.games.dates[date];
      const arrayLi = [];
      for (const game of gamesInCurrentDate) {
        const {player1, hour, player2} = game;
        const rawLi = getMarkupLi({player1, hour, player2});
        arrayLi.push(rawLi);
      }
      const day = getDayName(date);
      const rawCard = getMarkupCard({date, day, arrayLi});
      arrayCards.push(rawCard);
    }
  }
  const cards = document.querySelector('#cards');
  cards.innerHTML = arrayCards.join('\n');
}

function setDate() {
  const currentDate = currentDateInDMY();
  const date = document.querySelector('#date');
  date.innerHTML = currentDate;
}

function enableButtons() {
  const btnTodayGames = document.querySelector('#btnTodayGames');
  const btnAllGames = document.querySelector('#btnAllGames');
  btnTodayGames.addEventListener('click',
    toggleVisibilityById.bind(null, 'btns'));
  btnTodayGames.addEventListener('click', showTodayGames);
  btnAllGames.addEventListener('click',
    toggleVisibilityById.bind(null, 'btns'));
  btnAllGames.addEventListener('click', showAllGames);
}

(function init() {
  setDate();
  enableButtons();
})();