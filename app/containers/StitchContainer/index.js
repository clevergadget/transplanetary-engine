/*
 *
 * StitchContainer
 *
 * usage: import StitchContainer from 'containers/StitchContainer'
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectVisibleStitches } from 'containers/Game/selectors'
import Stitch from 'containers/Stitch'
import Choices from 'containers/Choices'
import SciFiBackground from 'images/scifibackground.jpg'
import styled from 'styled-components'

class StitchContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  renderStitches = () => {
    const renderedStitches = []
    let index = 0
    this.props.visibleStitches.forEach(stitch =>
      renderedStitches.push(<Stitch key={index++} stitch={stitch} />)
    )
    return renderedStitches
  }

  render() {
    const GreyBox = styled.div`
    background-color: #000b;
    color: white;
    padding: 1em;
    width: 90%;
    margin: 1em;
    `
    const Container = styled.div`
    background: url(${SciFiBackground}) no-repeat center center fixed;
    background-size: cover;
    display: flex;
    flexDirection: column;
    alignItems: center;
    height: 95.5vh;
    margin: 1em;
    `
    return (
      <Container>
        <GreyBox>
          { this.renderStitches() }
        </GreyBox>
        <div style={ { width: '90%' } }>
          <Choices />
        </div>
      </Container>
    )
  }
}

StitchContainer.propTypes = {
  visibleStitches: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  visibleStitches: selectVisibleStitches(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
    // nameOfFunctionToCall: inputName => dispatch(nameOfAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StitchContainer)
