import React, { FC } from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { handleClick } from './helper/getDocsHelper';
import { MouseEvent } from 'react';

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
      {links.map((link, i) => (
        <li key={i}>
          <a
            href={link.url}
            onClick={(e) => {
              console.log('event target from navtree ', e);
              handleClick(e.nativeEvent, onLinkClicked);
              // onLinkClicked(link.text);
            }}
          >
            {link.text}
          </a>
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
