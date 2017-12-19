import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class HeaderBlock extends React.Component {
  render() {
    return (<div className="headerDiv"></div>);
  }
}

ReactDOM.render(<HeaderBlock />, document.getElementById('container'))
