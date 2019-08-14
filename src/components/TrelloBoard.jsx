import React, { Component } from 'react';
import './TrelloBoard.scss';
import uuidv1 from 'uuid/v1';
import initialData from '../initial-data';
import TrelloList from './TrelloList';

export default class TrelloBoard extends Component {
  state = initialData;

  handleAddCard = (data) => {
    const { cards, lists } = this.state;
    const { listId, cardContent } = data;
    const newCard = {
      id: uuidv1(),
      content: cardContent,
    };

    const newCards = {
      ...cards,
      [newCard.id]: newCard,
    };
    const newCardOrder = Array.from(lists[listId].cardOrder);
    newCardOrder.push(newCard.id);
    const newList = {
      ...lists[listId],
      cardOrder: newCardOrder,
    };

    const newState = {
      ...this.state,
      cards: newCards,
      lists: {
        ...lists,
        [listId]: newList,
      },
    };

    this.setState(newState);
  };

  render() {
    const { cards, lists, listOrder } = this.state;
    return (
      <main className="trello-board">
        {listOrder.map((listId) => {
          const list = lists[listId];
          const cardsArr = list.cardOrder.map(cardId => cards[cardId]);
          return (
            <TrelloList key={list.id} list={list} cards={cardsArr} addCard={this.handleAddCard} />
          );
        })}
        <section className="trello-list__container">
          <div className="trello-list">
            <h2 className="trello-list__title">Add a new list</h2>
          </div>
        </section>
      </main>
    );
  }
}
