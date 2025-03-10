const tasks = [
  { id: 1, name: 'Перевірити код', duration: 1000 },
  { id: 2, name: 'Написати звіт', duration: 2000 },
  { id: 3, name: 'Тестувати функцію', duration: 1500 },
];

function processTask(task, callback) {
  setTimeout(() => {
    const result = `${task.name} завершено за ${task.duration}мс`;
    callback(result);
  }, task.duration);
}

function checkStatus(result, callback) {
  setTimeout(() => {
    const status = `${result} - статус OK`;
    callback(status);
  }, 500);
}

function saveResult(status, callback) {
  setTimeout(() => {
    if (status.includes('Тестувати функцію')) {
      const res = 'Помилка валідації результату для Тестувати функцію';
      callback(res);
    } else {
      const saved = `${status} - результат збережено`;
      callback(saved);
    }
  }, 500);
}

console.log('Результати:');

tasks.forEach(task => {
  processTask(task, function (result) {
    checkStatus(result, function (status) {
      saveResult(status, function (saved) {
        console.log(saved);
      });
    });
  });
});
