export function formatResult(screen, value) {
  switch(value) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      return screen + value;
    case '0':
      return screen === '0' ? screen : screen + value;
    default:
      return screen;
  }
}