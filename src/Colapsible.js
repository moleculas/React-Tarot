import React, { Component } from 'react';
import M from 'materialize-css';

class Colapsible extends Component {
    
    componentDidMount = () => {
        M.AutoInit();
        var elem =document.querySelector(".collapsible");
        var instance = M.Collapsible.getInstance(elem);    
        
        
    setTimeout(() => {
       const carta0=document.getElementById('carta0');
        const carta1=document.getElementById('carta1');
        const carta2=document.getElementById('carta2');
        carta0.onclick = function(){instance.open(0);  };      
        carta1.onclick = function(){instance.open(1);  };       
        carta2.onclick = function(){instance.open(2);  };    
      }, 300);
    }

    
    render() {    
        return (
            <div id="elCollapsible">
                <ul className="collapsible popout">
                    <li>
                        <div className="collapsible-header colorGris"><i className="material-icons">filter_drama</i>Pasado: {this.props.pasado1}</div>
                        <div className="collapsible-body"><span dangerouslySetInnerHTML={{__html: this.props.pasado2}} /></div>
                    </li>
                    <li>
                        <div className="collapsible-header colorGris"><i className="material-icons">place</i>Presente: {this.props.presente1}</div>
                        <div className="collapsible-body"><span dangerouslySetInnerHTML={{__html: this.props.presente2}} /></div>
                    </li>
                    <li>
                        <div className="collapsible-header colorGris"><i className="material-icons">whatshot</i>Futuro: {this.props.futuro1}</div>
                        <div className="collapsible-body"><span dangerouslySetInnerHTML={{__html: this.props.futuro2}} /></div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Colapsible;