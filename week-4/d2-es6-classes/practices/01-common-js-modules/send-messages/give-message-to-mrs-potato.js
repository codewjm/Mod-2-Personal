// notice the file path is one dot because it is local
const sayHelloTo = require('./say-hello-to')

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");

module.exports = giveMessageToMrsPotato // this part is tricky. This was the last thing you did to stop the errors
