import React from 'react';
import { useDispatch } from 'react-redux';
import { statusChecked } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="btn update-progress-btn"
      onClick={() => dispatch(statusChecked())}
    >
      Check Status
    </button>
  );
};
export default Categories;
