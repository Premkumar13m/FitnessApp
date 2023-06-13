import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from './home/home'
import Login from './components/login'
import Header from './components/header'
import Footer from './components/footer'
import Signup from './components/signup'


const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <div>
      <Header/>
      <Login/>
      <Footer/>
    </div>
      
    
  )
}
