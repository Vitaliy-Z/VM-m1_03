console.log("Запускаем таймер через 2 секунды...");

setTimeout(slowAlert, 4000);
clearTimeout(setTimeout(slowAlert, 4000));

function slowAlert() {
  alert(5);
  alert(4);
  alert(3);
  alert(2);
  alert(1);
  alert(0);

  console.log("Обратный отсчет закончен");
}
