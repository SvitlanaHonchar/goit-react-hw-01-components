import { Transaction } from './Transaction';
import PropTypes from 'prop-types';

export function TransactionsList({ transactions }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <Transaction transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
