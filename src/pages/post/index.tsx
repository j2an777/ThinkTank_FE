import PostLeft from './left';
import PostRight from './right';

const PostPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <PostLeft />
      <PostRight />
    </div>
  );
};

export default PostPage;
