import React, { useId } from 'react'
import { useFilters } from '../../hooks/useFilters'
import './Filters.css'

const Filters = () => {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters-container'>
      <div className='filter_price'>
        <label htmlFor={minPriceFilterId}>Min Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <strong>$ {filters.minPrice}</strong>
      </div>
      <div className='category-list'>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
