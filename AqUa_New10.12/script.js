let popupBg = document.querySelector('.popup__bg'); 
let popup = document.querySelector('.popup'); 
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup'); 
openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active'); 
        popup.classList.add('active'); 
    })
});
closePopupButton.addEventListener('click',() => { 
    popupBg.classList.remove('active'); 
    popup.classList.remove('active'); 
})
document.addEventListener('click', (e) => { 
    if(e.target === popupBg) { 
        popupBg.classList.remove('active'); 
        popup.classList.remove('active'); 
}});

 


const form = document.querySelector('.popup');
const loginInput = form.querySelector('.label__text');
const numberInput = form.querySelector('.label__text');



form.addEventListener('submit', (evt) => {

  evt.preventDefault();
  
 
  const login = loginInput.value;
  const number = numberInput.value;
  
  
  // Проверяем, что поля заполнены
  if (!login || !number ) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  
  // Проверяем, что имя пользователя содержит только буквы 
  if (!isValidLogin(login)) {
    alert('Вы успешно зарегистрированы');
    return;
  }
  if (!isValidNumber(number)) {
    alert('Номер телефона должен начинаться с +7');
    return;
  }

  
  
  // Если всё в порядке, отправляем форму
  form.submit();
});

function isValidLogin(login) {
  // Проверка имени регулярным выражением
  const pattern = /^[а-яА]+$/;
  return pattern.test(login);
}
function ValidPhone() {
    var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid) output = 'Номер телефона введен правильно!';
    else output = 'Номер телефона введен неправильно!';
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br>'+output;
    return valid;
}  