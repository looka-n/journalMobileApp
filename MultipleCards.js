import React from 'react';
import { ScrollView, Button } from 'react-native';
import Card from './Card'; // Import the updated Card component

const MultipleCards = () => {
  const [cards, setCards] = React.useState([{ id: 0 }]); // State to manage cards

  const addCard = () => {
    setCards([...cards, { id: cards.length }]);
  };

  const deleteCard = (cardId) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  return (
    <ScrollView>
      {cards.map((card) => (
        <Card key={card.id} onDelete={() => deleteCard(card.id)} />
      ))}
      <Button title="Add Card" onPress={addCard} />
    </ScrollView>
  );
};

export default MultipleCards;
