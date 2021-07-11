import React from 'react';
import PropTypes from 'prop-types';
import TableTemplate from './Table-template';
import Styles from './Transaction-history.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <div className={Styles.container}>
      <table className={Styles.table}>
        <thead>
          <tr className={Styles.head}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={Styles.tbody}>
          {transactions.map(transaction => {
            return (
              <TableTemplate
                key={transaction.id}
                id={transaction.id}
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
