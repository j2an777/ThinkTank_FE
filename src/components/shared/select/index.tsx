import { MouseEvent, useState } from 'react';
import { CategoryOption, CategoryValues } from '@/consts/category';
import { motion } from 'framer-motion';

import * as S from './styles';

interface CategoryProps<T extends CategoryOption> {
  optionData: T[];
  type?: 'primary' | 'fill';
  onChange?: (value: string) => void;
}

const subMenuAnimate = {
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
    display: 'block',
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const Select = <T extends CategoryOption>({
  optionData,
  type = 'primary',
  onChange,
}: CategoryProps<T>) => {
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
      >
        {optionData.length > 0 &&
          optionData.map(({ value, name }) => (
            <option value={value} key={value}>
              {name}
            </option>
          ))}
      </S.Select>

      <motion.div
        initial="exit"
        animate={isExpand ? 'enter' : 'exit'}
        variants={subMenuAnimate}
      >
        <S.SelectList>
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
                    if (onChange) onChange(value);
                  }}
                >
                  {name}
                </li>
              );
            })}
        </S.SelectList>
      </motion.div>
    </S.Container>
  );
};

export default Select;

// click을 blur전에 사용하려고 할 때에는 onMuouseDown을 사용하면 된다.
// blur 이벤트까지 포함해 mouseDown > blur > mouseUp > click 순서로 일어난다.
