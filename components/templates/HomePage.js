import Attributes from '../modules/Attributes.js';
import Banner from '../modules/Banner.js';
import Companies from '../modules/Companies.js';
import Definition from '../modules/Definition.js';
import Guide from '../modules/Guide.js';
import Instruction from '../modules/Instruction.js';
import Restrictions from '../modules/Restrictions.js';
import styles from './HomePage.module.css';
function HomePage() {
	return (
		<div className={styles.container}>
			<Banner />
			<Attributes />
			<Definition />
			<Companies />
			<Instruction />
			<Guide />
			<Restrictions />
		</div>
	);
}

export default HomePage;
