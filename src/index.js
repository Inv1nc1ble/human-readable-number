
module.exports = function toReadable (number) {
    let arr = 
    [
        ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
        
    ];

    let result = '';

    if (number == 0 && result == '') {
        return 'zero';
    }

    if (number / 100 >= 1) {
        result += `${arr[0][Math.floor(number / 100)]} hundred`;

        number = number % 100;
    }

    if (number > 19) {
        result += ` ${arr[1][Math.floor(number / 10) - 2]} ${arr[0][number % 10]}`;
    } else {
        result += ` ${arr[0][number]}`;
    }

    return result.trim();

};