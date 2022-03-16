import React from 'react';

type PageTitleProps = {
  title: string;
};

const PageTitle: React.FC<PageTitleProps> = React.memo(({ title }) => {
  return <h1 className="display-5 p-3 mt-0 mb-0">{title}</h1>;
});

export default PageTitle;
