/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const openClosers = {
        ']': '[',
        '}': '{',
        ')': '('
    };

    const closers = Object.keys(openClosers);

    // recorro el string
    // Si detecto que se abre un ( o { o [ tengo que chequear que se cierre.
    // para que se cierre tiene que haber el contrario y el relleno con ese contrario tiene que tener validez
    // para que tenga validez, tiene que abrirse y cerrarse cada apertura
    // puede contener cosas adentro pero tiene que cerrarse, asi que busco el cierre.
    // si empieza con cierre es invalido
    let stack = "";
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        if (closers.includes(current)) {
            if (stack[stack.length - 1] != openClosers[current]) return false;
            else {
                stack = stack.slice(0, -1);
            }
        }
        else {
            stack += current;
        }

    }

    return true;
};

console.log(isValid("([])")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
