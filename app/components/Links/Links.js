import React from 'react';

const Links = ({ links }) => {
  const linksItems = links.slice(0, links.length - 1).map((link) => (
    <span key={link.name}>
      <a href={link.url}>{link.name}</a> |
    </span>
  ));
  const lastLink = links[links.length - 1];
  const lastLinkItem = (
    <span key={lastLink.name}>
      <a href={lastLink.url}>{lastLink.name}</a>
    </span>
  );
  return (
    <p>
      {linksItems}
      {lastLinkItem}
    </p>
  );
};

export default Links;
