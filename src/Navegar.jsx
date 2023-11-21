import Header from './components/Header'
import Footer from './components/Footer'
import Inicio01 from './components/Inicio01'
import Inicio02 from './components/Inicio02'
import Inicio00 from './components/Inicio00'

function Navegar() {

  return (
    <>
      <div>
        <Header/>
        <Inicio00/>
        <Inicio01/>
        <Inicio02/>
        <Footer/>
      </div>
    </>
  )
}

export default Navegar;