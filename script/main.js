let lang;

lang = prompt('Введите "ru" или "en"');

let i = new Date( )
i =  i.getDay()

let en = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

for ( i; i < en.length; ){
  console.log(en[i])
  break
}
console.log(i);

// const exmp = () => {
//   if ( i == en.length){
//     console.log(en[i]);
//   } else {
//     console.log('qween');
//   }
// }
// exmp()


// const chekDayRu = () => {
//   if ( i === 1) {
//     console.log('понедельник');
//   } else if (i === 2 ) {
//     console.log('вторник');
//   } else if ( i === 3 ) {
//     console.log('среда');
//   } else if ( i === 4 ) {
//     console.log('четверг');
//   } else if ( i === 5 ) {
//     console.log('пятница');
//   } else if ( i === 6 ) {
//     console.log('суббота');
//   } else if ( i === 0 ){
//     console.log('воскресенье');
//   }
  
// }
// // chekDayRu()

// const chakDayEn = () => console.log('English weekday');
// // chakDayEn()

// const change = () => {
//   if ( lang === 'ru' || lang === 'RU'){
//     chekDayRu()
//   } else if ( lang === 'en' || lang === 'EN' ){
//     chakDayEn()
//   }
// }
// change()