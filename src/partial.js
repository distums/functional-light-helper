export default function partial(fn, ...defaultArgs) {
  return (...restArgs) => fn(...defaultArgs, ...restArgs);
}
