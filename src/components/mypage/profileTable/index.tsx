import * as S from './styles.ts';

const ProfileTable = () => {
  return (
    <S.Container>
      <S.Table>
        <S.Thead>
          <S.Th height={280}>프로필 사진</S.Th>
          <S.Th height={120}>별명</S.Th>
        </S.Thead>
        <S.Tbody>
          <S.Td height={280}>프로필 사진</S.Td>
          <S.Td height={120}>
            <S.Input />
          </S.Td>
        </S.Tbody>
      </S.Table>
      <S.Block>
        <S.Button>적용</S.Button>
        <S.Button>취소</S.Button>
      </S.Block>
    </S.Container>
  );
};

export default ProfileTable;
