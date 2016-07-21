import React from 'react'

const App = () => (
  <div>
    <form onSubmit={ e => {
      e.preventDefault();
      console.log('export json file');
    }}>
      <div>
        <span>{'{'}</span>
          <div>
            <input type="text" name="key" /><span>{' : '}</span><input type="text" name="value" />
            <button type="submit" onClick={ e => {
              e.preventDefault();
              console.log('create json item');
            }}>{'+'}</button>
            <button type="submit" onClick={ e => {
              e.preventDefault();
              console.log('delete json item');
            }}>{'-'}</button>
          </div>
        <span>{'}'}</span>
      </div>
      <button type="submit">
        {'export'}
      </button>
    </form>
  </div>
)

export default App
