import { CATEGORY } from '../../../consts/post';
import { ShadowBox } from '../../shared';

import * as S from './styles';

const DescriptionBox = () => {
  return (
    <S.Container>
      <select name="choice" id="">
        {CATEGORY.map(({ value, name }) => (
          <option value={value} key={value}>
            {name}
          </option>
        ))}
      </select>
      <ShadowBox>
        <input type="text" />
        <textarea name="" id=""></textarea>
      </ShadowBox>
    </S.Container>
  );
};

export default DescriptionBox;
