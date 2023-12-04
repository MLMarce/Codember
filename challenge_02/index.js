// Mini Compiler Challenge

function compiler(str) {
    let entry = str.split('');
    let num = 0;
    let outPut ="";

    entry.map(char => {
        if(char == '#') {
            num += 1
        } else if(char == '@') {
            num -= 1
        } else if(char == '*') {
            num = num * num
        } else if(char == '&') {
            outPut += `${num}`
        }
    })
    return outPut;
}

console.log(compiler('&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'));