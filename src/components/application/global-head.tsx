import * as React from 'react';

type GlobalHeadProps = {
}

const GlobalHead = (props: React.PropsWithChildren<GlobalHeadProps>) => (
  <>
    <html lang="en" />
    {props.children}
  </>
);

export default GlobalHead;
