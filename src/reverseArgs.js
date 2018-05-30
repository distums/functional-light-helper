export default function reverseArgs(fn) {
  return (...args) => fn(...args.reverse());
}
