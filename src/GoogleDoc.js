import React, { Component } from 'react';

const taskListStyles = {
  padding: '10px',
  margin: '0px',
  color: '#fff',
  background: '#000',
};

class GoogleDoc extends Component {

  constructor() {
    super();

    this.state = {
      iframe: null
    }
  }

  componentWillReceiveProps(props) {
    console.log('receiving props!!', props.task)
    let iframeContent = `<iframe src="https://docs.google.com/document/d/1V3rUhgShnnUw9kabP2O9DCMFY6mTyVRCG8G3Y9LMnzc/view?usp=sharing&rm=minimal" width="100%" height="${window.innerHeight}"></iframe>`;

    const taskMap = {
      "legal_assistance": "h.oroycnqmoias",
      "workplace_bullying": "h.trrzyyyd05ue",
      "pay_descrimination": "h.2g3g1dy95cbe"
    }

    if (props.task) {

      let heading = taskMap[props.task.attributes.intent];
      console.log('HEADING', heading);

      iframeContent = `<iframe src="https://docs.google.com/document/d/1V3rUhgShnnUw9kabP2O9DCMFY6mTyVRCG8G3Y9LMnzc/view?usp=sharing&rm=minimal#heading=${heading}" width="100%" height="${window.innerHeight}"></iframe>`;
    }

    this.setState({
      iframe: { __html: iframeContent }
    });

  }

  render() {
    let content = <div>No task selected</div>

    if (this.state.iframe) {
      console.log('IFRAME SET', this.state.iframe);
      content = <div dangerouslySetInnerHTML={this.state.iframe}></div>
    }
    return (
      <div>
        {content}
      </div>
    );
  }

};

export default GoogleDoc;
