const doThing = () => {
  return new Promise((resolve, reject) => {
    resolve(() => {
      console.log('Resolving');
      return "YADA";
    })
  })
}

doThing().then((response) => console.log(response()));

const anotherThing = () => {
  return Promise.resolve(1 === 1)
}

const yetAnotherThing = () => {
  return new Promise((resolve, reject) => {
    resolve(() => {
      console.log("hello")
      return 'I am the return value of the yetanotherthing promise'
    });
  })
};

const doofus = anotherThing();
const yoofus = yetAnotherThing();

yoofus.then((thing) => console.log('I am thing, being called:', thing()));

const tryAgain = Promise.resolve(yetAnotherThing().then((value) => console.log(value())));
console.log('Will this work?', tryAgain);

console.log('I am doofus', doofus);

// const doofus = doThing().then((response) => console.log(response()));

// const anotherThing = doofus;
// console.log(anotherThing);

// console.log(doofus);
