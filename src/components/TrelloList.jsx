import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
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
  const { list, cards, addCard } = props;

  return (
    <section className="trello-list__container">
      <div className="trello-list">
        <h2 className="trello-list__title">{list.title}</h2>
        <Droppable droppableId={list.id}>
          {provided => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="trello-card__container">
              {renderCards(cards)}
              {provided.placeholder}
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
  );
};

export default TrelloList;
