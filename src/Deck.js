import React, { Component} from 'react'
import Labaraja from './Labaraja';

class Deck extends Component {
  state = { loaded:false};
componentDidMount = async () => {
  this.setState({loaded:true});
  }
  componentDidUpdate(prevProps) {
   
    if (this.props.tarot !== prevProps.tarot) {
      this.setState({loaded:false});      
      setTimeout(() => {
        this.setState({loaded:true});
    }, 200);
    }
  }
  componentWillReceiveProps(){

  }

  // constructor(props) {
  //   super(props);
  //   this.state = { tarotRecibido: this.props.tarot };
    
  // }
render() {
  if (!this.state.loaded) {
    return (<div></div>
  )
  }
  return (
    <Labaraja tarotRecibido={this.props.tarot}/>
  );

  // return (       
  //    <Labaraja tarotRecibido={this.props.tarot}/>   
  // );
}

}
export default Deck;