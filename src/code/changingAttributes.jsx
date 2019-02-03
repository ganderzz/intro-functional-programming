class Child extends React.Component {
  componentDidMount() {
    this.props.mount();
  }

  componentWillUnmount() {
    this.props.unmount();
  }

  render() {
    return <div />;
  }
}

class App extends React.Component {
  state = {
    toggle: false,
    count: 0
  };

  render() {
    const Type = this.state.toggle ? "div" : "span";

    return (
      <div style={{ padding: 20 }}>
        <h1>Changing Attributes</h1>
        <button
          style={{ padding: "8px 12px" }}
          onClick={() => this.setState({ t: !this.state.toggle })}
        >
          Change DOM Attribute
        </button>

        <div className={Type}>
          <p style={{ fontSize: 32 }}>
            Count of Child Renders: {this.state.count}
          </p>

          <Child
            mount={() => console.log("mount")}
            unmount={() => this.setState({ count: this.state.count + 1 })}
          />
        </div>
      </div>
    );
  }
}

render(<App />);
