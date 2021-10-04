console.log("Давай посмотрим как ты справишься с математическими задачками...");

setTimeout(start, 4000);
clearTimeout(setTimeout(start, 4000));

function start() {
  askQuestion("Сколько будет 2 + 2?", "4");
  askQuestion("Чему равен корень из 9?", "3");
  askQuestion("Сколько будет 2 в 5-й степени? ", "32");
}

function askQuestion(question, correctAnswer) {
  let res1 = prompt(question);

  if (res1 === correctAnswer) {
    console.log("Молодец! Это правильный ответ");
    return;
  } else {
    console.log("Болван! Это не правильный ответ");
    askQuestion(question, correctAnswer);
  }
}
