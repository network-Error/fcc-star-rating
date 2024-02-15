import './App.css';
import { StarRating } from './components/StarRating';

function App() {
  return (
    <div className="App">
      <StarRating numberOfStars={10} />
    </div>
  );
}

export default App;
