import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

function Home() {
  const Routevarients = {
    initial:{
      y:'100vh'
    },
    final:{
      y:'0vh',
      transition:{
        type:"spring",
        mass:0.5
      }
    }
  }
  return (
    <motion.div variants={Routevarients} initial='initial' animate='final' className="home component">
      <h1>Home Component</h1>
    </motion.div>
  )
}


function Header() {
  return (
    <div className="header">
      <span>Header component</span>
      <ul>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>

      </ul>
    </div>
  )
}

function About() {

  const RouteVarients = {
    initial:{
      y:"100vh"
    },
    final:{
      y:"0vh",
      transition:{
        type:"spring",
        mass:0.5
      }
    }
  }
  return (
    <motion.div className="about component" variants={RouteVarients} initial='initial' animate='final'>
      <h1>About Component</h1>
    </motion.div>
  )
}

function Contact() {
  const RouteVarients = {
    initial:{
      opacity:0
    },
    final:{
      opacity:[0, 0.5, 1],
      transition:{
        type:'bezier',
        ease: [0.17, 0.67, 0.83, 0.67],
        duration:0.5,
       
      }
    }
  }
  return (
    <motion.div className="contact component" variants={RouteVarients} initial='initial' animate='final'>
      <h1>Contact Component</h1>
    </motion.div>
  )
}

function LocationProvider({ children }) {
  return (
    <AnimatePresence>
      {children}
    </AnimatePresence>
  )
}

function RoutesWithAnimations() {
  const location = useLocation();
  console.log(location);
  return (
    <Routes location={location} key={location.key}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <div className="App">
          <Header />
          <LocationProvider>
            <RoutesWithAnimations />
          </LocationProvider>
        </div>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
