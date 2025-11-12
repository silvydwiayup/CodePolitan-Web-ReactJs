const MenuMakanan = (props) => {
    return(
        
        props.stockMenu > 0 ?  
        <div style={{ border: '1px solid black', width:300, margin:'auto' }}>
            <p>Nama Menu: {props.namaMenu}</p>
            <p>Harga: {props.hargaMenu}</p>
            <p>Stock: {props.stockMenu}</p>
        </div>
        : null

        
    )

}

export default MenuMakanan