import React from 'react';
import PropTypes from 'prop-types';

import Phase from './legendElements/Phase';

const Legend = ({ advanced, reactVersion }) => {
  if (reactVersion === "hooks") {
    return (advanced ? (
      <>
        <h2 className="hidden">
          Phases
        </h2>
        <Phase name="Render" row={1} rowspan={2}>
          Pure, no side effects. Lazy init are functions passed to useState and useReducer. 
        </Phase>
        <Phase name="Layout" row={3} rowspan={4}>
          Can modify the DOM, but blocks the screen refresh.
        </Phase>
        <Phase last name="Commit" row={7} rowspan={2}>
          Can work with DOM, run side effects, schedule updates.
        </Phase>
      
      </>
    ) : (
      <>
        <h2 className="hidden">
            Phases
        </h2>
          <Phase name="Render" row={1} rowspan={1}>
            Pure, no side effects. May be paused, aborted or restarted by React.
        </Phase>
          <Phase name="Reconciliation" row={2} rowspan={1}>
            Handled by React
        </Phase>
          <Phase last name="Commit" row={3} rowspan={2}>
            Can work with DOM, run side effects, schedule updates.
        </Phase>
      </>
      ));
  }


  return (advanced ? (
    <>
      <h2 className="hidden">
        Phases
    </h2>
      <Phase name="Render" row={1} rowspan={4}>
        Pure and has no side effects. May be paused, aborted or restarted by React.
    </Phase>
      <Phase name="Pre-commit" row={5} rowspan={1}>
        Can read the DOM.
    </Phase>
      <Phase last name="Commit" row={6} rowspan={2}>
        Can work with DOM, run side effects, schedule updates.
    </Phase>
    </>
  ) : (
      <>
        <h2 className="hidden">
          Phases
    </h2>
        <Phase name="Render" row={1} rowspan={2}>
          Pure and has no side effects. May be paused, aborted or restarted by React.
    </Phase>
        <Phase last name="Commit" row={3} rowspan={2}>
          Can work with DOM, run side effects, schedule updates.
    </Phase>
      </>
    ));
}

Legend.propTypes = {
  advanced: PropTypes.bool,
};

export default Legend;
