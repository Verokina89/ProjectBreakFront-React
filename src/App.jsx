
import { BrowserRouter  } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import './App.css';
import './index.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
        </BrowserRouter> 
      </UserProvider>
    
    </>
  )
}

export default App;