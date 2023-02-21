import { StatisticsItem } from './StatisticsItem';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ title, data }) {
  //   console.log(data);
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {data.map(dataEl => (
          <li key={dataEl.id} className={css.item}>
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

// function setBg() {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   const itemEl = document.querySelector('.Statistics_item__Jx88-');
//   itemEl.style.backgroundColor = '#' + randomColor;
//   // color.innerHTML = '#' + randomColor;
// }
