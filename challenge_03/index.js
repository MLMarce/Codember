import * as fs from "fs/promises";

function encryptionTest(spyEncryption) {
    let encryption = spyEncryption;
    let policy = encryption.split(':')[0];
    let key = encryption.split(':')[1];
    let minMax = policy.slice(0, -1);
    let min = minMax.split('-')[0];
    let max = minMax.split('-')[1];
    let letterKey = policy.slice(-1);

    let letterKeyArr = key.split('');
    let countLetterKey = 0;
    for(let i = 0; i < letterKeyArr.length; i++) {
        if( letterKeyArr[i] == letterKey) {
            countLetterKey += 1
        }
    }

    let result;
    if(countLetterKey >= Number(min) && countLetterKey <= Number(max)) {
        result = true
    } else {
        result = false
    }

    return result;
}

async function readFile(file) {
    try {
      const data = await fs.readFile(file, {encoding: 'utf-8'});
      return data.split("\n")
    } catch (error) {
      console.log(error);
    }
}

const arrSpyEncryption = await readFile('challenge_03/encryption_policies.txt');

function invalidKey() {
    let invalidKeyPosition = 0;

    for(let i = 0; i < arrSpyEncryption.length; i++) {
        let result = encryptionTest(arrSpyEncryption[i]);
        if(result == false) {
            invalidKeyPosition += 1
            if(invalidKeyPosition == 42) {
                console.log('the invalid key what is in position 42 is ' + arrSpyEncryption[i].split(': ')[1])
                return 'the invalid key what is in position 42 is ' + arrSpyEncryption[i].split(': ')[1];
            }
        }
    }
}

invalidKey()