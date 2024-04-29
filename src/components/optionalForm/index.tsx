import * as S from './styles.ts';
import { Icon, InputBox } from '../shared/index.ts';

export default function OptionalForm() {
  return (
    <S.ShadowBox>
      <Icon value='logo' />
      <div style={{ width: '70%' }}>
        <form>
          <InputBox label="깃허브" type="text" />
          <S.Blank />
          <InputBox label="블로그" type="text" />
          <S.Blank />
          <InputBox label="자기소개" type="text" />
          <S.Blank />
          <button style={{ cursor: 'pointer' }}>회원가입</button>
        </form>
      </div>
    </S.ShadowBox>
  );
}
