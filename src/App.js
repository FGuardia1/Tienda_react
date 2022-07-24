import './App.scss';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div >
        <Navbar/>
        <div className='container-fluid mx-auto'>
          <ItemListContainer Titulo="Productos destacados" />
        </div>
       
    </div>
  );
}

export default App;
