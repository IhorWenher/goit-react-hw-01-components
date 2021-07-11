import React from 'react';
import PropTypes from 'prop-types';
import TableTemplate from './Table-template';

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
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
  transactions: PropTypes.array.isRequired,
};

export default TransactionHistory;
