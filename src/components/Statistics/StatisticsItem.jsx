import PropTypes from 'prop-types';

export function StatisticsItem({ dataEl: { label, percentage } }) {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </>
  );
}

StatisticsItem.propTypes = {
  dataEl: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
