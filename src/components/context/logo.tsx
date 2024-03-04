import { Link } from 'gatsby-link';
import * as React from 'react';

type LogoProps = {
}

const Logo = (props: LogoProps) => (
  <Link className="text-3xl lowercase" to="/">
    Bea Esguerra
  </Link>
);

export default Logo;
