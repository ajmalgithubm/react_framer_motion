import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'


function Home() {
  return (
    <div className="home component">
      <h1>Home Component</h1>
    </div>
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
  return (
    <div className="about component">
      <h1>About Component</h1>
    </div>
  )
}

function Contact() {
  return (
    <div className="contact component">
      <h1>Contact Component</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
