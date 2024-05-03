import { Icon } from '@/components/shared';
import * as S from './styles';
import { colors } from '@/styles/colorPalette';
import { bestMakers, mostSolvedProblems } from './MainExtraData';

const MainExtra = () => {
  return (
    <S.MeContainer>
      <S.SearchBox>
        <Icon value="search" size={24} color={colors.gray50} />
        <input type="text" placeholder="Search" />
      </S.SearchBox>
      <S.MeBox>
        <S.MeTitleBlock>
          <Icon value="trophy" />
          <p>Best Maker</p>
        </S.MeTitleBlock>
        <S.MeContentBlock>
          {bestMakers.map((maker) => (
            <p key={maker.id}>
              {maker.id}. {maker.name}
            </p>
          ))}
        </S.MeContentBlock>
      </S.MeBox>
      <S.MeBox>
        <S.MeTitleBlock>
          <p>Most Solved</p>
        </S.MeTitleBlock>
        <S.MeContentBlock>
          {mostSolvedProblems.map((problem) => (
            <p key={problem.id}>
              {problem.id}. {problem.title}
            </p>
          ))}
        </S.MeContentBlock>
      </S.MeBox>
    </S.MeContainer>
  );
};

export default MainExtra;
