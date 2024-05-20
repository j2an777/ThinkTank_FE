import { ProfileTable } from '@/components/mypage';
import * as S from './styles';
import { Icon, Text } from '@/components/shared';
import { useNavigate } from 'react-router-dom';
import { removeAccess } from '@/hooks/auth/useLocalStorage';
import { deleteUser } from '@/apis/user';
import { useModalContext } from '@/contexts/ModalContext';

const Profile = () => {
  const navigate = useNavigate();
  const { open } = useModalContext();

  const logout = () => {
    removeAccess();
    navigate('/');
  };

  const onDelete = () => {
    open({
      title: '회원탈퇴',
      description:
        '정말 탈퇴하시겠습니까? 탈퇴 후 회원정보 및 개인형 서비스 이용기록은 모두 삭제됩니다.',
      onButtonClick: () => {
        deleteUser();
        removeAccess();
        navigate('/');
      },
      hasCancelButton: true,
      buttonLabel: '확인',
    });
  };

  return (
    <S.Container>
      <S.Block>
        <S.CancelIcon value="cancel" onClick={() => navigate(-1)} />
        <Text typography="t2" bold="bold">
          프로필 수정
        </Text>
        <Text typography="t5" color="gray200">
          대표 프로필 사진과 별명을 수정 하실 수 있습니다.
        </Text>
      </S.Block>
      <S.Block>
        <ProfileTable />
      </S.Block>
      <S.Block>
        <S.Box>
          <Text typography="t2" color="red" bold="bold">
            로그아웃
          </Text>
          <Icon value="logout" onClick={logout} />
        </S.Box>
      </S.Block>
      <S.Block>
        <S.Box>
          <Text typography="t2" color="black" bold="bold">
            회원탈퇴
          </Text>
          <Icon value="quit" onClick={onDelete} />
        </S.Box>
        <Text typography="t5" color="gray200">
          탈퇴 후 회원정보 및 개인형 서비스 이용기록은 모두 삭제됩니다. <br />
          탈퇴한 아이디는 본인과 타인 모두 재사용 및 복구가 불가하오니 신중하게 선택하시기
          바랍니다.
        </Text>
      </S.Block>
    </S.Container>
  );
};

export default Profile;
