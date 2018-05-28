/**
 * Copyright (c) 2018-present, MosaicBoard.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
import user from '../../../images/user.jpeg';

class Panel extends Component {
  render() {
    return (
      <PanelContainer>
        <PanelUser name="Breno Polanski" subtitle="Meteorite BI" image={user} />

        <PanelListWrapper>
          <PanelListTitle>Help</PanelListTitle>

          <PanelList>
            <PanelListItem>Lorem ipsum dolor sit amet</PanelListItem>
            <PanelListItem>Lorem ipsum dolor sit amet</PanelListItem>
            <PanelListItem>Lorem ipsum dolor sit amet</PanelListItem>
          </PanelList>
        </PanelListWrapper>

        <PanelActionWrapper>
          <PanelAction title="Info" icon="info" />
          <PanelAction title="Help" icon="help" />
          <PanelAction title="Logout" icon="power_settings_new" />
          <PanelAction title="Profile" icon="person" />
          <PanelAction title="Settings" icon="build" />
          <PanelAction title="Theme" icon="color_lens" to="/" />
        </PanelActionWrapper>
      </PanelContainer>
    );
  }
}

export default Panel;
