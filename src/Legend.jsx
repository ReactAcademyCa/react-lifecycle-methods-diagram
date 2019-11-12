import React from 'react';
import PropTypes from 'prop-types';

import T from './i18n';

import Phase from './legendElements/Phase';

export default function Legend({ advanced, reactVersion }) {
  if (reactVersion === 'hooks') {
    return advanced ? (
      <>
        <h2 className='hidden'>Phases</h2>
        <Phase name='Render' row={1} rowspan={2}>
          Pure, no side effects. (Lazy init: functions passed to useState and
          useReducer.)
        </Phase>
        <Phase name='Layout' row={3} rowspan={4}>
          DOM is generated, screen not yet updated.
        </Phase>
        <Phase last name='Commit' row={7} rowspan={2}>
          Can work with DOM, run side effects, schedule updates.
        </Phase>
      </>
    ) : (
      <>
        <h2 className='hidden'>Phases</h2>
        <Phase name='Render' row={1} rowspan={1}>
          Pure, no side effects. May be paused, aborted or restarted by React.
        </Phase>
        <Phase name='Reconciliation' row={2} rowspan={1}>
          Handled by React
        </Phase>
        <Phase last name='Commit' row={3} rowspan={2}>
          Can work with DOM, run side effects, schedule updates.
        </Phase>
      </>
    );
  } else {
    return (
      <>
        <h2 className='hidden'>Phases</h2>
        <Phase name='Render' row={1} rowspan={advanced ? 4 : 2}>
          Pure and has no side effects. May be paused, aborted or restarted by
          React.
        </Phase>
        {advanced && (
          <Phase name='Pre-commit' row={5} rowspan={1}>
            Can read the DOM.
          </Phase>
        )}
        <Phase last name='Commit' row={advanced ? 6 : 3} rowspan={2}>
          Can work with DOM, run side effects, schedule updates.
        </Phase>
      </>
    );
  }
}

Legend.propTypes = {
  advanced: PropTypes.bool,
};
