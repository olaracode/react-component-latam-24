import React from "react";

const ListItem = ({ content, contador }) => {
  //   console.log(props);
  //   const { content } = props;
  //   console.log(content);
  return (
    <li className="list-group-item">
      {content} {contador}
    </li>
  );
};

export default ListItem;
