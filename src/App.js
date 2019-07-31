import React, {Component} from 'react'
import Form from './Form';
import {connect} from 'react-redux'
import Donations from './Donations';
import Animals from './Animals';
import { fetchCalls } from './apiFetch';
import loadingImage from './images/giphy.gif'
import './App.css'
import { bindActionCreators } from 'redux';
import {addDonation, hasErrored, isLoading, addAnimals} from "./actions" 
import { fetchAnimals, fetchDonations } from './thunks';
class App extends Component {
  
  async componentDidMount() {
    fetchAnimals('rescue-animals')
    fetchDonations('donations')
    // const animals = await fetchAnimals('rescue-animals')
    // this.props.addAnimals(animals)
    // const donation = await fetchDonations('donations')
    // this.props.addDonation(donation)
    // if(this.props.animals.length) {
    //   this.props.loadingPage(false)
    // }
    // console.log(animals.response)
  }
  
  render () {

    if(this.props.isLoading) {
      return <img  className="loading-image" src={loadingImage} alt="loading page, please wait"/>
    }

    if(this.props.hasErrored) {
      return <h1 className="error-page">{this.props.hasErrored}</h1>
    }
    return (
      <main>
        <header>
          <Form />
          <Donations />
        </header>
        <Animals />
      </main>
    )
  }

} 


const mapStateToProps = ({hasErrored, isLoading, animals, donations}) => ({
  hasErrored,
  isLoading,
  animals,
  donations
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ addDonation, addAnimals, loadingPage, hasErrored }, dispatch)
  // addDonation: (donation) => dispatch(addDonation(donation)),
  // addAnimals: (animals) => dispatch(addAnimals(animals)),
  // loadingPage:(loading) =>dispatch(isLoading(loading))
)



export default connect(mapStateToProps, mapDispatchToProps)(App)

