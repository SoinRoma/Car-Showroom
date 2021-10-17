const formTestDrive = document.querySelector('.form-test-drive');

formTestDrive.addEventListener('submit', (event) => {
  event.preventDefault();

  let data = {};

  for (let elem of formTestDrive.elements) {
    if (elem.name) {
      data[elem.name] = elem.value;
    }
  }

  // Получение данных с сервера
  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => {
  //     if (response.status === 200 || response.status === 201) {
  //       return response.json();
  //     } else {
  //       throw new Error(response.status);
  //     }
  //   })
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     alert('Произошла ошибка, статус' + error.message);
  //   });


  // Отправление данных на сервер
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.status === 200 || response.status === 201) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then(data => {
      console.log('Данные успешно отправлены!');
      formTestDrive.reset();

    })
    .catch(error => {
      alert('Произошла ошибка, статус' + error.message);
    });

});