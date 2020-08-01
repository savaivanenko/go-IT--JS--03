const countTotalSalary = function(employees) {
  // твой код
  const salarys = Object.values(employees)
  let totalSalary = 0;
  for (const salary of salarys){
    totalSalary += salary;
  }
  console.log(totalSalary);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400