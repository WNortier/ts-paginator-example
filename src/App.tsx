import useTsPaginator from 'ts-paginator'
import './App.css';

function App() {

  const {
    totalRecordCount,
    rowsPerPage,
    currentPage,
    _determinePaginationMessage,
    _determineRowsPerPageOptions,
    _determinePaginationPages,
    _determinePaginationDisabledState,
    _handleChangePage,
    _handleChangeRowsPerPage,
    _handleChangeTotalRecordCount
  } = useTsPaginator(351, 15);
  const message = _determinePaginationMessage({ verb: "Showing" });
  const rppo = _determineRowsPerPageOptions()
  const pp = _determinePaginationPages()
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
        <p style={{ margin: '0px' }}>rowsPerPage: {rowsPerPage}</p>
        <hr style={{ width: '100%' }} />
        <p style={{ margin: '0px' }}>_determinePaginationMessage: {message}</p>
        <p style={{ margin: '0px' }}>_determineRowsPerPageOptions: [{String(rppo).replace(/.{2}/g, '$&')}]</p>
        <p style={{ margin: '0px' }}>_determinePaginationPages: [{String(pp).replace(/.{2}/g, '$&')}]</p>
        <p style={{ margin: '0px' }}>_determinePaginationDisabledState: {String(disabled)}</p>
        <hr style={{ width: '100%' }} />
        <div style={{ display: "flex" }}>
          <button style={{ background: 'lightblue', fontSize: '24px', padding: '10px', borderRadius: '6px', margin: '20px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => _handleChangeTotalRecordCount(7)} className="font">Set totalRecordCount to 7</button>
          <button style={{ background: 'lightblue', fontSize: '24px', padding: '10px', borderRadius: '6px', margin: '20px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => _handleChangeTotalRecordCount(1000)} className="font">Set totalRecordCount to 1000</button>
          <button style={{ background: 'lightblue', fontSize: '24px', padding: '10px', borderRadius: '6px', margin: '20px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => _handleChangeRowsPerPage(250)}>Set rowsPerPage to 250</button>
          <button style={{ background: 'lightblue', fontSize: '24px', padding: '10px', borderRadius: '6px', margin: '20px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => _handleChangePage(4)}>Set currentPage to page 3</button>
        </div>
      </header>
    </div>
  );
}

export default App;
