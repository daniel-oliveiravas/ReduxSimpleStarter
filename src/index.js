import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyA3qfOeHHQ8lITPtSt99aLddoOWUwZ8mIc';

const App = () => {
  return <div>
      <SearchBar />
    </div>
}

ReactDOM.render(<App/>, document.querySelector('.container'));