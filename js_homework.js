1)  'number' + 3 + 3; = 'number33'//  в данному прикладі відбувається Конкатенація, тобто поєднанання даних, тобто стрінга  'number' поєднується з цифрами, але без додавання.

2)  null + 3 = 3// в данному випадку відбувається арефмитична дія, 0 додається до 3.  null = 0, тобто ми маєио 0+3=3.

3)  5 && "qwerty" = qwerty// В данному випадку число 5 вважається правильним (truthy), і тому вираз повертає рядок "qwerty"

4)  +'40' + +'2' + "hillel";= '42hillel'//  В данному випадку +'40' + +'2'-перетворюються на рядки з числами, тому в підсумку маємо 40+2=42, а далі відбувається конкатинація з "Hillel"  тому маємо відповідь: 42hillel

5)  '10' - 5 === 6; = false// В данному випадку відбувається прирівняння до значення, тобто:  5-не прирівнюється до 6, тому відповідь=false// 

6)  true + false = 1// В данному випадку   true-1, false-0,  використовується двійкова система обчислення 0 та 1.

7)  '4px' - 3 = NaN// В данному випадку JS не розуміє які данні знаходяться в дужках, тому перетворити данні на число не взмозі.

8)  '4' - 3 = 1 //В данному випадку  відбувається віднімання, так як JS намагається конвертувати данні в дужках в число, тому в нас виходить 4-3

9)  '6' + 3 ** 0; = 61// В данному випадку відбувається підняття до ступеня 0, яке в свою чергу перетвлорює завжди 0 на 1, а потім відбувається конкатенація.

10)  12 / '6' = 2// така сама ситуація як у прикладі 8. Відбувається ділення.

11)  '10' + (5 === 6); = 10false // В данному випадку у нас відбувається порівяння (5===6),тобто 5 не рівне 6,  а далі відбувається конкатенація з 10.

12)  null == '' = false//В данному випадку JS як обов'язкове правило прирівнює типи данних  null, NaN< undefined...до false ,  false бо null може бути true тільки при порівнянні з undefined. Всі інщі випадки - false.

13)  3 ** (9 / 3);=27// В данному випадку ми отримаємо: 9/3=3,далі ми маємо 3**3, тобто 3в 3 степні =9, 9*3=27.

14)  !!'false' == !!'true' = true//  В данному випадку йде перетворення значень, так як !!false-це не пусте значення, воно = true, так само і !!true=true

15)  0 || '0' && 1 = 1// Першим по пріоритетності обчислюємо '0'&&1=1?, далі маємо 0||1, далі оператор повертає вище значення, яке є 1

16)  (+null == false) < 1; = false// В данному випадку в дужках ми маємо значення true, далі true перетворюється на 1. далі ми маємо вираз 1<1, тобто 1 не може бути більше 1

17)  false && true || true = true// Згідно таблиці логічних рішень маємо: спочатку розраховуємо false&&true=false, оскільки оператор && вищий по пріоритетності, далі  false||true=true

18)  false && (false || true);=false//В данному випадку результат (false || true)=true (згідно таблиці логічних значень||), далі маємо false&&true, згідно таблиці логічних значень=false

19)  (+null == false) < 1 ** 5; = false// В данному випадку в дужках ми маємо значення true, далі true перетворюється на 1. далі 1в 5 степені =1,далі ми маємо вираз 1<1, тобто 1 не може бути більше 1
