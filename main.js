// function task1(a) {
// return `${a} typeof ${typeof a}`
// }
//
//
// console.log(task1(true));

// function task2(a) {
// return a*a
// }
//
// console.log(task2('4'));

// function task3(a,b,c) {
//     let arr = [];
// for (let i = 0;i < a.length || i < b.length || i < c.length;i++){
// arr = [...arr,a[i],b[i],c[i]]
// }
// return arr.join('')
// }console.log(task3('Bm', 'aa', 'tn'));

// function task4(a) {
// let b = a.split(' ');
//     return `${b[0][0]}.${b[1][0]}`
// }
//
// console.log(task4('Анастасия Черданцева'))


// function task5(name, city, region) {
//     return `Привет, ${name.join(' ')}! Добро пожаловать в ${city}, ${region}!`
//
// }
//
// console.log(task5(['Дмитрий', 'Серебров'], 'Ишим', 'Тюменская обл'));

// function task6(a) {
// if (a > 0){
//     return 'Positive'
// }else if (a === 0){
//     return 'Zero'
// }
// return 'Negative'
//
// }
//
// console.log(task6(0));

// let newStr = '';
// function task7(a) {
// for (let i = 0; i < a.length;i++){
//     if (a[i] === a[i].toLowerCase()){
//        newStr += a[i].toUpperCase()
//     }else {
//         newStr += a[i].toLowerCase()
//     }
// }
// }
//
// console.log(task7('HeLLo WoRLD'));
//
// console.log(newStr);


// function task8(a) {
// return a.id
// }
//
// console.log(task8({id: true}));

//
// function task9(a) {
// if (a.name.length % 2 === 0){
//     return 0
// }
// return 1
// }
//
// console.log(task9({name: 'alpha'}));


// function task10(a,b) {
// if (a > b){
//     return 1
// }else if (a < b){
//     return -1
// }
// return 0
// }
//
// console.log(task10(2,2));

// function task11(a) {
// if (a % 3 === 0 && a % 5 === 0){
//     return 'MasterYoda'
// }else if (a % 5 === 0){
//     return 'Yoda'
// }else if (a % 3 === 0){
//     return 'Master'
// }
// return a
// }
//
// console.log(task11(22));