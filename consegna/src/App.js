import './App.css';
import ButtonArrow from './components/ButtonArrow';
import ButtonExtend from './components/ButtonExtended';
import Immagine from './components/Immagine';
import Immagine2 from './components/Immagine2';

function App() {
  return (
    <div className="App">
      <ButtonArrow label="Sono il button"/>
      <ButtonExtend label="Io sono button 2" />
      <Immagine></Immagine>
      <Immagine2></Immagine2>
    </div>
  );
}

export default App;
