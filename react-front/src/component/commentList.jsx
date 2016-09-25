import React, {Component} from 'react';
import Remarkable from 'remarkable';

export default class CommentList extends Component {
  render() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

class Comment extends Component {
  rawMarkup() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  }

  render() {
    return (
      <article className="columns">
        <div className="column">
          <div className="comment card">
            <header className="card-header">
              <h2 className="commentAuthor card-header-title">{this.props.author}</h2>
            </header>
            <div className="card-content">
              <span dangerouslySetInnerHTML={this.rawMarkup() } />
            </div>
          </div>
        </div>
      </article>
    );
  }
}
