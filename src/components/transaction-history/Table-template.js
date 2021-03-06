import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Table-template.module.css';

const TableTemplate = ({ id, type, amount, currency }) => {
  return (
    <tr className={Styles.rou} key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TableTemplate.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TableTemplate;
