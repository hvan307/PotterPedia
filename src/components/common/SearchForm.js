import React from 'react'

const SearchForm = ({ query, onChange }) => {
  return (
    <div className="SearchForm">
      <div className="container">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input is-medium"
              type="search"
              placeholder="Filter by name, role, house, or species"
              value={query}
              onChange={onChange}
            />
          </div>
          <div className="control">
            <a className="button is-medium">Search</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm