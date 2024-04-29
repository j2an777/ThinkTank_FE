import * as S from './styles';

type IconValues = 'plus' | 'arrow' | 'cancel';

interface IconProps {
  value: IconValues;
  rotate?: boolean;
  onClick?: () => void;
}

const Icon = ({ value, rotate, onClick, ...props }: IconProps) => {
  return (
    <S.Container rotate={rotate} onClick={onClick} {...props}>
      {renderIcon(value)}
    </S.Container>
  );
};

const renderIcon = (value: IconValues) => {
  switch (value) {
    case 'plus':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M28 14H18V4C18 2.896 17.104 2 16 2C14.896 2 14 2.896 14 4V14H4C2.896 14 2 14.896 2 16C2 17.104 2.896 18 4 18H14V28C14 29.104 14.896 30 16 30C17.104 30 18 29.104 18 28V18H28C29.104 18 30 17.104 30 16C30 14.896 29.104 14 28 14Z"
            fill="#EEB930"
          />
        </svg>
      );
    case 'arrow':
      return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path
            d="M40.3418 31.9629L40.166 31.7578L26.8848 16.4746C26.4355 15.957 25.7617 15.6348 25.0098 15.6348C24.2578 15.6348 23.584 15.9668 23.1348 16.4746L9.86328 31.7285L9.63867 31.9824C9.47266 32.2266 9.375 32.5195 9.375 32.832C9.375 33.6816 10.0977 34.375 10.9961 34.375L39.0039 34.375C39.9023 34.375 40.625 33.6816 40.625 32.832C40.625 32.5098 40.5176 32.207 40.3418 31.9629Z"
            fill="#EEB930"
          />
        </svg>
      );
    case 'cancel':
      return (
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
          <path
            d="M39.0918 35.908C39.5145 36.3307 39.7519 36.9039 39.7519 37.5017C39.7519 38.0995 39.5145 38.6728 39.0918 39.0955C38.6691 39.5182 38.0958 39.7556 37.498 39.7556C36.9003 39.7556 36.327 39.5182 35.9043 39.0955L23.9999 27.1873L12.0918 39.0917C11.6691 39.5144 11.0958 39.7519 10.498 39.7519C9.90027 39.7519 9.32698 39.5144 8.90429 39.0917C8.4816 38.669 8.24414 38.0957 8.24414 37.498C8.24414 36.9002 8.4816 36.3269 8.90429 35.9042L20.8124 23.9998L8.90804 12.0917C8.48535 11.669 8.24789 11.0957 8.24789 10.498C8.24789 9.90019 8.48535 9.3269 8.90804 8.90422C9.33073 8.48153 9.90402 8.24406 10.5018 8.24406C11.0996 8.24406 11.6729 8.48153 12.0955 8.90422L23.9999 20.8123L35.908 8.90234C36.3307 8.47965 36.904 8.24219 37.5018 8.24219C38.0996 8.24219 38.6729 8.47965 39.0955 8.90234C39.5182 9.32503 39.7557 9.89832 39.7557 10.4961C39.7557 11.0939 39.5182 11.6672 39.0955 12.0898L27.1874 23.9998L39.0918 35.908Z"
            fill="#444444"
          />
        </svg>
      );
  }
};

export default Icon;
