console.log("Приготовся отвечать на вопросы...");

const showAnswer = (question, answer) => {
  console.log(question);
  alert(`Мой ответ: ${answer}`);
  console.log(`Правильно: ${answer}! Следующий вопрос ->`);
};

const start = () => {
  showAnswer("Кто разработал язык программирования JavaScript?", "Брендан Эйх");
  showAnswer("За сколько дней был разработан JavaScript?", "за 10 дней");
  showAnswer("В каком году появился JavaScript?", "в далёком 1995 году");
  showAnswer(
    "JavaScript - это то же самое, что и Java?",
    "JavaScript это не Java"
  );
  showAnswer("Как называется спецификация JavaScript?", "ECMAScript");
};

setTimeout(start, 4000);
clearTimeout(setTimeout(start, 4000));
