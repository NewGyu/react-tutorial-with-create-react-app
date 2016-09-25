import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentBox from './component/commentBox';


ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('root')
);
