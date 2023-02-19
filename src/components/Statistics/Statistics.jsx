import { StatisticsItem } from './StatisticsItem';
import PropTypes from 'prop-types';

export function Statistics({ title = false, data }) {
  //   console.log(data);
  return (
    <section className="statistics">
      {title !== false ? <h2 className="title">{title}</h2> : null}
      <ul className="stat-list">
        {data.map(dataEl => (
          <li key={dataEl.id} className="item">
            <StatisticsItem dataEl={dataEl} />
          </li>
        ))}
        {/* <li className="item"></li> */}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
