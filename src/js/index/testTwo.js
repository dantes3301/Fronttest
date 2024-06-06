
export function quizFunc (){
    class Quiz
    {
       constructor(type, questions, results)
       {
           //Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
           this.type = type;
     
           //Массив с вопросами
           this.questions = questions;
     
           //Массив с возможными результатами
           this.results = results;
     
           //Количество набранных очков
           this.score = 0;
     
           //Номер результата из массива
           this.result = 0;
     
           //Номер текущего вопроса
           this.current = 0;
       }
     
       Click(index)
       {
           //Добавляем очки
           let value = this.questions[this.current].Click(index);
           this.score += value;
     
           let correct = -1;
     
           //Если было добавлено хотя бы одно очко, то считаем, что ответ верный
           if(value >= 1)
           {
               correct = index;
           }
           else
           {
               //Иначе ищем, какой ответ может быть правильным
               for(let i = 0; i < this.questions[this.current].answers.length; i++)
               {
                   if(this.questions[this.current].answers[i].value >= 1)
                   {
                       correct = i;
                       break;
                   }
               }
           }
     
           this.Next();
     
           return correct;
       }
     
       //Переход к следующему вопросу
       Next()
       {
           this.current++;
          
           if(this.current >= this.questions.length)
           {
               this.End();
           }
       }
     
       //Если вопросы кончились, этот метод проверит, какой результат получил пользователь
       End()
       {
           for(let i = 0; i < this.results.length; i++)
           {
               if(this.results[i].Check(this.score))
               {
                   this.result = i;
               }
           }
       }
    }
     
    //Класс, представляющий вопрос
    class Question
    {
       constructor(text, answers)
       {
           this.text = text;
           this.answers = answers;
       }
     
       Click(index)
       {
           return this.answers[index].value;
       }
    }
     
    //Класс, представляющий ответ
    class Answer
    {
       constructor(text, value)
       {
           this.text = text;
           this.value = value;
       }
    }
     
    //Класс, представляющий результат
    class Result
    {
       constructor(text, value)
       {
           this.text = text;
           this.value = value;
       }
     
       //Этот метод проверяет, достаточно ли очков набрал пользователь
       Check(value)
       {
           if(this.value <= value)
           {
               return true;
           }
           else
           {
               return false;
           }
       }
    }
    const results =
    [
       new Result("Вам многому нужно научиться", 0),
       new Result("Вы уже неплохо разбираетесь", 2),
       new Result("Ваш уровень выше среднего", 4),
       new Result("Вы в совершенстве знаете тему", 6)
    ];
     
    //Массив с вопросами
    const questions = [
			new Question('1. Как расшифровывается аббревиатура HTML?', [
				new Answer('How To Make Links', 0),
				new Answer('Hyper Text Markdown Language', 0),
				new Answer('HyperText Markup Language', 1),
				new Answer('Hyperlink Transfer Motion Location', 0),
			]),
			new Question('2. Для чего предназначен тег doctype?', [
				new Answer(
					'Тег предназначен для медицинских сайтов для указания специальности',
					0
				),
				new Answer('Для прикрепления в форме документов с типом .doc', 0),
				new Answer('Для указания сервера, на котором запускается сайт', 0),
				new Answer(
					'Для указания версии HTML, которая используется в документе',
					1
				),
			]),
			new Question(
				'3. Какие из перечисленных тэгов относятся к созданию таблицы?',
				[
					new Answer('<header> <body> <footer>', 0),
					new Answer('<table> <tr> <td>', 1),
					new Answer('<ul> <li> <tr> <td>', 0),
					new Answer('<form> <input> <button>', 0),
				]
			),
			new Question('4. Расшифруйте аббревиатуру CSS', [
				new Answer('Cascading Style Sheets', 1),
				new Answer('Case Style Says', 0),
				new Answer('Case Style Scholar', 0),
				new Answer('Cascad Solid Source', 0),
			]),
			new Question('5. Что такое наследование в CSS?', [
				new Answer('Такого понятия не существует в CSS', 0),
				new Answer('Передача свойств от элемента к ближайшим соседям', 0),
				new Answer('Получение данных из HTML', 0),
				new Answer('Передача свойств от предка к потомкам', 1),
			]),
			new Question('6. Как задаются внутренние отступы у элемента?', [
				new Answer('margin', 0),
				new Answer('padding', 1),
				new Answer('space', 0),
				new Answer('inner', 0),
			]),
			new Question('7. Расшифруйте аббревиатуру DOM', [
				new Answer('Digital Optical Modulation', 0),
				new Answer('Domestic Object Mode', 0),
				new Answer('Document Object Model', 1),
				new Answer('Domain Operation Method', 0),
			]),
			new Question('8. Что такое hoisting в JavaScript?', [
				new Answer('Это объект, который хранит все переменные и функции', 0),
				new Answer(
					'Это когда переменные и объявления функций перемещаются вверх своей области видимости до выполнения кода',
					1
				),
				new Answer(
					'Это услуга по предоставлению ресурсов для размещения информации на сервере',
					0
				),
				new Answer(
					'Это глобальная функция, которая отвечает за выполнение кода',
					0
				),
			]),
			new Question(
				'9. Какие ключевые слова используются для объявления переменной?',
				[
					new Answer('int, float, boolean', 0),
					new Answer('var, let, const', 1),
					new Answer('object, array, number', 0),
					new Answer('new, function, class', 0),
				]
			),
			new Question('10. Расшифруйте аббревиатуру API', [
				new Answer('Application Programming Interface', 1),
				new Answer('Analog Programm Interactive', 0),
				new Answer('Academy Provide Infinite', 0),
				new Answer('Analysis Pattern Indictor', 0),
			]),
		]
     
    //Сам тест
    const quiz = new Quiz(1, questions, results);
    const headElem = document.querySelector('.quiz__head')
    const buttonsElem = document.querySelector('#buttons')
    const pagesElem = document.querySelector('#pages')
    let arr = []
    Update();
    //Обновление теста
    function Update()
    {
       
       
			//Проверяем, есть ли ещё вопросы
			if (quiz.current < quiz.questions.length) {
				//Если есть, меняем вопрос в заголовке
                 arr.push(quiz.questions[quiz.current].answers)
				headElem.innerHTML = quiz.questions[quiz.current].text

				//Удаляем старые варианты ответов
				buttonsElem.innerHTML = ''

				//Создаём кнопки для новых вариантов ответов
				for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
					let btn = document.createElement('button')
					btn.className = 'button'

					btn.textContent = quiz.questions[quiz.current].answers[i].text

					btn.setAttribute('index', i)

					buttonsElem.appendChild(btn)
				}

				//Выводим номер текущего вопроса
				pagesElem.innerHTML = quiz.current + 1 + ' / ' + quiz.questions.length
                
				//Вызываем функцию, которая прикрепит события к новым кнопкам
				Init()
			} 
            
            else {
				//Если это конец, то выводим результат
				buttonsElem.innerHTML = ''
				headElem.innerHTML = quiz.results[quiz.result].text
                
                
				pagesElem.innerHTML =
					'Вы ответили правильно на ' +
					quiz.score +
					' из ' +
					quiz.questions.length
				for (let i = 0; i < quiz.questions.length; i++) {
		
					let questContainer = document.createElement('div')
					questContainer.classList.add('quesr-container')
                    headElem.appendChild(questContainer)
                    for (let n = 0; n < arr[i].length; n++){
                        let answersContainer = document.createElement('div')
                        answersContainer.classList.add('ansewrs-container')
                        if (arr[i][n].value === 1) {
								answersContainer.classList.add('active')
												}
                        answersContainer.textContent = arr[i][n].text
                        headElem.appendChild(answersContainer)
                        
                    }
                    questContainer.innerHTML = quiz.questions[i].text
					
				}
			}
			   
		}
        console.log(quiz)
     console.log(quiz.questions[quiz.current].answers.length)
    function Init()
    {
       //Находим все кнопки
       let btns = document.getElementsByClassName("button");
     
       for(let i = 0; i < btns.length; i++)
       {
           //Прикрепляем событие для каждой отдельной кнопки
           //При нажатии на кнопку будет вызываться функция Click()
           btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
       }
    }
     
    function Click(index)
    {
       //Получаем номер правильного ответа
       let correct = quiz.Click(index);
     
       //Находим все кнопки
       let btns = document.getElementsByClassName("button");
     
       //Делаем кнопки серыми
       for(let i = 0; i < btns.length; i++)
       {
           btns[i].className = "button button_passive";
       }
     
       //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
       if(quiz.type == 1)
       {
           if(correct >= 0)
           {
               btns[correct].className = "button button_correct";
           }
     
           if(index != correct)
           {
               btns[index].className = "button button_wrong";
           }
       }
       else
       {
           //Иначе просто подсвечиваем зелёным ответ пользователя
           btns[index].className = "button button_correct";
       }
     
       //Ждём секунду и обновляем тест
       setTimeout(Update, 5);
    }
}
