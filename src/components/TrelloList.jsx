import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import TrelloCard from './TrelloCard';
import NewCard from './NewCard';

export default class TrelloList extends React.Component {
  state = {
    isNewCardDisplay: false,
  };

  handleAddCard = (data) => {
    const { list, addCard } = this.props;

    if (data.type === 'add') {
      addCard({ listId: list.id, cardContent: data.cardContent });
    }
    this.setState({ isNewCardDisplay: false });
  };

  renderCards = cards => cards.map((card, index) => (
      <TrelloCard key={card.id} card={card} index={index} />
  ));

  render() {
    const { list, cards, index } = this.props;

    const { isNewCardDisplay } = this.state;
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
                    {this.renderCards(cards)}
                    {innerProvided.placeholder}
                    <NewCard
                      isDisplay={isNewCardDisplay}
                      addCardDone={this.handleAddCard}
                    />
                  </ul>
                )}
              </Droppable>
              <div
                className={
                  !isNewCardDisplay
                    ? 'trello-list__button is-display'
                    : 'trello-list__button'
                }
                type="button"
                onClick={() => {
                  this.setState({ isNewCardDisplay: true });
                }}>
                <h3 className="button__text">+ Add a card</h3>
              </div>
            </div>
          </section>
        )}
      </Draggable>
    );
  }
}
