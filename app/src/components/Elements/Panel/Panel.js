import React, { Component } from 'react';

import PanelContainer from './PanelContainer';
import PanelUser from './PanelUser';
import PanelListWrapper from './PanelListWrapper';
import PanelListTitle from './PanelListTitle';
import PanelList from './PanelList';
import PanelListItem from './PanelListItem';
import PanelAction from './PanelAction';

import './Panel.css';

class Panel extends Component {
  render() {
    return (
      <PanelContainer>
        <PanelUser name="Breno Polanski" subtitle="Meteorite BI" image="" />
      </PanelContainer>
    );
  }
}

export default Panel;
