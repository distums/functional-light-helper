export default function gatherArgs(fn) {
  return (...args) => fn(args);
}
