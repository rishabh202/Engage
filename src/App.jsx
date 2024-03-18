import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <>
      <div className='appContainer'>
      <Sidebar></Sidebar>
      <div className="appContent">
      <Header></Header>
      <Footer></Footer>
      </div>
      </div>
    </>
  )
}

export default App
