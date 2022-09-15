const fs = require("fs");

const files = fs.readdirSync("./lostrommel");
files.forEach(element => {
    const text = fs.readFileSync("./lostrommel/" + element);
    if (text != "Das ist leider kein Gewinn.") {
        console.log(text);
        console.log(element);
    }
});