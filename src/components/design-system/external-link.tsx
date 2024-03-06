import * as React from 'react';

type ExternalLinkProps = {
  href: string;
}

const ExternalLink = (props: React.PropsWithChildren<ExternalLinkProps>) => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-blue-600 hover:text-blue-800"
  >
    {props.children}
  </a>
);

export default ExternalLink;
