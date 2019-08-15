import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import TrelloCard from './TrelloCard';

const handleAddCard = (list, cb) => {
  // eslint-disable-next-line no-alert
  const cardContent = window.prompt('Please enter the content of new card');
  if (!cardContent) {
    return;
  }
  cb({ listId: list.id, cardContent });
};

const renderCards = cards => cards.map((card, index) => (
    <TrelloCard key={card.id} card={card} index={index} />
));

const TrelloList = (props) => {
  const {
    list, cards, addCard, index,
  } = props;

  return (
    <Draggable draggableId={list.id} index={index}>
      {provided => (
        <section
          className="trello-list__container"
          {...provided.draggableProps}
          ref={provided.innerRef}>
          <div className="trello-list">
            <h2 className="trello-list__title" {...provided.dragHandleProps}>
              {list.title}
            </h2>
            <Droppable droppableId={list.id} type="CARD">
              {innerProvided => (
                <ul
                  {...innerProvided.droppableProps}
                  ref={innerProvided.innerRef}
                  className="trello-card__container">
                  {renderCards(cards)}
                  {innerProvided.placeholder}
                </ul>
              )}
            </Droppable>
            <div
              className="trello-list__button"
              type="button"
              onClick={() => {
                handleAddCard(list, addCard);
              }}>
              <h3 className="button__text">+ Add a card</h3>
            </div>
          </div>
        </section>
      )}
    </Draggable>
  );
};

export default TrelloList;
