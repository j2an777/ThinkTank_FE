import { Icon, Text } from '@/components/shared';
import * as S from './styles';
import { bestMakers, mostSolvedProblems } from '@/consts/mainExtraData';
import { useModalContext } from '@/contexts/ModalContext';

const MainExtra = () => {
  const { open } = useModalContext();
  return (
    <S.MeContainer>
      <S.SearchBox>
        <Icon value="search" size={24} color="gray100" $active={false} />
        <input
          type="text"
          placeholder="유저 검색"
          onFocus={() =>
            open({
              title: '아직 구현되지 않은 서비스입니다.',
              description: '추후 구현 예정입니다.',
              onButtonClick: () => {},
              buttonLabel: '확인',
            })
          }
        />
      </S.SearchBox>
      <S.MeBox>
        <S.MeTitleBlock>
          <Icon value="trophy" size={32} $active={false} />
          <Text typography="t1" color="black" bold="semibold">
            Best Maker
          </Text>
        </S.MeTitleBlock>
        <S.MeContentBlock>
          {bestMakers.map((maker) => (
            <Text typography="t4" color="black" bold="regular" key={maker.id}>
              {maker.id}. {maker.name}
            </Text>
          ))}
        </S.MeContentBlock>
      </S.MeBox>
      <S.MeBox>
        <S.MeTitleBlock>
          <Text typography="t1" color="black" bold="semibold">
            Most Solved
          </Text>
        </S.MeTitleBlock>
        <S.MeContentBlock>
          {mostSolvedProblems.map((problem) => (
            <Text typography="t4" color="black" bold="regular" key={problem.id}>
              {problem.id}. {problem.title}
            </Text>
          ))}
        </S.MeContentBlock>
      </S.MeBox>
    </S.MeContainer>
  );
};

export default MainExtra;
