import globalStyles from 'css/globalStyles';
import ReactDOM from 'react-dom';

const App = () => {
  globalStyles();
  return (
    <div className="container">
      <div>Name: landing</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
