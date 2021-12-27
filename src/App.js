//main
import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import './index.css'
//componet
import Footer from './component/Footer'
import Hero from './pages/Hero'
import Items from './component/Items'
import Navbar from './component/Navbar'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import CheckOut from './component/CheckOut'


//data
import items from './data'
import ErrorPage from './pages/ErrorPage'

const allCategories = ['All',...new Set(items.map((item) => item.category))]

const App = () => {
    //AddToCart
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState([])
    const handleAddtoCart = () =>{
        setCount(count + 1)
    }
    const AddToCart = (item) => {
        setCart([...cart, {...item}])
    }
    //Categories
    const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategories] = useState(allCategories) 
    const filterItems = (category) => {
        if (category === 'All'){
            setMenuItems(items)
            return
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
    }
    return (
    <Router>
        <Navbar cart={cart}/>
         <Routes>
                    <Route path='/Home' element={<><Hero /><Items categories={categories} filterItems={filterItems} items={menuItems} handleAddtoCart={handleAddtoCart} count={count} addToCart={AddToCart} /></>}>
                    </Route>
                    <Route path='/SignIn' element={<SignIn/>}/>
                    <Route path='/SignUp' element={<SignUp/>}/>
                    <Route path='/CheckOut' element={<CheckOut cart={cart} setCart={setCart} items={menuItems} handleAddtoCart={handleAddtoCart}  addToCart={AddToCart} />}/>
                    <Route path='*' element={<ErrorPage/>} />
        </Routes>
        <Footer />
    </Router>
    )
}

export default App


            
            
           
                    
               
              
              
        
                
           
            
          
            

