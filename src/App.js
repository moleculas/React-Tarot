import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Deck from './Deck';
import Deck_tirada from './Deck_tirada';
import Lat_izq_1 from './Lat_izq_1';
import Lat_izq_2 from './Lat_izq_2';
// import Spinner from './Spinner';
import './App.css'
import logoArtika from './images/artika_des.png';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 6000);
  }

  constructor(props) {
    super(props);
    this.state = {
      tarot: 'marsella',
      fase: 'fase1',
      text: null
    }
  }
  cambioBaraja = async () => {
    this.setState({ fase: 'fase2' })
  }
  VolverCambioBaraja = async () => {
    this.setState({ fase: 'fase1' })
    this.setState({ tarot: 'marsella' });
  }
  handleTarot = (tarotValue) => {
    this.setState({ tarot: tarotValue });
  }
  handleText = (textValue2) => {
    if (!this.state.text || this.state.text !== textValue2) {
      this.setState({
        text: textValue2
      });
    }
  }

  render() {

    let contenido_baraja, contenido_lateral;
    const altoScroller2 = window.innerHeight - 215;
    if (this.state.fase === 'fase1') {
      contenido_baraja = <Deck tarot={this.state.tarot} />
      contenido_lateral = <div><div style={{ height: altoScroller2 }}> <Lat_izq_1 onSelectTarot={this.handleTarot} /></div>
        <div className="mari-15"><a style={{ width: '100%', zIndex: 0 }} onClick={this.cambioBaraja} className="waves-effect waves-light btn">Realizar Tirada</a></div></div>
    } else {
      contenido_baraja = <Deck_tirada tarot={this.state.tarot} onSelectText={this.handleText} />
      contenido_lateral = <div> <Lat_izq_2 elText={this.state.text} /><a style={{ width: '100%', zIndex: 0 }} onClick={this.VolverCambioBaraja} className="waves-effect waves-light btn">Volver</a></div>

    }

    return (
      <div>
        <nav className="z-depth-2">
          <div className="nav-wrapper teal">
            <img className="responsive-img" style={{ marginLeft: '10px', marginTop: '12px', width: '40px' }} src={logoArtika} alt="LogoArtikaWeb" />
            <a style={{ marginLeft: '10px' }} href="https://artikaweb.com" target="_blank" rel="noreferrer" className="brand-logo">Desarrollos ArtikaWeb</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down" style={{ marginRight: '20px' }}>
              <li>Selector Cartas de Tarot React</li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <div id="left_side" className="col s2">
            <p></p>
            <div className="row">
              <div >
                <div className="card-panel teal">
                  <span className="white-text">Selector de cartas Tarot</span>
                </div>
              </div>
            </div>
            {contenido_lateral}
          </div>
          <div className="col s10">
            <div id="root_cards">{contenido_baraja}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
