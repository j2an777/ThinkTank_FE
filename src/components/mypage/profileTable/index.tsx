import { useEffect } from 'react';
import * as S from './styles';
import { getUserInfo, putUser } from '@/apis/user';
import { User } from '@/types/auth';
import { UserCircle } from '@/components/shared';
import { SubmitHandler, useForm } from 'react-hook-form';
interface UserModify extends Omit<User, 'email'> {}
const ProfileTable = () => {
  const { register, handleSubmit, reset } = useForm<UserModify>();

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUserInfo();
      reset(userData);
    };
    fetchUserData();
  }, []);

  const onSubmit: SubmitHandler<UserModify> = async (data: UserModify) => {
    try {
      await putUser(data);
      alert('수정 완료');
    } catch (error) {
      alert('수정 실패');
    }
  };

  return (
    <S.Container>
      <S.Table>
        <S.Thead>
          <tr>
            <S.Th height={250}>프로필 사진</S.Th>
            <S.Th height={100}>별명</S.Th>
            <S.Th height={100}>깃허브</S.Th>
            <S.Th height={100}>블로그</S.Th>
          </tr>
        </S.Thead>
        <S.Tbody>
          <tr>
            <S.Td height={250}>
              <UserCircle size={150} />
            </S.Td>
            <S.Td height={100}>
              <S.Input {...register('nickname')} />
            </S.Td>
            <S.Td height={100}>
              <S.Input {...register('github')} />
            </S.Td>
            <S.Td height={100}>
              <S.Input {...register('blog')} />
            </S.Td>
          </tr>
        </S.Tbody>
      </S.Table>
      <S.Block>
        <S.Button onClick={handleSubmit(onSubmit)}>적용</S.Button>
        <S.Button onClick={() => reset()}>취소</S.Button>
      </S.Block>
      <div></div>
    </S.Container>
  );
};

export default ProfileTable;
