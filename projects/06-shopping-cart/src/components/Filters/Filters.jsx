import React, { useState } from 'react'
import './Filters.css'

const Filters = () => {
  const [minPrice, setMinPrice] = useState(0)
  const [category, setCategory] = useState('')

  const handleChange = (event) => {
    setMinPrice(event.target.value)
  }

  const handleCategory = (event) => {
    setCategory(event.target.value)
    console.log(event.target.value)
  }

  return (
    <section className='filters-container'>
      <div className='filter_price'>
        <label htmlFor='price'>Price</label>
        <input
          type='range'
          id='price'
          min={0}
          max={4000}
          onChange={handleChange}
        />
        <strong>$ {minPrice}</strong>
      </div>
      <div className='category-list'>
        <label htmlFor='category'>Category</label>
        <select id='category' onChange={handleCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
