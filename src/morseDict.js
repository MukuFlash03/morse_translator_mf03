const dictEng = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    " ": "/",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    "\"": ".-..-.",
    "'": ".----.",
    "@": ".--.-.",
    "%": "-..-.-----"
}

const dictMor = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '/': ' ',
    '.-.-.-': '.',
    '--..--': ',',
    '..--..': '?',
    '-.-.--': '!',
    '-..-.': '/',
    '-.--.': ')',
    '.-...': '&',
    '---...': ':',
    '-.-.-.': ';',
    '-...-': '=',
    '.-.-.': '+',
    '-....-': '-',
    '..--.-': '_',
    '.-..-.': '"',
    '.----.': "'",
    '.--.-.': '@',
    '-..-.-----': '%'
}

// export { dict as morseDict }; // With sourceType: module


 exports.engDict = dictEng;
 exports.morseDict = dictMor;





// Preparing punctuation morsedict using forEach and map array methods

/*

const symbol = [
    'A','B','C','D','E',
    'F','G','H','I','J',
    'K','L','M','N','O',
    'P','Q','R','S','T',
    'U','V','W','X','Y','Z',
    '1','2','3','4','5',
    '6','7','8','9','0'," ",
    '.', ',', '?', '!', 
    '/', '(', ')', '&', 
    ':', ';', '=', '+', 
    '-', '_', '"', "'", 
    '@', '%'
    ];
    
    const morse = [
        '.-','-...','-.-.','-..','.',
        '..-.','--.','....','..','.---',
        '-.-','.-..','--','-.','---',
        '.--.','--.-','.-.','...','-',
        '..-','...-','.--','-..-','-.--','--..',
        '.----','..---','...--','....-','.....',
        '-....','--...','---..','----.','-----',"/",
        '.-.-.-', '--..--', '..--..', '-.-.--',
        '-..-.', '-.--.', '-.--.', '.-...', 
        '---...', '-.-.-.', '-...-', '.-.-.', 
        '-....-', '..--.-', '.-..-.', '.----.', 
        '.--.-.', '-..-.-----',
    ];
    
    
    console.log("ForEach");
    symbol.forEach((element,index) => console.log(`"${element}": "${morse[index]}",`)); // English to Morse
    console.log('\n');
    morse.forEach((element,index) => console.log(`"${element}": "${symbol[index]}",`)); // Morse to English
    
    
    let symbolDict = {};
    let morDict = {};
    
    console.log("\n\nMap");
    symbol.map((item,index) => {
        symbolDict[item] = morse[index];
    });

    morse.map((item,index) => {
        morDict[item] = symbol[index];
    });

    console.log(symbolDict);
    console.log('\n');
    console.log(morDict);

    console.log("\n");



    // Generating csv list of symbols and morse codes

    let alpha = [];
    let morAlp = [];
    for (let i = 48; i <= 57; i++) {
        alpha.push(`'${String.fromCharCode(i)}'`);
    }
    console.log(alpha.join(','));
    
    for (let key in dictEng) {
        morAlp.push(`'${dictEng[key]}'`);
    };
    console.log(morAlp.join(','));

    */