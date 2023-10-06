import React, { Fragment } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, editItem, removeItem }) => (
  <Fragment>
    {items.map(({ id, title }) => (
      <article key={id} className="grocery-item">
        <p className="title">{title}</p>
        <div className="btn-container">
          <button
            type="button"
            className="edit-btn"
            onClick={() => editItem(id)}
          >
            <FaEdit />
          </button>
          <button
            type="button"
            className="delete-btn"
            onClick={() => removeItem(id)}
          >
            <FaTrash />
          </button>
        </div>
      </article>
    ))}
  </Fragment>
);

export default List;
