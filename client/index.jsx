class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>it works!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
