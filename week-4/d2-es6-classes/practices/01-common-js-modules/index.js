// Your code here
const sayHelloTo = require('./send-messages/say-hello-to') // sayHelloTo could have been any other name but its good to stay consistent
const giveMessageToMrsPotato = require('./send-messages/give-message-to-mrs-potato')
// const { message1: msg1, message2: msg2, message3: msg3 } = require('./messages/index') //using curly braces must match curly on the other index file
const [msg1, msg2, msg3] = require('./messages/index')


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
