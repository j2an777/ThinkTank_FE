import { Link } from "react-router-dom"
import * as S from './styles';
import Error from '../../assets/images/404.gif';

const ErrorPage = () => {
  return (
    <S.ErrorContainer>
        <S.ErrorTopBox>
            <S.ErrorPBlock>4</S.ErrorPBlock>
            <img src={Error} />
            <S.ErrorPBlock>4</S.ErrorPBlock>
        </S.ErrorTopBox>
        <S.ErrorBottomBox>
            <S.ErrorContentBlock>Page not found.</S.ErrorContentBlock>
            <Link to="/">Home</Link>
        </S.ErrorBottomBox>
    </S.ErrorContainer>
  )
}

export default ErrorPage