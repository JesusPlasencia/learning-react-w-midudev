import './Alert.css'
import React, { useState } from 'react'

const Alert = () => {
  const [isClosingError, setIsClosingError] = useState(false)

  const handleClickError = () => {
    setIsClosingError(true)
  }

  return (
    <footer className={isClosingError ? 'footer-close' : 'footer-open'}>
      <h4>
        <span>Error</span>
        <span className='close' onClick={handleClickError}>&times;</span>
      </h4>
      <h5>The Maximum Length of the entry is 15 characters</h5>
    </footer>
  )
}

export default Alert
