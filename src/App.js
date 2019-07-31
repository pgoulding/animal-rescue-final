import React, {Component} from 'react'
import Form from './Form';
import {connect} from 'react-redux'
import Donations from './Donations';
import Animals from './Animals';
import { fetchCalls } from './apiFetch';
import {addDonation, hasErrored, isLoading, addAnimals} from "./actions" 
class App extends Component {
  
  async componentDidMount() {
    this.props.isLoading(true)
    const animals = await fetchCalls('rescue-animals')
    this.props.addAnimals(animals)
    const donation = await fetchCalls('donations')
    this.props.addDonation(donation)
  
  }
  
  render () {

    if(this.isLoading) {
      return <img src='/images/giphy.gif' alt="loading page, please wait"/>
    }

    if(this.hasErrored) {
      return <h1>We're sorry there has been an error, please refresh or come back later</h1>
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


const mapStateToProps = ({hasErrored, isLoading}) => ({
  hasErrored,
  isLoading
})

const mapDispatchToProps = (dispatch) => ({
  addDonation: (donation) => dispatch(addDonation(donation)),
  addAnimals: (animals) => dispatch(addAnimals(animals)),
  isLoading:(loading) =>dispatch(isLoading(loading))
})



export default connect(mapStateToProps, mapDispatchToProps)(App)

