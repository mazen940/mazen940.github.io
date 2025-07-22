import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import {Header, Footer } from './sections/index'
import {Container} from './components/index'
import { Home, Profile } from './Pages/index'


const App = () =>{
    return(
        <>
        <Router>
            <Header />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Profile' element={<Profile />} />
                    
                    
                </Routes>   
            </Container>
            <Footer />
        </Router>
        </>
        
    )
}
export default App