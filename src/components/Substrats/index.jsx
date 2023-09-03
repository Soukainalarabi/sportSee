import React from 'react';
import PropTypes from 'prop-types';

function Substrats({ icon, title, keyData }) {
  return (
    <div className={title}>
      <img src={icon} alt="" style={{ width: 60, height: 60 }} />
      <div className={`text-${title}`}>
        <p>
          {' '}
          <strong>
            {' '}
            {keyData}
          </strong>
        </p>

        <p>{title}</p>
      </div>

    </div>
  );
}
Substrats.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  keyData: PropTypes.string,
};
Substrats.defaultProps = {
  icon: '',
  title: '',
  keyData: '',
};
export default Substrats;
