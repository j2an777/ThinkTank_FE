import { Link } from "react-router-dom"
import { ErrorBottomBox, ErrorContainer, ErrorContentBlock, ErrorPBlock, ErrorTopBox } from "./styles"
import Error from '../../assets/images/404.gif';

const ErrorPage = () => {
  return (
    <ErrorContainer>
        <ErrorTopBox>
            <ErrorPBlock>4</ErrorPBlock>
            <img src={Error} />
            <ErrorPBlock>4</ErrorPBlock>
        </ErrorTopBox>
        <ErrorBottomBox>
            <ErrorContentBlock>Page not found.</ErrorContentBlock>
            <Link to="/">Home</Link>
        </ErrorBottomBox>
    </ErrorContainer>
  )
}

export default ErrorPage