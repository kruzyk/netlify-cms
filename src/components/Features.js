import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>
            {item.text}
            <br/><br/>
            <a href={item.event} target="_blank"
          rel="noopener noreferrer">wydarzenie na FB</a>
            <br/>
            <a href={item.localisation} target="_blank"
          rel="noopener noreferrer">dojazd</a>
          </p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      localisation: PropTypes.string,
      event: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
