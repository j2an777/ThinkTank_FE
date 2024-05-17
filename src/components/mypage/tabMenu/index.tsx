import { ArticlesMenu, SolvedMenu } from '@/components/mypage';
import * as S from './styles.ts';
import { useState } from 'react';

const TabMenu = () => {
  const [currentTab, setCurrentTab] = useState('created');

  const tabs = [
    { id: 'created', label: '만든 문제', component: ArticlesMenu },
    { id: 'solved', label: '맞은 문제', component: SolvedMenu },
    { id: 'liked', label: '즐겨찾기', component: ArticlesMenu },
  ];

  return (
    <S.Container>
      <S.TabMenu>
        {tabs.map((tab) => (
          <S.TabBox
            key={tab.id}
            active={currentTab === tab.id}
            onClick={() => setCurrentTab(tab.id)}
          >
            {tab.label}
          </S.TabBox>
        ))}
      </S.TabMenu>
      <div>
        {tabs.map(
          (tab) =>
            currentTab === tab.id && (
              <tab.component
                key={tab.id}
                value={tab.id as 'created' | 'liked' | 'solved'}
              />
            ),
        )}
      </div>
    </S.Container>
  );
};

export default TabMenu;
