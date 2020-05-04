import React, { Component } from 'react'
import './Gridcontainer.css'

class Gridcontainer extends Component {
  state = {
    loading: true,
    logos: null,
  }

  async componentDidMount() {
    const url = 'https://api.randomuser.me/?results=6'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ logos: data.results, loading: false })
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }
    if (!this.state.logos.length) {
      return <div>No blogs to display</div>
    }

    const logoJsX = this.state.logos.map(logo => (
      <div className="container" key={logo.login.uuid}>
        <img className="blog" src={logo.picture.large} alt="img"></img>
        {/* <img className="blog" src={logo.picture.large} alt="img"></img>
          <img className="blog" src={logo.picture.large} alt="img"></img> */}
      </div>
    ))

    //const logo1Jsx = [];

    // this.state.logos.map(logo => {
    //   logo1Jsx.push(
    //     <div className="container">
    //       <img className="blog" src={logo.picture.large} alt="img"/>
    //     </div>

    //   )
    // })
    // console.log(logo1Jsx)
    return <div className="container">{logoJsX}</div>
  }
}
export default Gridcontainer
