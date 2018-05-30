export default function spreadArgs(fn) {
  return argsArr => fn(...argsArr);
}
