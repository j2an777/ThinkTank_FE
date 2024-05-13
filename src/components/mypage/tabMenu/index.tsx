import { useLocation, Link } from 'react-router-dom';
import { CreatedMenu, SolvedMenu, LikedMenu } from '@/components/mypage';
import * as S from './styles.ts';

const TabMenu = () => {
  const location = useLocation();
  const currentTab = location.hash.slice(1) || 'created';

  const tabs = [
    { id: 'created', label: '만든 문제', component: CreatedMenu },
    { id: 'solved', label: '맞은 문제', component: SolvedMenu },
    { id: 'liked', label: '즐겨찾기', component: LikedMenu },
  ];

  return (
    <S.Container>
      <S.TabMenu>
        {tabs.map((tab) => (
          <S.TabBox key={tab.id} active={currentTab === tab.id}>
            <Link to={`?value=${tab.id}`}>{tab.label}</Link>
          </S.TabBox>
        ))}
      </S.TabMenu>
      <div>
        {tabs.map((tab) => currentTab === tab.id && <tab.component key={tab.id} />)}
      </div>
    </S.Container>
  );
};

export default TabMenu;
