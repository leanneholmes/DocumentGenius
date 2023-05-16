import React from 'react';

const NavigationTree = (props: { data: , onLinkClicked : any }) => {
  const renderLinks = (links: any[]) => (
    <ul>
      {links.map((link: { url: string | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; sub_links: any; }, i: React.Key | null | undefined) => (
        <li key={i}>
          <a href={link.url}>{link.text}</a>
          {link.sub_links && renderLinks(link.sub_links)}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {props.data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          {renderLinks(item.navigation_links)}
        </div>
      ))}
    </div>
  );
}