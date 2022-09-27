function extractFile(input){
    let tokens = input.split('\\');
    let filename = tokens.pop();

    let index = filename.lastIndexOf('.');
    let name = filename.substring(0,index);
    let extension = filename.substring(index + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\template.bak.pptx')
//extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')