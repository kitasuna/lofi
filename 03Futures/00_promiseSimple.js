/*
 * Example from:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
})

myFirstPromise.then((result) => {
  console.log(result)
})
