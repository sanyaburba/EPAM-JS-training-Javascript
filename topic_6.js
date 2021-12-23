let name = prompt('Введите имя как минимум из пяти букв', 'Elena');

let result;

function nameReverse(name) {
   if (name.length < 5 || !typeof (String)) {
      throw new Error('Введенное значение должно являтся строкой и содержать как минимум 5 символов')
   }
   return name.split('').reverse().join('')
}

try {
   result = nameReverse(name);
} catch (e) {
   result = 'wrong name'
}

alert(result || 'new error')