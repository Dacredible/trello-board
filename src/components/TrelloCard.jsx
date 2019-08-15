import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TrelloCard = ({ card, index }) => (
  <Draggable draggableId={card.id} index={index}>
    {provided => (
      <li
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        className="trello-card">
        {card.content}
      </li>
    )}
  </Draggable>
);

export default TrelloCard;
