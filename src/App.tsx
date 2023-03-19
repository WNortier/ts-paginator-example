import React from "react";
import './App.css';
import useTsPaginator from "ts-paginator";

function App() {
  //@ts-ignore
  const {
    totalRecordCount,
    rowsPerPage,
    currentPage,
    _determinePaginationMessage,
    _determinePaginationDisabledState,
    _determineRowsPerPageOptions,
    _handleChangePage,
    _handleChangeRowsPerPage,
    _handleChangeTotalRecordCount
  } = useTsPaginator(50, 0);
  const message = _determinePaginationMessage({ verb: "Showing" });
  const rpp = _determineRowsPerPageOptions()
  const disabled = _determinePaginationDisabledState()
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <img src={"./ts-.png"} id="ts-" alt="https://www.npmjs.com/package/ts-paginator" />
          <img src={"./paginator.png"} id="ts-paginator" alt="https://www.npmjs.com/package/ts-paginator" />
        </div>
        <p style={{ margin: '0px' }}>totalRecordCount: {totalRecordCount}</p>
        <p style={{ margin: '0px' }}>currentPage: {currentPage}</p>
        <p style={{ margin: '0px' }}>_determinePaginationMessage: {message}</p>
        <p style={{ margin: '0px' }}>__determineRowsPerPageOptions: [{String(rpp).replace(/.{2}/g, '$&')}]</p>
        <p style={{ margin: '0px' }}>_determinePaginationDisabledState: {String(disabled)}</p>
        <button style={{ background: 'lightblue', fontSize: '16px', padding: '10px', borderRadius: '6px', margin: '20px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => _handleChangeTotalRecordCount(1000)} className="font">Set totalRecordCount to 1000</button>
        <button style={{ background: 'lightblue', fontSize: '16px', padding: '10px', borderRadius: '6px', margin: '20px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => _handleChangeRowsPerPage(250)}>Change rowsPerPage to 250</button>
        <button style={{ background: 'lightblue', fontSize: '16px', padding: '10px', borderRadius: '6px', margin: '20px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => _handleChangePage(4)}>Change to page 3</button>
      </header>
    </div>
  );
}

export default App;
