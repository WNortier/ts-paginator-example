import React from 'react';
import logo from './logo.svg';
import './App.css';
import useTsPaginator from 'ts-paginator';

enum PaginationMessageVerb {
  DISPLAYING = 'Displaying',
  SHOWING = 'Showing',
}

function App() {
  const { totalRecordCount, rowsPerPage, currentPage, _determinePaginationMessage, _determinePaginationDisabledState, _determineRowsPerPageOptions, _handleChangePage, _handleChangeRowsPerPage } = useTsPaginator(20, 10, 0);
  const message = _determinePaginationMessage({ verb: PaginationMessageVerb.DISPLAYING });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
