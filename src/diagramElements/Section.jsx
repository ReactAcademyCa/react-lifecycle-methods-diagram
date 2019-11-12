import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'merge-class-names';

import './Section.less';

import T from '../i18n';

import Subsection from './Subsection';

import Method from './Method';
import Initiator from './Initiator';

export default class Section extends Component {
  static propTypes = {
    advanced: PropTypes.bool,
    children: PropTypes.node,
    col: PropTypes.number.isRequired,
    colspan: PropTypes.number,
    name: PropTypes.string.isRequired,
    hooks: PropTypes.bool
  };

  static defaultProps = {
    colspan: 1,
  }

  renderChildren() {
    const { children, col: sectionCol } = this.props;

    // If we're creating a section containing subsections, we don't need to create one.
    if (!children.find(el => el.type === Method || el.type === Initiator)) {
      return React.Children.map(
        children,
        child => React.cloneElement(
          child,
          Object.assign(
            { sectionCol },
            this.props,
            child.props,
          ),
        ),
      );
    }

    return (
      <Subsection {...this.props} />
    );
  }

  render() {
    const {
      advanced, col, colspan, name, hooks
    } = this.props;

    const gridColumn = `${col + 1} / span ${colspan}`;

    return (
      <>
        <section
          className={mergeClassNames('Section', advanced && 'Section--advanced', hooks && 'Section__hooks')}
          style={{
            gridColumn,
            gridRow: advanced ? (hooks ? '1 / span 26' : '1 / span 23')  : '1 / span 15',
          }}
        />
        <div
          className={mergeClassNames('Section__highlight', advanced && (hooks ? 'Section__highlight--advanced_hooks' : 'Section__highlight--advanced'))}
          style={{
            gridColumn,
            gridRow: advanced ? (hooks ? '8 / span 19' : '16 / span 8') : (hooks ? '5 / span 11' : '8 / span 8'),
          }}
        />
        <h3
          className="Section__title"
          style={{
            gridColumn,
            gridRow: 1,
          }}
        >
          <T>
            {name}
          </T>
        </h3>
        {this.renderChildren()}
      </>
    );
  }
}
