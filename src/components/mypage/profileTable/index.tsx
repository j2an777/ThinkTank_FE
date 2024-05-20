import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { getUserInfo, putUser } from '@/apis/user'; // uploadProfileImage API 추가
import { UserCircle } from '@/components/shared';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserModify } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { useModalContext } from '@/contexts/ModalContext';
import { AxiosError } from 'axios';

const ProfileTable = () => {
  const { register, handleSubmit, reset } = useForm<UserModify>({});
  const initialValues = useRef<UserModify | null>(null);
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(null);
  const { open } = useModalContext();

  const { data: userData } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      return await getUserInfo();
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });

  useEffect(() => {
    if (userData) {
      initialValues.current = userData as UserModify;
      reset(userData as UserModify);

      if (userData.profileImage) {
        setProfileImage(`${import.meta.env.BASE_URL}${userData.profileImage}`);
      }
    }
  }, [userData, reset]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSubmit: SubmitHandler<UserModify> = async (data: UserModify) => {
    if (initialValues.current?.nickname === data.nickname) {
      data.nickname = null;
    }
    // const formData = new FormData();
    // if (data.nickname !== null) formData.append('nickname', data.nickname);
    // formData.append('github', data.github ?? '');
    // formData.append('blog', data.blog ?? '');
    // formData.append('introduce', data.introduce ?? '');

    // // Add selected file if it exists
    // if (selectedFile) {
    //   formData.append('profileImage', selectedFile);
    // }

    try {
      await putUser(data);
      open({
        title: '프로필 수정이 완료되었습니다.',
        onButtonClick: () => {},
        hasCancelButton: false,
        buttonLabel: '확인',
      });
    } catch (error) {
      let errorMessage = '알 수 없는 에러가 발생했습니다. 다시 시도해주세요.';
      if (error instanceof AxiosError && error.response) {
        errorMessage = error.response.data.message;
      }

      open({
        title: '프로필 수정 실패',
        description: errorMessage,
        onButtonClick: () => {},
        hasCancelButton: false,
        buttonLabel: '확인',
      });

      reset(userData as UserModify);
    }
  };

  return (
    <S.Container>
      <S.Table>
        <S.Thead>
          <div>
            <S.Th height={250}>프로필 사진</S.Th>
            <S.Th height={100}>별명</S.Th>
            <S.Th height={100}>깃허브</S.Th>
            <S.Th height={100}>블로그</S.Th>
            <S.Th height={150}>자기소개</S.Th>
          </div>
        </S.Thead>
        <S.Tbody>
          <div>
            <S.Td height={250}>
              <UserCircle size={150} profileImage={profileImage as string} />
              <input
                css={{ marginLeft: '30px' }}
                type="file"
                accept="image/*"
                onChange={onFileChange}
              />
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
            <S.Td height={150}>
              <S.TextArea {...register('introduce')} />
            </S.Td>
          </div>
        </S.Tbody>
      </S.Table>
      <S.Block>
        <S.Button onClick={handleSubmit(onSubmit)}>적용</S.Button>
        <S.Button onClick={() => reset(userData)}>취소</S.Button>
      </S.Block>
      <div></div>
    </S.Container>
  );
};

export default ProfileTable;
