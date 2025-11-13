import { useState,useEffect } from "react";
import './App.css'
import MenuMakanan from './components/MenuMakanan/MenuMakanan';
import MenuMinuman from './components/MenuMinuman/MenuMinuman';

function App() {

  var [namaResto, setNamaResto] = useState('');
  var [name, setName] = useState('')
  var [Desc, setDesc] = useState('')
  var [Payment, setPayment] = useState('')
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

  var handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  var handleOnChangeDesc = (event) => {
    setDesc(event.target.value);
  };
  
  var handleOnChangePayment = (event) => {
    setPayment(event.target.value);
  };



  return (
    <>
      <div className="App">
        <h1>{namaResto}</h1>
        <button onClick={() => handleGantiResto ('Programming')}>Ganti Nama Resto</button>

        <form>
          <label style={{ marginTop: '20px', display: "block" }}>Nama</label>
          <input style={{ width: '80%', minHeight: '30px' }}  type="text"  name="inputNama" onChange={handleOnChangeName}/>
          <p>Nama : {name} </p>

          <label style={{ display: "block" }}>Keterangan</label>
          <textarea style={{ width: '80%', minHeight: '80px' }} name="inputKeterangan" onChange={handleOnChangeDesc}></textarea>
          <p>Keterangan : {Desc} </p>

          <label style={{ display: "block" }}>Pembayaran</label>
          <select style={{ width: '80%', minHeight: '30px' }} name="inputPayment" onChange={handleOnChangePayment}>
            <option value="Cash">Cash</option>
            <option value="Debit">Debit</option>
            <option value="Voucher">Voucher</option>
          </select>
          <p>Pembayaran : {Payment} </p>
        </form>
        

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
