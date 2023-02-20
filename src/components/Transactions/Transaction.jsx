import PropTypes from 'prop-types';
import { StyledItems } from './Transactions.styled';

export function Transaction({ transaction: { type, amount, currency } }) {
  return (
    <>
      <StyledItems>{type}</StyledItems>
      <StyledItems>{amount}</StyledItems>
      <StyledItems>{currency}</StyledItems>
    </>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
