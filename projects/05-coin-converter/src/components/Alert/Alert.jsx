import './Alert.css'
import React, { useState } from 'react'

const Alert = () => {
  const [isClosingError, setIsClosingError] = useState(false)

  const handleClickError = () => {
    setIsClosingError(true)
  }

  return (
    <footer className={isClosingError ? 'footer-close' : 'footer-open'}>
      <div className='col'>
        <h4>
          <span>ERROR</span>
        </h4>
        <h5>The Maximum Length of the entry is 9 characters</h5>
      </div>
      <div className='container-close'>
        <span className='close' onClick={handleClickError}>&times;</span>
      </div>
    </footer>
  )
}

export default Alert
