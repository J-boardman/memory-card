import React from 'react'

const Cards = (props) => {
  
  const {cards, handleClick} = props;
  const cardElements = cards.map(card => {
    const styles = {
      backgroundImage: `url('${require(`./img/${card.image}.png`)}')`,
      backgroundColor: card.color
    }

    return (
      <div key={card.id} 
        className=
        " w-40 h-40 border-4 border-black rounded-2xl flex justify-center items-center cursor-pointer bg-cover"
        onClick={() => handleClick(card.id)}
        value={card.id}
        style={styles}
      >
      </div>
    )
  });
  
  return (
    <section className='flex gap-5 flex-wrap justify-center'>
      {cardElements}
    </section>
  )
}

export default Cards