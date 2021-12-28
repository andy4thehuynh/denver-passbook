import 'bulma/css/bulma.min.css';

import './App.css';
import FoodList from './components/FoodList';

function App() {
  return (
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-4 has-background-primary">
          <FoodList />
        </div>
        <div class="column is-8 is-info has-background-warning">Auto</div>
      </div>
    </div>
	);
}

export default App;
