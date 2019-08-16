import React, { Component } from 'react';

export default class NewCard extends Component {
  state = {
    cardContent: '',
  };

  textareaRef = React.createRef();

  componentDidUpdate() {
    // Focus the text area when the display becomes visible
    const { isDisplay } = this.props;
    const { cardContent } = this.state;
    if (isDisplay && !cardContent) {
      this.textareaRef.current.focus();
    }
  }

  handleChange = (e) => {
    // TODO: detect Enter key pressed and fireup submit

    this.setState({ cardContent: e.target.value });
  };

  handleBtnClick = (type, cb) => {
    const { cardContent } = this.state;
    cb({ type, cardContent });
    this.setState({ cardContent: '' });
  };

  render() {
    const { cardContent } = this.state;
    const { isDisplay, addCardDone } = this.props;
    return (
      <div
        className={
          isDisplay ? 'new-card__container is-display' : 'new-card__container'
        }>
        <div className="trello-card new-card__textarea-container">
          <textarea
            className="new-card__textarea"
            ref={this.textareaRef}
            value={cardContent}
            onChange={this.handleChange}
            placeholder="Enter a title for this card..."
          />
        </div>
        <button
          type="button"
          className="new-card__btn"
          onClick={() => this.handleBtnClick('add', addCardDone)}>
          Add Card
        </button>
        <button
          type="button"
          className="new-card__cancel-btn"
          onClick={() => this.handleBtnClick('cancel', addCardDone)}>
          X
        </button>
      </div>
    );
  }
}
