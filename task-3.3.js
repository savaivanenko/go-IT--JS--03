const findBestEmployee = function(employees) {
  // твой код

let tasks = 0;
let nameBestEmployee;
  for (const employee in employees){

    if (employees[employee] > tasks){
      tasks = employees[employee]
      nameBestEmployee = employee
    }
  }
  console.log(nameBestEmployee +' - '+ tasks);
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
    ky: 0,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux