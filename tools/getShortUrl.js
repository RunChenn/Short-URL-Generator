function getRandom(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
};

function getShortUrl () {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = lowerCaseLetters.toUpperCase();
    const numbers = '1234567890';
    const allPath = lowerCaseLetters + upperCaseLetters + numbers;

    let shortPath = ''

    for (let i = 0; i < 5; i++) {
        shortPath += getRandom(allPath);
    }

    return shortPath;
};

module.exports = getShortUrl;