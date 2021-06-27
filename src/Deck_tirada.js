import React, { Component } from 'react'
import { Labaraja_tirada } from './Labaraja_tirada';

class Deck_tirada extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      numeroRenders: 0
    }
  }

  componentDidMount = async () => {
    this.setState({ loaded: true });

  }
  componentDidUpdate() {
    this.state.numeroRenders++
  }

  shouldComponentUpdate() {
    if (this.state.numeroRenders >= 1) {
      return false;
    } else { return true }
  }
  componentWillReceiveProps() {

  }

  componentWillUnmount() {

  }
  handleText2 = async (textValue) => {
    const elTextoPasado = textValue;
    this.props.onSelectText(elTextoPasado)

  }

  render() {
    if (!this.state.loaded) {
      return (<div></div>
      )
    }
    return (
      <Labaraja_tirada tarotRecibido={this.props.tarot} onSelectText2={this.handleText2} />
    );

  }

}
export default Deck_tirada;