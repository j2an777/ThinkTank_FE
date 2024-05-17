import { Icon, Text } from '@/components/shared';
import * as S from './styles';
import { bestMakers, mostSolvedProblems } from '@/consts/mainExtraData';

const MainExtra = () => {
  return (
    <S.MeContainer>
      <S.SearchBox>
        <Icon value="search" size={24} color='gray100' $active={false}/>
        <input type="text" placeholder="유저 검색" />
      </S.SearchBox>
      <S.MeBox>
        <S.MeTitleBlock>
          <Icon value="trophy" size={32}/>
          <Text typography='t1' color='black' bold='semibold'>Best Maker</Text>
        </S.MeTitleBlock>
        <S.MeContentBlock>
          {bestMakers.map((maker) => (
            <Text typography='t4' color='black' bold='regular' key={maker.id}>
              {maker.id}. {maker.name}
            </Text>
          ))}
        </S.MeContentBlock>
      </S.MeBox>
      <S.MeBox>
        <S.MeTitleBlock>
          <Text typography='t1' color='black' bold='semibold'>Most Solved</Text>
        </S.MeTitleBlock>
        <S.MeContentBlock>
          {mostSolvedProblems.map((problem) => (
            <Text typography='t4' color='black' bold='regular' key={problem.id}>
              {problem.id}. {problem.title}
            </Text>
          ))}
        </S.MeContentBlock>
      </S.MeBox>
    </S.MeContainer>
  );
};

export default MainExtra;
