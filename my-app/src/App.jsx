import { useState,useEffect } from "react";
import './App.css'
import MenuMakanan from './components/MenuMakanan/MenuMakanan';
import MenuMinuman from './components/MenuMinuman/MenuMinuman';

function App() {

  var [namaResto, setNamaResto] = useState('');
  var data = "Cafe and Resto CodePolitan";
  var [namaMenu, setNamaMenu] = useState(
    [{
      'namaMakanan' : 'Ayam Bakar',
      'hargaMenu' : 25000,
      'stock' : 20
    },
    {
      'namaMakanan' : 'Ikan Bakar',
      'hargaMenu' : 30000,
      'stock' : 12
    }]
  );
  
  useEffect(() => {
    setNamaResto(data)
  },[]);

  var handleGantiResto = (props) => {
    setNamaResto(props);
  };


  return (
    <>
      <div className="App">
        <h1>{namaResto}</h1>
        <button onClick={() => handleGantiResto ('Programming')}>Ganti Nama Resto</button>
        <h2>Menu Makanan</h2>
        <MenuMakanan namaMenu={namaMenu[0].namaMakanan} hargaMenu={namaMenu[0].hargaMenu} stockMenu= {namaMenu[0].stock}/> <br /> 
        <MenuMakanan namaMenu={namaMenu[1].namaMakanan} hargaMenu={namaMenu[1].hargaMenu} stockMenu= {namaMenu[1].stock}/>

        <h2>Menu Minuman</h2>
        <MenuMinuman namaMinuman={'Jus Jeruk'} hargaMinuman={'Rp 15.000'}/>
      </div>
    </>
  )
}

export default App;
