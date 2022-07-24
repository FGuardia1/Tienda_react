import './App.scss';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div >
        <Navbar/>
       <ItemListContainer Titulo="Productos destacados" />
    </div>
  );
}

export default App;
