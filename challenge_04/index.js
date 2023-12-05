import * as fs from "fs/promises";

async function readFile(){
    try {
        const data = await fs.readFile('challenge_04/files_quarantine.txt', {encoding: 'utf-8'});
        return data.split('\n');
    } catch(error) {
        throw error
    }
}
const arrFiles = await readFile();

function realFile(file) {
        let nameFile = file.split('-')[0]
        let checksum = file.split('-')[1].slice(0, -1)
        let arrCharOfNameFile = nameFile.split('');
        let finalStr = '';
        for(let i = 0; i < arrCharOfNameFile.length; i++) {
            let arrCharFiltered = arrCharOfNameFile.filter(char => char == arrCharOfNameFile[i])
            if(arrCharFiltered.length == 1) {
                finalStr += arrCharOfNameFile[i]
            }
        }
        if(checksum === finalStr) {
            return {status: true, fileChecksum: checksum}
        } else {
            return false
        }       
}

function fileOnPosition33() {
    let fileRealNumber = 0;
    for(let i = 0; i <arrFiles.length; i++) {
        let {status, fileChecksum} = realFile(arrFiles[i])
        
        if(status == true) {
            fileRealNumber += 1;
            if(fileRealNumber == 33) {
                return "the number in position 33 is " + fileChecksum
            }
        }
    }
}
console.log(fileOnPosition33())
