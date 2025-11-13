import { useState,useEffect } from "react";
import './App.css'
import MenuMakanan from './components/MenuMakanan/MenuMakanan';
import MenuMinuman from './components/MenuMinuman/MenuMinuman';

function App() {

  var [namaResto, setNamaResto] = useState('');
  var data = "Cafe and Resto CodePolitan";
  var [namaMenu, setNamaMenu] = useState(
    {
      makanan :
      [
        {'namaMakanan' : 'Ayam Bakar', 'hargaMenu' : 25000, 'stock' : 20},
        {'namaMakanan' : 'Ikan Bakar', 'hargaMenu' : 30000, 'stock' : 12}
      ],
      minuman :
      [
        {'id' : 1, 'namaMinuman' : 'Jus Jeruk', 'hargaMinuman' : 12000, 'stock' : 12},
        {'id' : 2, 'namaMinuman' : 'Esteh Manis', 'hargaMinuman' : 7000, 'stock' : 15},
      ]
    }
    
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
        <MenuMakanan namaMenu={namaMenu.makanan[0].namaMakanan} hargaMenu={namaMenu.makanan[0].hargaMenu} stockMenu= {namaMenu.makanan[0].stock}/> <br />
        <MenuMakanan namaMenu={namaMenu.makanan[1].namaMakanan} hargaMenu={namaMenu.makanan[1].hargaMenu} stockMenu= {namaMenu.makanan[1].stock}/>

        <h2>Menu Minuman</h2>
        {namaMenu.minuman.map((minuman) => 
          <MenuMinuman key={minuman.id} namaMinuman={minuman.namaMinuman} hargaMinuman={minuman.hargaMinuman}/>
        )}
      </div>
    </>
  )
}

export default App;
