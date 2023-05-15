import React, { FC } from 'react';

type LinkType = {
  url: string;
  text: string;
  sub_links?: LinkType[];
};

type DataType = {
  title: string;
  navigation_links: LinkType[];
};

interface NavigationTreeProps {
  data: DataType[];
}

const NavigationTree: FC<NavigationTreeProps> = ({ data }) => {
  const renderLinks = (links: LinkType[]) => (
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          <a href={link.url}>{link.text}</a>
          {link.sub_links && renderLinks(link.sub_links)}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          {renderLinks(item.navigation_links)}
        </div>
      ))}
    </div>
  );
};

export default NavigationTree;
