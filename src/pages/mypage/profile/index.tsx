import { ProfileTable } from '@/components/mypage';
import * as S from './styles';

export default function index() {
  return (
    <S.Container>
      <S.Block>
        <S.Title>프로필 수정</S.Title>
        <S.Subtitle>대표 프로필 사진과 별명을 수정 하실 수 있습니다.</S.Subtitle>
      </S.Block>
      <ProfileTable />
      <S.Block>
        <S.Logout>로그아웃</S.Logout>
      </S.Block>
      <S.Block>
        <S.Title>회원탈퇴</S.Title>
        <S.Subtitle>
          탈퇴 후 회원정보 및 개인형 서비스 이용기록은 모두 삭제됩니다. 탈퇴한 아이디는
          본인과 타인 모두 재사용 및 복구가 불가하오니 신중하게 선택하시기 바랍니다.
        </S.Subtitle>
      </S.Block>
    </S.Container>
  );
}
