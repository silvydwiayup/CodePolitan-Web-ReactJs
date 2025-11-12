import React, { Component } from "react";

class MenuMinuman extends Component{
    render(){
        return(
            <div style={{ border: '1px solid black', width:300, margin:'auto' }}>
                <p>Nama Menu: {this.props.namaMinuman}</p>
                <p>Harga: {this.props.hargaMinuman}</p>
            </div>
        )
    }
}

export default MenuMinuman