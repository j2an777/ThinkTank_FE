import { Icon, StyledButton, Text } from '@/components/shared';
import { navItems } from '@/consts/navItems';
import { Link } from 'react-router-dom';

import * as S from './styles';
import { useEffect, useState } from 'react';
import { ButtonSize } from '@/styles/button';
import { useModalContext } from '@/contexts/ModalContext';

const notComplete = ['Search', 'Problem', 'Setting'];

const Nav = () => {
  const [iconSize, setIconSize] = useState(48);
  const [buttonSize, setButtonSize] = useState<ButtonSize>('large');
  const [buttonContent, setButtonContent] = useState('Post');
  const { open } = useModalContext();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 570) {
        setIconSize(36);
        setButtonSize('medium');
        setButtonContent('+');
      } else if (window.innerWidth <= 900) {
        setIconSize(48);
        setButtonSize('medium');
        setButtonContent('+');
      } else {
        setIconSize(48);
        setButtonSize('large');
        setButtonContent('Post');
      }
    };

    window.addEventListener('resize', handleResize);

    // 초기 크기 설정
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onClickNonComplete = () => {
    open({
      title: '아직 구현되지 않은 서비스입니다.',
      description: '추후 구현 예정입니다.',
      onButtonClick: () => {},
      buttonLabel: '확인',
    });
  };

  return (
    <S.NavContainer>
      <S.NavLogoBox>
        <Icon value="logo" size={300} $active={false} />
      </S.NavLogoBox>
      <S.NavItemBox>
        {navItems.map((item) => {
          if (notComplete.includes(item.label)) {
            return (
              <div className="disabledItem" onClick={onClickNonComplete} key={item.label}>
                <Icon value={item.icon} size={iconSize} />
                <Text typography="t2" bold="bold" color="black">
                  {item.label}
                </Text>
              </div>
            );
          } else {
            return (
              <Link to={item.path} key={item.label}>
                <Icon value={item.icon} size={iconSize} />
                <Text typography="t2" bold="bold" color="black">
                  {item.label}
                </Text>
              </Link>
            );
          }
        })}
      </S.NavItemBox>
      <Link to="/post">
        <StyledButton size={buttonSize} width="300px" resize="50px">
          {buttonContent}
        </StyledButton>
      </Link>
    </S.NavContainer>
  );
};

export default Nav;
