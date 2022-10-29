import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
	<ContentLoader
		className="content-ikon"
		speed={2}
		width={292}
		height={380}
		viewBox="0 0 292 380"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb">
		<rect x="1" y="1" rx="0" ry="0" width="288" height="320" />
		<rect x="1" y="335" rx="0" ry="0" width="246" height="14" />
		<rect x="-1" y="361" rx="0" ry="0" width="72" height="16" />
	</ContentLoader>
);

export default Skeleton;
