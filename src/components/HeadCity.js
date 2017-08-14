import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import CityPartsCat from './city/city-neco.png'
import CityPartsMid from './city/city-middle.png'
import CityPartsBak from './city/city-back.png'

import styles from './city/style.css'
console.log(styles)

import { rhythm } from '../utils/typography'

class HeadCity extends React.Component {
  constructor() {
    super()
    this.state = {
      scroll : 0,
    }
    this.handleScroll = this.handleScroll.bind(this)

  }
  handleScroll(ev) {
        console.log("Scrolling!");
        let sc = window.pageYOffset / 8
        this.setState({
          scroll: sc,
          cat: - 16 * sc,
          mid: - 8  * sc,
          bak: + 4  * sc
           })
         }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    }



  render() {
    return (
      <section id="top" className="citywrapper" onScroll={this.handleScroll.bind(this)} >
        <div className="citiImages" id="sky" >
          <div class="aboutme">
              <h1>MEGUMI TORII</h1>
              <h2>
                 DESIGNER<br />
                 in Tokyo, Japan
              </h2>
          </div>
          <img id="neco"   src={CityPartsCat} style={{ left:`${this.state.cat}px` }} />
          <img id="middle" src={CityPartsMid} style={{ left:`${this.state.mid}px`}}/>
          <img id="back"   src={CityPartsBak} style={{ left:`${this.state.bak}px`}} />
        </div>
      </section>
    )
  }
}

export default HeadCity
