import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from '../src/component/commentList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const data = [
    {id: 1111, text: "text1", author: "ore"}
  ];
  ReactDOM.render(<CommentList data={[]}/>, div);
});
