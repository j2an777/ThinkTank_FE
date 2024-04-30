import React from 'react'
import { ActiveBox, Container } from '../likes/styles'
import Icon from '../Icon'

interface PassProps {
    answerCount : number;
}

const Pass: React.FC<PassProps> = ({ answerCount }) => {
  return (
    <Container>
      <ActiveBox>
        <Icon value='check' />
      </ActiveBox>
        <p>{ answerCount }</p>
    </Container>
  )
}

export default Pass