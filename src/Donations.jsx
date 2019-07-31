import React from 'react';
import { connect } from 'react-redux';
import './donations.scss'
const Donations = ({donations}) => {
  const donateCards = donations.map(donor => {
    return (
      <section>
        <p>{donor.name}: ${donor.donation}</p>
      </section>
    ) 
  })
  return (
    <aside>
      {donateCards}
    </aside>
  )
}

const mapStateToProps = ({donations}) => ({
  donations
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Donations)