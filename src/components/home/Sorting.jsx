import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
    <select onChange={e => setSort(e.target.value)} className='bg-white-200 py-3 px-5' id="">
        <option disabled value="">CHOOSE!</option>
        <option value="inc">Increasing</option>
        <option value="dec">Decreasing</option>
    </select>
    </div>
  )
}

export default Sorting