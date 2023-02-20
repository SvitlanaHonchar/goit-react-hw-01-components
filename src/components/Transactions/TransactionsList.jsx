import { Transaction } from './Transaction';
import PropTypes from 'prop-types';
import { StyledHead, StyledRows } from './Transactions.styled';

export function TransactionsList({ transactions }) {
  return (
    <table className="transaction-history">
      <StyledHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </StyledHead>

      <tbody>
        {transactions.map(transaction => (
          <StyledRows key={transaction.id}>
            <Transaction transaction={transaction} />
          </StyledRows>
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
