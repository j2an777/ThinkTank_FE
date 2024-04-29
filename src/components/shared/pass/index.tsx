import React from 'react'
import { Container } from '../likes/styles'
import Icon from '../Icon'

interface PassProps {
    passes : number;
}

const Pass: React.FC<PassProps> = ({ passes }) => {
  return (
    <Container>
        <Icon value='check' />
        <p>{passes}</p>
    </Container>
  )
}

export default Pass