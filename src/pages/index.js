import React from 'react'
import Header from '../components/Header'
import Services from '../components/Services'
import Bio from '../components/Bio'
import BlogSection from '../components/BlogSection'

import '../styles/global.scss'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Services />
                <Bio />
                <BlogSection />
            </div>
        )
    }
}

export default Home
