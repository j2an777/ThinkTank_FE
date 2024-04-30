import { Link, useLocation } from 'react-router-dom';

const TabMenu = () => {
  //const location = useLocation();
  //const currentTab = location.pathname;

  return (
    <div>
      <ul>
        <li>
          <Link to="?created">만든 문제</Link>
        </li>
        <li>
          <Link to="?solved">맞은 문제</Link>
        </li>
        <li>
          <Link to="?liked">즐겨찾기</Link>
        </li>
      </ul>
    </div>
  );
};

export default TabMenu;
