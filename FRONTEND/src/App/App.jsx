import { useContext } from 'react'
import AddProductForm from '../Components/Forms/AddProductForm'
import Header from '../Components/Header/Header'
import Shop from '../Pages/Shop'
import './App.css'
import HeaderContext from '../Context/HeaderContext'

function App() {
  const HeaderCtx = useContext(HeaderContext)


  return (
    <>
      <Header />
      <Shop />
      {HeaderCtx.addProductCard && <AddProductForm />}
    </>
  )
}

export default App
