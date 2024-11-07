import React from 'react'
import Questions from '../components/Questions.js'
import NavBar from '../components/Nabar.js'
import Footer from '../components/Footer.js'
export const Home = () => {
    return (
        <div>
            <NavBar/>
            <Questions />
            <Footer/>
        </div>
    )
}
export default Home;