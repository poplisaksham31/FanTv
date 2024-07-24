import { headings } from '../utils/constants';
import styles from './TopSection.module.css';
import arrowRight from '../../assests/ArrowRight.svg';
import rectangle1 from '../../assests/Rectangle1.svg';
import pinkArrow from '../../assests/PinkArrow.svg';
import rectangle2 from '../../assests/Rectangle2.svg';
import rectangle3 from '../../assests/Rectangle3.svg';
import rectange4 from '../../assests/Rectangle4.svg';
import rectangle5 from '../../assests/Rectangle5.svg';
import rectangle6 from '../../assests/Rectangle6.svg';
import cyanCurveArrow from '../../assests/CyanCurveArrow.svg';
import cyanArrow from '../../assests/CyanArrow.svg';
import crossIcon from '../../assests/CrossIcon.svg'

export const TopSection = () => {
    return (
        <div className={styles.TopSectionContainer}>
            <div className={styles.Heading}>
                {headings.TOP_HEADING}
            </div>
            <div className={styles.SubHeading}>{headings.SUB_HEADING}</div>
            <div className={styles.ButtonAndImages}>
                <button className={styles.ComingSoonButton}>
                    <div className={styles.ComingSoon}>Coming Soon</div>
                    <img src={arrowRight} alt='left_arrow'/>
                </button>
                <img src={rectangle1} alt='image_1' className={styles.Image1} />
                <img src={pinkArrow} alt='image_2' className={styles.SubImage1} />
                <img src={rectangle2} alt='image_3' className={styles.Image2} />
                <img src={rectangle3} alt='image_4' className={styles.Image3} />
                <img src={rectange4} alt='image_5' className={styles.Image4} />
                <img src={cyanCurveArrow} alt='cyan_arrow' className={styles.SubImage2} />
                <img src={rectangle5} alt='image_6' className={styles.Image5} />
                <img src={rectangle6} alt='image_7' className={styles.Image6} />
                <img src={cyanArrow} alt='image_8' className={styles.Image7} />
            </div>
            <div className={styles.SubContainer}>
                <div className={styles.SubSection}>
                    <div className={styles.SubSectionContainer}>
                        <div className={styles.SubSectionHeading}>No. of Node Operators</div>
                        <img src={crossIcon} alt='cross_icon'/>
                    </div>
                    <div className={styles.SubSectionNote}>2000</div>
                </div>
                <div className={styles.SubSection}>
                    <div className={styles.SubSectionContainer}>
                        <div className={styles.SubSectionHeading}>Data Transferred in TB <span className={styles.BottomText}>(last 30 days)</span></div>
                        <img src={crossIcon} alt='cross_icon'/>
                    </div>
                    <div className={styles.SubSectionNote}>12,000</div>
                </div>
            </div>
            <hr className={styles.HorizontalLine} />
            <hr className={styles.HorizontalLine1} />
            <hr className={styles.HorizontalLine2} />
            <div className={styles.HorizontalLinesContainer}>
                {[1, 2, 3, 4, 5]?.map((item, index) => <hr className={styles.Horintallines} />)}
            </div>
            <hr className={styles.HorizontalLine3} />
            <div className={styles.HorizontalLinesContainer2}>
                {[1, 2]?.map((item, index) => <hr className={styles.Horintallines} />)}
            </div>
            <hr className={styles.VerticalLine} />
            <hr className={styles.VerticalLine1} />
            <hr className={styles.VerticalLine11} />
            <hr className={styles.VerticalLine3} />
            <hr className={styles.VerticalLine31} />
            <hr className={styles.VerticalLine4} />
            <hr className={styles.VerticalLine41} />
            <hr className={styles.VerticalLine5} />
            <hr className={styles.VerticalLine51} />
            <hr className={styles.VerticalLine2} />
            <div className={styles.ObliqueContainer}>
                {Array.apply(null, Array(30))
                    .map(function () { })?.map((item) => <hr className={styles.ObliqueLines} />)}
            </div>
            <div className={styles.ObliqueContainer2}>
                {Array.apply(null, Array(30))
                    .map(function () { })?.map((item) => <hr className={styles.ObliqueLines} />)}
            </div>
        </div>
    )
}