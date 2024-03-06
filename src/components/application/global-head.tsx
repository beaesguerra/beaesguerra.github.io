import * as React from 'react';
import appleTouchIcon from '../../images/favicon_io/apple-touch-icon.png'
import favIcon32 from '../../images/favicon_io/favicon-32x32.png'
import favIcon16 from '../../images/favicon_io/favicon-16x16.png'

type GlobalHeadProps = {
}

const GlobalHead = (props: React.PropsWithChildren<GlobalHeadProps>) => (
  <>
    <html lang="en" />
    <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
    <link rel="icon" type="image/png" sizes="32x32" href={favIcon32} />
    <link rel="icon" type="image/png" sizes="16x16" href={favIcon16} />
    {props.children}
  </>
);

export default GlobalHead;
