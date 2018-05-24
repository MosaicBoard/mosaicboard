import React, { Component } from 'react';

import PanelContainer from './PanelContainer';
import PanelUser from './PanelUser';
import PanelListWrapper from './PanelListWrapper';
import PanelListTitle from './PanelListTitle';
import PanelList from './PanelList';
import PanelListItem from './PanelListItem';
import PanelActionWrapper from './PanelActionWrapper';
import PanelAction from './PanelAction';

import './Panel.css';

class Panel extends Component {
  render() {
    return (
      <PanelContainer>
        <PanelUser
          name="Breno Polanski"
          subtitle="Meteorite BI"
          image="avatar.png"
        />

        <PanelListWrapper>
          <PanelListTitle>Help</PanelListTitle>
        </PanelListWrapper>

        <PanelActionWrapper>
          <PanelAction title="Info" icon="info" />
          <PanelAction title="Help" icon="help" />
          <PanelAction title="Logout" icon="power_settings_new" />
          <PanelAction title="Profile" icon="person" />
          <PanelAction title="Settings" icon="build" />
          <PanelAction title="Theme" icon="color_lens" />
        </PanelActionWrapper>
      </PanelContainer>
    );
  }
}

export default Panel;
