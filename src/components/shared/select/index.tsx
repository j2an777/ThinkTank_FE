import { ForwardedRef, MouseEvent, RefAttributes, forwardRef, useState } from 'react';
import { CategoryOption, CategoryValues } from '../../../consts/category';

import * as S from './styles';

interface CategoryProps<T extends CategoryOption> {
  optionData: T[];
  type?: 'primary' | 'fill';
  onChnage?: (value: string) => void;
}

const InnerSelect = <T extends CategoryOption>(
  { optionData, type = 'primary', onChnage }: CategoryProps<T>,
  ref: ForwardedRef<HTMLSelectElement>,
) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [selected, setSelected] = useState<CategoryValues>(optionData[0].value);
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsExpand((prev) => !prev);
  };

  return (
    <S.Container onBlur={() => setIsExpand(false)} onMouseDown={handleMouseDown}>
      <S.Select
        name="select"
        type={type}
        value={selected}
        onChange={(e) => {
          const value = e.target.value as CategoryValues;
          setSelected(value);
        }}
        ref={ref}
      >
        {optionData.length > 0 &&
          optionData.map(({ value, name }) => (
            <option value={value} key={value}>
              {name}
            </option>
          ))}
      </S.Select>
      {isExpand && (
        <ul>
          {optionData.length > 0 &&
            optionData.map(({ value, name }, index) => {
              if (!index) {
                return;
              }
              return (
                <li
                  value={value}
                  key={value}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setSelected(value);
                    if (onChnage) onChnage(value);
                  }}
                >
                  {name}
                </li>
              );
            })}
        </ul>
      )}
    </S.Container>
  );
};

function fixedForwardRef<T, P = object>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
): (props: P & React.RefAttributes<T>) => React.ReactNode {
  return forwardRef(render) as (props: P & RefAttributes<T>) => React.ReactNode;
}

const Select = fixedForwardRef(InnerSelect);

export default Select;

// click을 blur전에 사용하려고 할 때에는 onMuouseDown을 사용하면 된다.
// blur 이벤트까지 포함해 mouseDown > blur > mouseUp > click 순서로 일어난다.
