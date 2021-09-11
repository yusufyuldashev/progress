// DOM ELEMENTS 
const controllerInput = document.querySelector('.tab-controller__input');
const controllerBtn = document.querySelector('.tab-controller__button');
const tabRadio = document.querySelectorAll('.tab-radio');
const tabContent = document.querySelector('.tab-content');

let tabValue = 'Positive';
const changeTab  = (index) => {
  switch (index) {
    case '1':
      tabRadio[0].checked = true;
      tabValue = 'Positive';
      break;
    case '2':
      tabRadio[1].checked = true;
      tabValue = 'Negative';
      break;
    case '3':
      tabRadio[2].checked = true;
      tabValue = 'Neutral';
      break;
    default:
      alert("Index is invalid");
      break;
    }
  tabContent.textContent = `${tabValue} content`;
}

controllerBtn.addEventListener('click', () => {
  changeTab(controllerInput.value);
});

tabRadio.forEach((item,index) => {
  item.addEventListener('input', () => {
    changeTab(String(index+1));
    controllerInput.value = index + 1;
  })
})