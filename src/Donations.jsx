import React from 'react'

const Donations = ({donations}) => {
  const donateCards = donations.map(donor => {
    return (
      <section>
          <p>{donor.name}</p>
          <p>{donor.donation}</p>
      </section>
    ) 
  })
  return (
    <div>
      {donateCards}
    </div>
  )
}

const mapStateToProps = ({donations}) => ({
  donations
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Donations)