// functionality of this hook is to write to the console
/* eslint-disable no-console */
import * as React from 'react';
// need to import the module and types
/* eslint-disable import/no-duplicates */
import 'devtools-detect';
import { DevToolsEvent } from 'devtools-detect';
/* eslint-enable import/no-duplicates */

// Based on https://codepen.io/b1nary/pen/IdKth :)
let nyanTextIndex = 0;
// eslint-disable-next-line max-len
const nyanText = [['+      o     +              o      ', '    +             o     +       +  ', 'o          +                       ', '    o  +           +        +      ', '+        o     o       +        o  ', '-_-_-_-_-_-_-_,------,      o      ', '_-_-_-_-_-_-_-|   /\\_/\\            ', '-_-_-_-_-_-_-~|__( ^ .^)  +     +  ', '_-_-_-_-_-_-_-""  ""               ', '+      o         o   +       o     ', '    +         +                    ', 'o        o         o      o     +  ', '    o           +                  ', '+      +     o        o      +     '],
  // eslint-disable-next-line max-len
  ['+      o     +              +      ', '    o             o     o       +  ', 'o          +                       ', '    +  o           +        o      ', 'o        o     o       +        o  ', '_-_-_-_-_-_-_-,------,      +      ', '-_-_-_-_-_-_-_|   /\\_/\\            ', '_-_-_-_-_-_-_-|__( ^ .^)  o     +  ', '-_-_-_-_-_-_-_ ""  ""              ', '+      +         o   +       o     ', '    o         +                    ', '+        +         +      +     o  ', '    +           o                  ', '+      o     o        o      +     ']];
const nyan = () => {
  console.clear();
  console.log('SURPRISE! You have found the Easter egg!');
  console.log(nyanText[nyanTextIndex].join('\n'));
  console.log('Did you know you can also click the banner background to create bubbles?');
  if (nyanTextIndex === 0) { nyanTextIndex = 1; } else { nyanTextIndex = 0; }
};

export const useSurprise = () => {
  let timerId: undefined | number;
  const onDevToolsChange = (e: DevToolsEvent) => {
    if (e.detail.isOpen) {
      timerId = window.setInterval(nyan, 300);
    } else {
      window.clearInterval(timerId);
    }
  };
  React.useEffect(() => {
    window.addEventListener('devtoolschange', onDevToolsChange);
    return () => {
      // Type declaration currently does not have this defined
      window.removeEventListener('devtoolschange', onDevToolsChange as never);
      if (timerId) {
        window.clearInterval(timerId);
      }
    };
  });
};
