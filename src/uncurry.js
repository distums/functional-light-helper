export default function uncurry(fn) {
  return function uncurried(...args) {
    return args.reduce((f, arg) => fn(arg), fn);
  };
}
