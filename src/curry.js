// curry和partial apply区别：curry作用于形参（parameter），而partial apply应用于实参（arguments）
export default function curry(fn, arity = fn.length) {
  return (function curryCreator(storedArgs) {
    return function curried(nextArg) {
      const args = [...storedArgs, nextArg];
      if (args.length >= arity) return fn(...args);
      return curryCreator(args);
    };
  })([]);
}

export function curryWithClosureVer(fn, arity = fn.length) {
  const cachedArgs = [];
  function curried(nextArg) {
    cachedArgs.push(nextArg);
    if (cachedArgs.length >= arity) return fn(...cachedArgs);
    return curried;
  }
  return curried;
}
