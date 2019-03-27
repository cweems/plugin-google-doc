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
      iframe: { __html: `<iframe src="https://docs.google.com/document/d/11S0Mo4JeBhgY3UEefmossI7DrWbKnuApYx2l-nmmJrI/view?usp=sharing&rm=minimal" width="100%" height="${window.innerHeight}"></iframe>` }
    }

  }

  componentWillReceiveProps(props) {

    const taskMap = {
      "legal_assistance": "h.2c3khb8t2ssg",
      "workplace_bullying": "h.ctct6m9272yo ",
      "pay_discrimination": "h.km7nabirnkb0"
    }

    if (props.task.attributes.intent) {

      let heading = taskMap[props.task.attributes.intent];
      let iframeContent = `<iframe src="https://docs.google.com/document/d/11S0Mo4JeBhgY3UEefmossI7DrWbKnuApYx2l-nmmJrI/view?usp=sharing&rm=minimal#heading=${heading}" width="100%" height="${window.innerHeight}"></iframe>`;

      this.setState({
        iframe: { __html: iframeContent }
      });
    }


  }

  render() {
    let content;

    if (this.state.iframe) {
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
