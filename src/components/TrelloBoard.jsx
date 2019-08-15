import React, { Component } from 'react';
import './TrelloBoard.scss';
import uuidv1 from 'uuid/v1';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from '../initial-data';
import TrelloList from './TrelloList';

export default class TrelloBoard extends Component {
  state = initialData;

  handleAddCard = (data) => {
    const { cards, lists } = this.state;
    const { listId, cardContent } = data;
    const newCard = {
      id: `card-${uuidv1()}`,
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

  handleAddList = () => {
    const { lists, listOrder } = this.state;
    // eslint-disable-next-line no-alert
    const listTitle = window.prompt('Please enter the title of new list');
    if (!listTitle) {
      return;
    }
    const newList = {
      id: `list-${uuidv1()}`,
      title: listTitle,
      cardOrder: [],
    };
    const newListOrder = Array.from(listOrder);
    newListOrder.push(newList.id);
    const newState = {
      ...this.state,
      lists: {
        ...lists,
        [newList.id]: newList,
      },
      listOrder: newListOrder,
    };
    this.setState(newState);
  };

  onDragEnd = (result) => {
    const {
      draggableId, source, destination, type,
    } = result;
    const { lists, listOrder } = this.state;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId
      && destination.index === source.index
    ) {
      return;
    }

    if (type === 'LIST') {
      const newListOrder = Array.from(listOrder);
      newListOrder.splice(source.index, 1);
      newListOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        listOrder: newListOrder,
      };

      this.setState(newState);
      return;
    }

    const startList = lists[source.droppableId];
    const endList = lists[destination.droppableId];

    if (startList.id === endList.id) {
      // dragNdrop in same lsit
      const newCardOrder = Array.from(startList.cardOrder);
      newCardOrder.splice(source.index, 1);
      newCardOrder.splice(destination.index, 0, draggableId);

      const newList = {
        ...startList,
        cardOrder: newCardOrder,
      };
      const newState = {
        ...this.state,
        lists: {
          ...lists,
          [newList.id]: newList,
        },
      };

      this.setState(newState);
    } else {
      const newStartCardOrder = Array.from(startList.cardOrder);
      const newEndCardOrder = Array.from(endList.cardOrder);
      newStartCardOrder.splice(source.index, 1);
      newEndCardOrder.splice(destination.index, 0, draggableId);

      const newStartList = {
        ...startList,
        cardOrder: newStartCardOrder,
      };

      const newEndList = {
        ...endList,
        cardOrder: newEndCardOrder,
      };

      const newState = {
        ...this.state,
        lists: {
          ...lists,
          [newStartList.id]: newStartList,
          [newEndList.id]: newEndList,
        },
      };

      this.setState(newState);
    }
  };

  render() {
    const { cards, lists, listOrder } = this.state;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="LIST">
          {provided => (
            <main
              className="trello-board"
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {listOrder.map((listId, index) => {
                const list = lists[listId];
                const cardsArr = list.cardOrder.map(cardId => cards[cardId]);
                return (
                  <TrelloList
                    key={list.id}
                    list={list}
                    cards={cardsArr}
                    index={index}
                    addCard={this.handleAddCard}
                  />
                );
              })}
              {provided.placeholder}
              <section className="trello-list__container trello-list__add-new">
                <div className="trello-list" onClick={this.handleAddList}>
                  <h2 className="trello-list__title">+ Add another list</h2>
                </div>
              </section>
            </main>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
