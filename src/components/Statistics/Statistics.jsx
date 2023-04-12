import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={css.statistics}>Good: {good}</p>
      <p className={css.statistics}>Neutral: {neutral}</p>
      <p className={css.statistics}>Bad: {bad}</p>
      <p className={css.statistics}>Total: {total}</p>
      <p className={css.statistics}>
        Positive feedback: {Math.ceil(positivePercentage)}%
      </p>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
