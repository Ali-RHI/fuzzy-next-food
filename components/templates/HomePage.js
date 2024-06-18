import Banner from '../modules/Banner.js';
import styles from './HomePage.module.css';
function HomePage() {
	return (
		<div className={styles.container}>
			<Banner />
		</div>
	);
}

export default HomePage;
