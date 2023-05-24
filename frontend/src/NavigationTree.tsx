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
  onSourceDocLinkClicked: (data: string) => void;
}

const NavigationTree: FC<NavigationTreeProps> = ({
  data,
  onSourceDocLinkClicked,
}) => {
  const renderLinks = (links: LinkType[]) => (
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          {link.sub_links && link.sub_links.length > 0 ? (
            <details>
              <summary>
                {' '}
                <a
                  href={link.url}
                  onClick={(e) => {
                    handleClick(e.nativeEvent, onSourceDocLinkClicked);
                  }}
                >
                  {link.text}
                </a>
              </summary>
              {renderLinks(link.sub_links)}
            </details>
          ) : (
            <a
              className="nested"
              href={link.url}
              onClick={(e) => {
                handleClick(e.nativeEvent, onSourceDocLinkClicked);
              }}
            >
              {link.text}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
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
