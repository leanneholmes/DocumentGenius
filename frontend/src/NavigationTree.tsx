import React, { FC } from 'react';
import { handleClick } from './helper/getDocsHelper';
import './docnavigation.css';

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
  onLinkClicked: (data: string) => void;
}

const NavigationTree: FC<NavigationTreeProps> = ({ data, onLinkClicked }) => {
  const renderLinks = (links: LinkType[]) => (
    <ul>
      <details>
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.url}
              onClick={(e) => {
                handleClick(e.nativeEvent, onLinkClicked);
              }}
            >
              {link.text}
            </a>
            {link.sub_links && renderLinks(link.sub_links)}
          </li>
        ))}
      </details>
    </ul>
  );
  const setIndex = (index: string) => {};
  return (
    <div className="navTree-container">
      {data.map((item, index) => (
        <div key={index}>
          <details>
            <summary>{item.title}</summary>
            {renderLinks(item.navigation_links)}
          </details>
        </div>
      ))}
    </div>
  );
};

export default NavigationTree;
