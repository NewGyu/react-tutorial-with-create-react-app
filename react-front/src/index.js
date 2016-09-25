import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './component/commentBox';
import 'bulma/css/bulma.css';

class App extends React.Component {
  render() {
    return(
      <CommentBox url="/api/comments" pollInterval={2000} />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
