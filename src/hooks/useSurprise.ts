/* eslint-disable no-console */
import * as React from 'react';
import 'devtools-detect';

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDevToolsChange = (e: any) => {
    if (e.detail.isOpen) {
      timerId = window.setInterval(nyan, 300);
    } else {
      window.clearInterval(timerId);
    }
  };
  React.useEffect(() => {
    window.addEventListener('devtoolschange', onDevToolsChange);
    return () => {
      window.removeEventListener('devtoolschange', onDevToolsChange);
      if (timerId) {
        window.clearInterval(timerId);
      }
    };
  });
};
