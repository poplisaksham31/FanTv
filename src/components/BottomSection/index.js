import { headings } from '../utils/constants';
import styles from './BottomSection.module.css';

export const BottomSection = () => {
    return (
        <div className={styles.BottomContainer}>
            <div className={styles.Heading}>The transition CDN-dCDN</div>
            <div className={styles.Content}>{headings.FANTV_FEATURE}</div>

        </div>
    )
}