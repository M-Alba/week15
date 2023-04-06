# week15

Ответы на вопросы:

1. Из скольких частей состоит основной цикл?
   Цикл состоит из условия и тела. Тело цикла — это код, который выполняется, пока выполняется условие цикла.

2. Какое количество уровней вложенности могут иметь циклы?
   Циклы можно вкладывать друг в друга большое количество раз. Это зависит от конкретной задачи и предметной области.

3. Если switch находится внутри функции, какая инструкция может использоваться для выхода из него?
   Инструкция return.
4. Можно ли пропускать части for? Что получится, если написать for(;;)?
   Любая часть for может быть пропущена.
   Если написать for(;;), то будет бесконечный цикл.

5. Самостоятельно разберитесь, как работает цикл while и приведите два примера кода с его использованием.
   Цикл while имеет следующий синтаксис:
   while (condition) {
   // код
   // также называемый "телом цикла"
   }

   Код из тела цикла выполняется, пока условие condition истинно.
   Например, цикл ниже выводит i, пока i < 3:
   let i = 0;
   while (i < 3) { // выводит 0, затем 1, затем 2
   alert( i );
   i++;
   }

6. Как можно принудительно остановить выполнение цикла?
   Можно выйти из цикла в любой момент с помощью специальной директивы break.
7. При помощи цикла for выведите чётные числа от 2 до 10.
   for (let i = 2; i <= 10; i++) {
   if (i % 2 == 0) {
   alert( i );
   }
   }

8. Если тело цикла состоит лишь из одной инструкции, мы можем опустить фигурные скобки {…}?
   Ответ: Да, можем.

9. Что выведет цикл?
   for (let i = 0; i < 3; i++) {
   console.log(i);
   }
   Ответ:
   0
   1
   2

10. Оба цикла выводят в консоль одинаковые значения или нет?
    let i = 0;
    while (++i < 5) console.log(i);

    Выводит:
    1
    2
    3
    4

    let i = 0;
    while (i++ < 5) console.log(i);

    Выводит:
    1
    2
    3
    4
    5
