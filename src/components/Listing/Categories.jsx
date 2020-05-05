import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

export default class Categories extends Component {
  render() {
    const { categories } = this.props
    return (
      <>
        {categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {!!i && ', '}
            <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
          </React.Fragment>
        ))}
      </>
    )
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
}
