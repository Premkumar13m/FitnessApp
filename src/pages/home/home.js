import React from 'react'
import Hero from './hero'
import Header from '../components/header'
import Services from './varieties'
import Bmi from './bmi'
import Login from '../components/login'
import Levels from './levels'
import Footer from '../components/footer'
import Questions from './questions'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Bmi/>
      <Levels/>
      <Services/>
      <Questions/>
      <Footer/>
    </div>
  )
}
