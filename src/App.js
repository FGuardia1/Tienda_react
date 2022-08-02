import './App.scss';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div >
        <Navbar/>
        <div className='container-fluid mx-auto'>
      {/*     <ItemListContainer Titulo="Productos destacados" /> */}
          <ItemDetailContainer/>
        </div>
       
    </div>
  );
}

export default App;
