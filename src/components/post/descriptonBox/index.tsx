import { CATEGORY } from '../../../consts/post';
import { ShadowBox } from '../../shared';

import * as s from './styles';

const DescriptionBox = () => {
  return (
    <s.Container>
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
    </s.Container>
  );
};

export default DescriptionBox;
