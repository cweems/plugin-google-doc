import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import GoogleDoc from './GoogleDoc';

const PLUGIN_NAME = 'GoogleDocPlugin';

export default class GoogleDocPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */

  init(flex, manager) {
    //flex.CRMContainer.Content.replace(<GoogleDoc key={'GoogleDoc'} />)

    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      console.log('TASK', task);

      flex.CRMContainer.Content.replace(<GoogleDoc key={'GoogleDoc'} task={task} />)

      return;
    }

    flex.AgentDesktopView.defaultProps.splitterOptions = {
      minimumSecondPanelSize: '60%',
    }
  }
}
