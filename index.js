const Tesseract = require('tesseract.js');
const fs = require('fs');

const rename_img = (count)=>{
Tesseract.recognize(
    `./imgs/Data Set ${count}-01.png`,
    'eng',
    { logger: m => console.log(m) }
).then(({ data: { text } }) => {
    console.log(text);
    const new_name = text.replace(/[^a-zA-Z0-9.,-]/g, '-')+'.png';
    console.log(new_name)
    const oldFileName = `./imgs/Data Set ${count}-01.png`;
    const newFileName = './imgs/'+new_name;
    fs.rename(oldFileName, newFileName, (err) => {
        if (err) {
            console.error('Error renaming file:', err);
        } else {
            console.log('File renamed successfully!');
        }
    })

});
}
for (let counter = 281; counter <= 302; counter++) {
    rename_img(counter);
}

