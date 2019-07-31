import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDonation } from './actions'
import { fetchCalls } from './apiFetch';
export class Form extends Component {
  constructor(){
    super()
    this.state ={
      name:'',
      donation:''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newDonation = { 
      ...this.state, 
      id: Date.now()
    }
    const options ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newDonation)
    }
    fetchCalls('donations/', options)
    this.props.addDonation([newDonation])
  } 

  render() {
    return (
      <form>
        <input
          placeholder="Name"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          placeholder="Donation Amount"
          name="donation"
          type="number"
          value={this.state.donation}
          onChange={this.handleChange}
        />
        <button onClick={(e) => this.handleSubmit(e)}>
          Donate!
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  addDonation: (donation) => dispatch(addDonation(donation))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
