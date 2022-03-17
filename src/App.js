import { useEffect, useState } from 'react';
import './App.css';
import Cards from './Cards';
import Footer from './Footer';
import Header from './Header';
import pokemon from './images.json'

function App() {
  const {pokeData} = pokemon;
  // * State Declarations
  const [stats, setStats] = useState({
    score:0,
    highScore:0
  });

  const [cards, setCards] = 
    useState(Array.from({length:pokeData.length}, (x,index) => (
      {
        id:index, 
        clicked:false, 
        image:pokeData[index].name, 
        color: pokeData[index].color
      }
    )));
  
  // * Source: https://javascript.info/task/shuffle
  const shuffleArray = () => setCards(prevState => (
    prevState.sort(() => Math.random() - 0.5)
  ))

  const {score, highScore} = stats;
  useEffect(() => {
    shuffleArray();
  }, []);

  const restart = () => {
    score > highScore ? 
      setStats({score:0, highScore:score}) :
      setStats({score:0, highScore:highScore});

    setCards(Array.from(
      {length:pokeData.length}, (x,index) => (
      {
        id:index, 
        clicked:false, 
        image:pokeData[index].name, 
        color: pokeData[index].color
      }
    )));
  }

  const handleClick = (id) => {
    const card = cards.find(x => x.id === id);
    if(card.clicked === true)
      return restart();
    
    setStats({...stats, score: stats.score + 1})
    setCards(cards.map(card => (
      card.id === id ? {id:id, clicked:true, image:card.image, color:card.color} :
      card
    )))
    return shuffleArray();
  }

  return (
    <main className='h-screen flex flex-col justify-between items-center text-4xl text-center'>
      <Header stats={stats} />
      <h1 className='pb-10'>Memory Game!</h1>
      <Cards cards={cards} handleClick={handleClick}/>
      <Footer />
    </main>
  );
}

export default App;
