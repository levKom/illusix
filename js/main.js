const cards = document.querySelector('#cardList .cards');
const buttonAdd = document.querySelector('.btn');
const title = document.querySelector('#cardCreate input[id="inputTitle"]');
const date = document.querySelector('#cardCreate input[id="inputDate"]');
const timeStart = document.querySelector('#cardCreate input[id="inputTimeStart"]');
const timeEnd = document.querySelector('#cardCreate input[id="inputTimeEnd"]');
const checkCard = document.getElementsByClassName('card');

function createCard(indexOfArr) {
  const title = indexOfArr['title'];
  const date = indexOfArr['date'];
  const start = indexOfArr['start'];
  const end = indexOfArr['end'];
  const card = cards.appendChild(document.createElement('div'));
  const cardHeader = card.appendChild(document.createElement('div'));
  cardHeader.classList.add('cardHeader');
  const eventRow = card.appendChild(document.createElement('div'));
  eventRow.classList.add('card-row');
  cardHeader.innerHTML = date;

  return function () {
    card.classList.add('card');
    eventRow.innerHTML += '<div><span class="title">'+title+'</div><div</span><span class="start">'
      +start+'</span><span class="end">'+end+'</span></div>';
    return card;
  };
}

/* function checkEvDublicate() {
  for (let obj in events) {
    for (let value in events[obj]) {
      card.innerHTML += (events[obj][value] + ' ');
    };
  };
  for (let i = 0; i < checkCard.length; i += 1) {
  }
  for (let prop in checkCard) {

  }
} */

const events = [];

function addEvent(evTitle, evDate, evStart, evEnd) {
  // checkEvDublicate();
  const newEv = {};
  newEv.title = evTitle.value || 'Task';
  newEv.date = evDate.value || '31.05.2019';
  newEv.start = evStart.value || '13:00';
  newEv.end = evEnd.value || '13:00 next day';
  events.push(newEv);
}

function clearInputFields() {
  title.value = '';
  date.value = '';
  timeStart.value = '';
  timeEnd.value = '';
}

buttonAdd.onclick = function (e) {
  addEvent(title, date, timeStart, timeEnd);
  createCard(events[events.length - 1])();
  clearInputFields();
};
