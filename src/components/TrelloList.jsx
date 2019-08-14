import React from 'react';
import TrelloCard from './TrelloCard';

const handleAddCard = (list, cb) => {
  // eslint-disable-next-line no-alert
  const cardContent = window.prompt();
  cb({ listId: list.id, cardContent });
};

const renderCards = cards => cards.map(card => <TrelloCard key={card.id} content={card.content} />);

const TrelloList = (props) => {
  const { list, cards, addCard } = props;

  return (
    <section className="trello-list__container">
      <div className="trello-list">
        <h2 className="trello-list__title">{list.title}</h2>
        <ul className="trello-card__container">{renderCards(cards)}</ul>
        <div
          className="trello-list__button"
          type="button"
          onClick={() => {
            handleAddCard(list, addCard);
          }}>
          + Add a card
        </div>
      </div>
    </section>
  );
};

export default TrelloList;
