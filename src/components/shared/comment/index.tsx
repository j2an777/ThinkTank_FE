import React from 'react'
import { Container } from '../likes/styles'
import Icon from '../Icon'

interface CommentProps {
    comments : number;
}

const Comment: React.FC<CommentProps> = ({ comments }) => {
  return (
    <Container>
        <Icon value='comment' />
        <p>{comments}</p>
    </Container>
  )
}

export default Comment