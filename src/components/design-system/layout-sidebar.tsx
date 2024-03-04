import * as React from 'react';

type LayoutSidebarProps = {
  main: JSX.Element;
  sidebar: JSX.Element;
}

const LayoutSidebar = (props: LayoutSidebarProps) => (
  <div className="flex space-between gap-8 md:flex-nowrap flex-wrap items-center">
    <div className="md:basis-2/3 basis-full">
      {props.main}
    </div>
    <div className="md:basis-1/3 basis-full">
      {props.sidebar}
    </div>
  </div>
);

export default LayoutSidebar;
