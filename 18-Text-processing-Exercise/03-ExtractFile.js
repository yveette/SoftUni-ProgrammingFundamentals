function extractFile(text) {
    let allFile = text.split('\\');
    let filename = allFile.pop();

    let index = filename.lastIndexOf('.');
    let name = filename.substring(0, index);
    let extention = filename.substring(index + 1);

    console.log(`File name: ${name}\nFile extension: ${extention}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
// File name: Template
// File extension: pptx

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
// File name: LinkedList
// File extension: cs

extractFile('C:\\Projects\\Data-Structures\\template.bak.pptx');
// File name: template.bak
// File extension: pptx