import * as S from './styles.ts';

const UserInfo = () => {
  return (
    <S.Container>
      <S.LeftBox>
        <S.ProfileImage></S.ProfileImage>
      </S.LeftBox>
      <S.RightBox>
        <S.Edit>편집</S.Edit>
        <S.UserName>soohyun Kim</S.UserName>
        <S.UserEmail>soo@gmail.com</S.UserEmail>
        <S.UserIntro>
          hello hello hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello hello hello
        </S.UserIntro>
      </S.RightBox>
    </S.Container>
  );
};

export default UserInfo;
