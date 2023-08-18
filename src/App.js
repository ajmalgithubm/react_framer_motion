import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useInView } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useRef } from 'react'

function Home() {

  const {scrollYProgress} = useScroll()
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  const childVarients = {
    initial: {
      opacity: 0,
      y: '50px'
    },
    final: {
      opacity: 1, 
      y: '0px',
      transition: {
        duration: 0.5,
        delay: 0.5
      }
    }
  }

  const Routevarients = {
    initial: {
      y: '100vh'
    },
    final: {
      y: '0vh',
      transition: {
        type: "spring",
        mass: 0.5
      }
    }
  }
  return (
    <motion.div variants={Routevarients} initial='initial' animate='final' className="home component">
      <motion.div variants={childVarients} initial='initial' animate='final' >
        <h1>Demo Heading</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.

          Fringilla quam urna. Cras turpis elit, euismod eget ligula quis, imperdiet sagittis justo. In viverra fermentum ex ac vestibulum. Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt neque tincidunt a.</p>
          <h2>Sub Heading</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.

          Fringilla quam urna. Cras turpis elit, euismod eget ligula quis, imperdiet sagittis justo. In viverra fermentum ex ac vestibulum. Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt neque tincidunt a.Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac augue quis pretium.

          Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique, elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex ultricies, mollis mi in, euismod dolor.

          Quisque convallis ligula non magna efficitur tincidunt.

          Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi.

          Sed sem nisi, luctus consequat ligula in, congue sodales nisl.

          Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.</p>
          <h2>Sub-heading</h2>
        <motion.img  src='https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png' style={{
          width:'100%',
          height:'100%',
        }} initial={{x:"-50px", scale:0}} whileInView={{x:'0px',scale:1, transition:{type:'spring', stiffness:50}}} whileTap={{scale:1.1}} viewport={{once:true}}/>
      </motion.div>
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
  const childVarients = {
    initial: {
      opacity: 0,
      y: '50px'
    },
    final: {
      opacity: 1,
      y: '0px',
      transition: {
        delay: 0.5,
        duration: 0.5
      }
    }
  }
  const RouteVarients = {
    initial: {
      y: "100vh"
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.5
      }
    }
  }
  return (
    <motion.div className="about component" variants={RouteVarients} initial='initial' animate='final'>
      <motion.h1 variants={childVarients} initial="initial" animate='final'>About Component</motion.h1>
    </motion.div>
  )
}

function Contact() {
  const childVarients = {
    initial: {
      opacity: 0,
      x: '50px'
    },
    final: {
      opacity: 1,
      x: '0px',
      transition: {
        delay: 0.5,
        duration: 0.5
      }
    }
  }

  const RouteVarients = {
    initial: {
      opacity: 0
    },
    final: {
      opacity: [0, 0.5, 1],
      transition: {
        type: 'bezier',
        ease: [0.17, 0.67, 0.83, 0.67],
        duration: 0.5,

      }
    }
  }
  return (
    <motion.div className="contact component" variants={RouteVarients} initial='initial' animate='final'>
      <motion.h1 variants={childVarients} initial='initial' animate='final'>Contact Component</motion.h1>
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
