import partial from './partial';
import reverseArgs from './reverseArgs';

export default function partialRight(fn, ...defaultArgs) {
  //   return (...args) => fn(...args, ...defaultArgs);
  //   return (...args) => reverseArgs(fn)(...defaultArgs.reverse(), ...args.reverse());
  //   return reverseArgs((...args) => reverseArgs(fn)(...defaultArgs.reverse(), ...args));
  return reverseArgs(partial(reverseArgs(fn), ...defaultArgs.reverse()));
}
