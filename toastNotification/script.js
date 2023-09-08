const toasts = document.getElementById('toasts');
const btn = document.getElementById('btn');

const randomTexts = ['Message 1', 'Message 2', 'Message 3', 'Message 4'];
const randomTypes = ['success', 'info', 'danger'];

btn.addEventListener('click', () => createNotification());

function createNotification(text = null, type = null) {
  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.classList.add(type ? type : getRandomType());
  notification.innerText = text ? text : getRandomText();
  toasts.appendChild(notification);

  setTimeout(() => {
    toasts.removeChild(notification);
  }, 1500);
}

function getRandomText() {
  return randomTexts[Math.floor(Math.random() * randomTexts.length)];
}

function getRandomType() {
  return randomTypes[Math.floor(Math.random() * randomTypes.length)];
}
