import React from 'react';
import TilesContainer from '../components/tiles/TilesContainer';
import SearchField from '../components/search-field/SearchField';
import Header from '../components/header/HeaderComponent';

export default class Home extends React.Component {

  tilesTitle = (title) => {
    return (
      <div className="Title has-text-centered is-12" >
        <h2 className="title is-6">{title}</h2>
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.tilesTitle('SHOP WOMEN')}
        <SearchField />
        <TilesContainer id={1} />
        {this.tilesTitle('SHOP MEN')}
        <TilesContainer id={2} />
      </React.Fragment>
    );
  }
}
