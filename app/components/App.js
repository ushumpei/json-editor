import React from 'react'

const App = () => (
  <div>
    <form onSubmit={ e => {
      e.preventDefault();
      console.log('export json file');
    }}>
    <div>
      {'{'}
        <div>{'key1 : hoge,'}</div>
        <div>{'key2 : fuga,'}</div>
        <div>
          {'object : {'}
            <div>{'key1 : hoge,'}</div>
            <div>{'key2 : fuga,'}</div>
            <div><input type="text" name="key" value="key3" />{'ok : '}<a href="#">value</a> <a href="#">object</a> <a href="#">list</a></div>
          {'},'}
        </div>
        <div>
          {'list : ['}
            <div>{'key1,'}</div>
            <div>{'key2'}</div>
            <div><a href="#">value</a> <a className="inactive">object</a> <a className="inactive">list</a></div>
          {'],'}
        </div>
        <div>
          {'list2 : ['}
            <div>{'key1,'}</div>
            <div>{'key2,'}</div>
            <div>
              <input type="text" name="key" />{'ok'}
            </div>
          {']'}
        </div>
        <div><a href="#">key</a> : <a className="inactive">value</a> <a className="inactive">object</a> <a className="inactive">list</a></div>
      {'}'}
    </div>
      <div>
        <a className="inactive">export</a> <a href="#">import</a> <a href="#">clear</a> <a href="#">reset</a>
      </div>
    </form>
  </div>
)

export default App
