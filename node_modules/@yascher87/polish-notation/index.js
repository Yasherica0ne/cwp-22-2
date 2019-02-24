const config = require('./package.json');
console.log(`Welcome! version: ${config.version}`)
const polish_recursive = (str) => {
    let stack = str.split(' ');
    const count = stack.length;
    if (count > 1) {
        const signs = ['-', '+', '*', '/'];
        for (let i = 0; i < count; i++) {
            if (signs.includes(stack[i])) {
                if (i < 2) { return 'error'; }
                const sign = stack[i];
                let intermRes;
                let operand1 = parseInt(stack[i - 1]);
                let operand2 = parseInt(stack[i - 2]);
                switch (sign) {
                    case '-': intermRes = operand2 - operand1; break;
                    case '+': intermRes = operand2 + operand1; break;
                    case '*': intermRes = operand2 * operand1; break;
                    case '/': intermRes = operand2 / operand1; break;
                }
                stack[i] = intermRes;
                stack.splice(i - 2, 2);
                break;
            }
        }
        if (count === stack.length) { return 'error'; }

        str = polish_recursive(stack.join(' '));
    }
    return (str);
}

module.exports = polish_recursive;