import { useState,useEffect } from "react";
import './App.css'
import MenuMakanan from './components/MenuMakanan/MenuMakanan';
import MenuMinuman from './components/MenuMinuman/MenuMinuman';

function App() {

  const [namaResto, setNamaResto] = useState('namaResto');
  var data = "Cafe and Resto CodePolitan";
  
  useEffect(() => {
    setNamaResto(data)
  },[]);

  return (
    <>
      <div className="App">
        <h1>{namaResto}</h1>
        <h2>Menu Makanan</h2>
        <MenuMakanan namaMenu={'Ayam Bakar'} hargaMenu={'Rp 25.000'}/>

        <h2>Menu Minuman</h2>
        <MenuMinuman namaMinuman={'Jus Jeruk'} hargaMinuman={'Rp 15.000'}/>
      </div>
    </>
  )
}

export default App;
