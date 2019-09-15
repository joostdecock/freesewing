import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import PatternOptions from './PatternOptions'
import DraftSettings from './DraftSettings'

const DraftConfigurator = props => {
  const [expanded, setExpanded] = useState([])

  return (
    <ul className="config l1">
      <li>
        <span>
          <FormattedMessage id="app.patternOptions" />
        </span>
        <PatternOptions
          noDocs={props.noDocs}
          config={props.config}
          gist={props.gist}
          recipe={props.recipe}
          updateValue={(name, value) => props.updateGist(value, 'settings', 'options', name)}
          raiseEvent={props.raiseEvent}
          units={props.units}
        />
      </li>
      <li>
        <span>
          <FormattedMessage id="app.draftSettings" />
        </span>
        <DraftSettings
          noDocs={props.noDocs}
          config={props.config}
          gist={props.gist}
          recipe={props.recipe}
          updateValue={(name, value) => props.updateGist(value, 'settings', name)}
          raiseEvent={props.raiseEvent}
          units={props.units}
        />
      </li>
    </ul>
  )
}

DraftConfigurator.propTypes = {
  units: PropTypes.oneOf(['metric', 'imperial']).isRequired
}

DraftConfigurator.defaultProps = {
  noDocs: false
}

export default DraftConfigurator
