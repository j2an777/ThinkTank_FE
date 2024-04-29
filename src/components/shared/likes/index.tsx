import { useState } from "react";
import Icon from "../Icon"
import { ActiveBox, Container } from "./styles"

interface LikesProps {
    like : number;
}

const Likes: React.FC<LikesProps> = ({ like }) => {

  const [likePopup, setLikePopup] = useState(false);
  const [jellyAnimation, setJellyAnimation] = useState(false);
  
  const onHandleLike = () => {
    setLikePopup(!likePopup);
    setTimeout(() => {
      setJellyAnimation(!jellyAnimation);
    }, 100);
  }

  return (
    <Container>
      <ActiveBox onClick={onHandleLike} className={jellyAnimation ? 'jelly' : ''}>
        <Icon value={likePopup ? "yeslike" : "nolike"} />
      </ActiveBox>
      <p>{like}</p>
    </Container>
  )
}

export default Likes