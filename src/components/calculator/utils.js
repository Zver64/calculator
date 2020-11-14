export function formatResult(screen, value) {
  switch(value) {
    case 'CE':
      return '';
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '(':
    case ')':
      return screen + value;
    case '.':
      return /\.\d*$/.test(screen) ? screen : screen + value;
    case '0':
      return screen === '0' ? screen : screen + value;
    case '-':
      if(!screen) {
        return value;
      }
      if(/[^\.\d]$/.test(screen[screen.length - 1])) {
        return screen + '(' + value;
      }
      return screen + value;
    case '+':
    case '*':
    case '/':
    case '^':
      return (screen && /[\+\*\/\^]/.test(screen[screen.length - 1])) ? screen.replace(/.$/, value) : screen + value;
    case '<':
      return screen ? screen.slice(0, screen.length - 1) : screen;
    case '=':
      return getResult(screen);
    default:
      console.log(value, screen[screen.length - 1], screen[screen.length - 1] === value, value === '-');
      return screen;
  }
}

function minusReplacer(match, p1, p2, offset, string ) {
  console.log(match, offset, string, string[offset - 1]);
  if(offset) {
    if(string[offset - 1] !== '-') {
      return '-' + match;
    }
    return match;
  }
  return '-' + match;
}

function getResult(str) {
  const toEval = str.replace(/\^/g, '**');
  console.log('toEval: ', toEval);
  try {
    return eval(toEval);
  } catch {
    return str;
  }
}