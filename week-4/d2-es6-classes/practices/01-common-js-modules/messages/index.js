const message1 = "You are looking very spudly today!";
const message2 = "There's a good deal on mattresses tomorrow.";
const message3 = "Do you like to do things in unnecessarily complicated ways?";

// module.exports = { message1, message2, message3 } // using curly braces must match curly on the messages/index file
module.exports = [ message1, message2, message3 ] // be careful when using arrays because you are referencing by index (remember: objects are unordered)
