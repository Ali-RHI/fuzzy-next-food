import Attributes from '../modules/Attributes.js';
import Banner from '../modules/Banner.js';
import Definition from '../modules/Definition.js';
import styles from './HomePage.module.css';
function HomePage() {
	return (
		<div className={styles.container}>
			<Banner />
			<Attributes />
            <Definition/>
		</div>
	);
}

export default HomePage;
