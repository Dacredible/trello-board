import React, { Component } from 'react';
import './TrelloBoard.scss';

export default class TrelloBoard extends Component {
  state = {
    boards: [
      { title: 'First', cards: [{ text: 'buy' }, { text: 'bought' }] },
      { title: 'Second', cards: [{ text: 'buy' }, { text: 'bought' }] },
      { title: 'Third', cards: [{ text: 'buy' }, { text: 'bought' }] },
      { title: 'Fourth', cards: [{ text: 'buy' }, { text: 'bought' }] },
    ],
  };

  handleAddCard(list) {
    const { boards } = this.state;
    const text = window.prompt();
    const newBoards = [...boards];
    const index = boards.findIndex(item => item.title === list.title);
    newBoards[index].cards.push({ text });
    this.setState({
      boards: newBoards,
    });
  }

  handleClickLeft(list, card) {
    const { boards } = this.state;
    const newBoards = [...boards];
    const currentListIndex = boards.findIndex(item => item.title === list.title);
    const currentCardIndex = list.cards.findIndex(item => item.text === card.text);
    const targetListIndex = (currentListIndex - 1 + boards.length) % boards.length;
    const [movingItem] = newBoards[currentListIndex].cards.splice(currentCardIndex, 1);
    newBoards[targetListIndex].cards.push(movingItem);
    this.setState({
      boards: newBoards,
    });
  }

  handleClickRight(list, card) {
    const { boards } = this.state;
    const newBoards = [...boards];
    const currentListIndex = boards.findIndex(item => item.title === list.title);
    const currentCardIndex = list.cards.findIndex(item => item.text === card.text);
    const targetListIndex = (currentListIndex + 1 + boards.length) % boards.length;
    const [movingItem] = newBoards[currentListIndex].cards.splice(currentCardIndex, 1);
    newBoards[targetListIndex].cards.push(movingItem);
    this.setState({
      boards: newBoards,
    });
  }

  renderList(list) {
    return (
      <div className="trello-list">
        <h2 className="trello-list__title">{list.title}</h2>
        <ul className="trello-list__container">{this.renderCards(list)}</ul>
        <button
          type="button"
          onClick={() => {
            this.handleAddCard(list);
          }}>
          Add Card
        </button>
      </div>
    );
  }

  renderCards(list) {
    return list.cards.map(card => (
      <li className="trello-card">
        <span
          onClick={() => {
            this.handleClickLeft(list, card);
          }}>
          {'<'}
        </span>
        {card.text}
        <span
          onClick={() => {
            this.handleClickRight(list, card);
          }}>
          {'>'}
        </span>
      </li>
    ));
  }

  render() {
    const { boards } = this.state;
    return <main className="trello-board">{boards.map(item => this.renderList(item))}</main>;
  }
}
