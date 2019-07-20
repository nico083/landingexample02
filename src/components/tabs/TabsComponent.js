import React from 'react';
import { isMobile } from '../../utils/browserUtils';
import './Tabs.scss';

export default class TabsComponent extends React.Component {
  state = { index: 0 };

  handleClick = index => {
    this.setState({ index });
  };

  render() {
    const { index } = this.state;
    const { components, tabs } = this.props;
    const mobileClass = isMobile ? 'Mobile' : '';
    return (
      <React.Fragment>
        {isMobile && (
          <div
            className={'Tabs tabs is-medium is-toggle is-fullwidth '.concat(
              mobileClass
            )}
          >
            <ul>
              {tabs.map((title, i) => (
                <li
                  key={i}
                  className={i === index ? 'is-active' : ''}
                  onClick={() => this.handleClick(i)}
                >
                  <img src={title} alt={i} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {components.map(
          (Component, i) => (index === i || !isMobile) && Component
        )}
      </React.Fragment>
    );
  }
}
