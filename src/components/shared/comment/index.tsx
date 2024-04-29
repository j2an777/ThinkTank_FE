import React from 'react'
import { ActiveBox, Container } from '../likes/styles'
import Icon from '../Icon'

interface CommentProps {
    commentCount : number;
}

const Comment: React.FC<CommentProps> = ({ commentCount }) => {
  return (
    <Container>
      <ActiveBox>
        <Icon value='comment' />
      </ActiveBox>
        <p>{commentCount}</p>
    </Container>
  )
}

export default Comment