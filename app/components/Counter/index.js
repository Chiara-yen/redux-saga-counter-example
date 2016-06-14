import React, { Component, PropTypes } from 'react'
import './styles.styl'

const Counter = ({ value, actions }) =>
      <div>
        <div className='msgBlock'>
          Clicked: {value} times
        </div>
        <div className='block'>
          <button className='plusBtn' onClick={actions.increment}>
            +
          </button>
          <button className='minusBtn' onClick={actions.decrement}>
            -
          </button>
        </div>
        <div className='block'>
          <button className='plusBtn' onClick={actions.incrementAsync}>
            + ( async )
          </button>
          <button className='minusBtn' onClick={actions.decrementAsync}>
            - ( async )
          </button>
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrementAsync: PropTypes.func.isRequired,
  })
}

export default Counter
