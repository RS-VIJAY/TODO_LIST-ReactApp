import React from "react";
import ItemsList from "./ItemsList";
const Content = ({items,handleCheck,handleDelete}) => {
  
  return (
    <>
      {items.length ? (
        <ItemsList
        items = {items}
        handleCheck = {handleCheck}
        handleDelete ={handleDelete}
        />  
      ) : (
        <p>Your List is empty</p>
      )}
    </>
  );
};

export default Content;
