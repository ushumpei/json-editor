import React from 'react'

const App = () => (
  <div>
    <form onSubmit={ e => {
      e.preventDefault();
      console.log('export json file');
    }}>
    <div>
      {'{'}
        <div className="json-item">{'"key1" : "hoge",'}</div>
        <div className="json-item">{'"key2" : "fuga",'}</div>
        <div className="json-item">
          {'"object : {'}
            <div className="json-item">{'"key1" : "hoge",'}</div>
            <div className="json-item">{'"key2" : "fuga",'}</div>
            <div className="json-item"><input type="text" name="key" value="key3" />{' : '}<a href="#">value</a> <a href="#">object</a> <a href="#">list</a></div>
          {'},'}
        </div>
        <div className="json-item">
          {'"list" : ['}
            <div className="json-item">{'"key1",'}</div>
            <div className="json-item">{'"key2"'}</div>
            <div className="json-item"><a href="#">value</a> <a className="inactive">object</a> <a className="inactive">list</a></div>
          {'],'}
        </div>
        <div className="json-item">
          {'"list2" : ['}
            <div className="json-item">{'"key1",'}</div>
            <div className="json-item">{'"key2",'}</div>
            <div className="json-item">
              <input type="text" name="key" />
            </div>
          {']'}
        </div>
        <div className="json-item"><a href="#">key</a> : <a className="inactive">value</a> <a className="inactive">object</a> <a className="inactive">list</a></div>
      {'}'}
    </div>
      <div>
        <a className="inactive">export</a> <a href="#">import</a> <a href="#">clear</a> <a href="#">reset</a>
      </div>
    </form>
  </div>
)

export default App
