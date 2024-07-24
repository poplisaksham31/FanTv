import { headings } from '../utils/constants';
import arrowRightBlack from '../../assests/ArrowRightBlack.svg';
import globe from '../../assests/Globe.svg';
import styles from './MiddleSection.module.css';
import ellipse1 from '../../assests/Ellipse1.svg';
import ellipse2 from '../../assests/Ellipse2.svg';
import ellipse3 from '../../assests/Ellipse3.png';
import ellipse4 from '../../assests/Ellipse4.svg';
import ellipse5 from '../../assests/Ellipse5.svg';
import ellipse6 from '../../assests/Ellipse6.svg';
import ellipse7 from '../../assests/Ellipse7.svg';
import ellipse8 from '../../assests/Ellipse8.svg';
import ellipse10 from '../../assests/Ellipse10.svg';
import ellipse11 from '../../assests/Ellipse11.svg';
import ellipse12 from '../../assests/Ellipse12.svg';
import ellipse13 from '../../assests/Ellipse13.svg';
import ellipse14 from '../../assests/Ellipse14.svg';
import ellipseCyan from '../../assests/EllipseCyan.svg';
import outside1 from '../../assests/Outside1.svg';
import outside2 from '../../assests/Outside2.svg';
import outside3 from '../../assests/Outside3.svg';
import outside4 from '../../assests/Outside4.png';
import outside5 from '../../assests/Outside5.svg';

const CommingSoon = ({ backgroundColor, borderColor, textColor }) => {
    return (
        <div className={styles.ComingSoon} style={{background: backgroundColor, color: textColor, border: `5px solid ${borderColor}`}}>Coming soon</div>
    )
}

const CircularDesign = ({fillColor}) => {
    return (
      <div className={styles.CircularDesignContainer}>
        {Array.apply(null, Array(4))?.map((upperItem, upperIndex) => (
          <div className={styles.CircularDesignRow}>
            {Array.apply(null, Array(2 + upperIndex * 4))
              .map(function () {})
              ?.map((item, index) => (
                <div
                  style={{
                    width: `${0.5 * index}px`,
                    height: `${0.5 * index}px`,
                    borderRadius: "50%",
                    background: fillColor,
                    margin: "5px",
                  }}
                ></div>
              ))}
            {Array.apply(null, Array(2 + upperIndex * 4))?.map(
              (item, index) => (
                <div
                  style={{
                    width: `${0.5 * (2 + upperIndex * 4 - index)}px`,
                    height: `${0.5 * (2 + upperIndex * 4 - index)}px`,
                    borderRadius: "50%",
                    background: fillColor,
                    margin: "5px",
                  }}
                ></div>
              )
            )}
          </div>
        ))}
      </div>
    );
}

export const MiddleSection = () => {
    return (
        <div className={styles.MiddleSection}>
            <div className={styles.Heading}>{headings.FANCLOUD_FEATURE}</div>
            <div className={styles.SubHeading}>
                {headings.FANCLOUD_FEATURE_DETAIL}
            </div>
            <div className={styles.GlobeSection}>
                    <img src={globe} alt='globe'/>
                <div className={styles.BorderAround}>
                    <div className={styles.EllipseConatiner}></div>
                    <img src={ellipse1} alt='elipse1' className={styles.Ellipse1} />
                    <img src={ellipse2} alt='elipse2' className={styles.Ellipse2} />
                    <img src={ellipseCyan} alt='elipseCyan' className={styles.EllipseCyan} />
                    <img src={ellipse3} alt='ellipse3' className={styles.Ellipse3} />
                    <img src={ellipse4} alt='ellipse4' className={styles.Ellipse4} />
                    <img src={ellipse5} alt='ellipse5' className={styles.Ellipse5} />
                    <img src={ellipse6} alt='ellipse6' className={styles.Ellipse6} />
                    <img src={ellipse7} alt='ellipse7' className={styles.Ellipse7} />
                    <img src={ellipse8} alt='ellipse8' className={styles.Ellipse8} />
                    <img src={outside1} alt='outside1' className={styles.Outside1} />
                    <img src={outside2} alt='outside2' className={styles.Outside2} />
                    <img src={outside3} alt='outside3' className={styles.Outside3} />
                    <img src={ellipse10} alt='ellipse10' className={styles.Ellipse10} />
                    <div className={styles.CircularContainer}></div>
                    <img src={ellipse11} alt='ellipse11' className={styles.Ellipse11} />
                    <img src={ellipse12} alt='ellipse12' className={styles.Ellipse12} />
                    <img src={ellipse13} alt='ellipse13' className={styles.Ellipse13} />
                    <img src={outside4} alt='outside4' className={styles.Outside4} />
                    <img src={outside5} alt='outside5' className={styles.Outside5} />
                    <img src={ellipse14} alt='ellipse14' className={styles.Ellipse14} />
                    </div>
            </div>
            <div className={styles.SubSection}>
                <div className={`${styles.SubSectionItem} ${styles.FirstItem}`}>
                    <div className={`${styles.ItemHeading}`}>Content Nodes</div>
                    <div className={`${styles.ItemDetails}`}>{headings.CONTENT_NODES}</div>
                    <div className={styles.CommingSoonAlignment}>
                    <CircularDesign fillColor={"#aca7f1"}/>
                    <div className={styles.Deploy}>
                        <div className={styles.DeployHeading}>Deploy</div>
                            <img src={arrowRightBlack} alt='arrow_right'/>
                        </div>
                        </div>
                </div>
                <div className={`${styles.SubSectionItem} ${styles.SecondItem}`}>
                    <div className={`${styles.ItemHeading}`}>Orchestrators</div>
                    <div className={`${styles.ItemDetails}`}>{headings.ORCHESTORS}</div>
                    <CircularDesign fillColor={"#fff"}/>
                    <div className={styles.CommingSoonAlignment}>
                    <CommingSoon
                        backgroundColor={'#7A186F'}
                        borderColor={'#FFC4F8'}
                        textColor={'#FFC4F8'}
                        />
                    </div>

                </div>
                <div className={`${styles.SubSectionItem} ${styles.ThirdItem}`}>
                    <div className={`${styles.ItemHeading}`}>Validators</div>
                    <div className={`${styles.ItemDetails}`}>{headings.VALIDATORS}</div>
                    <CircularDesign fillColor={"rgb(105 105 105)"}/>
                    <div className={styles.CommingSoonAlignment}>
                        <CommingSoon
                            backgroundColor={'#0A9B6B'}
                            borderColor={'#6DFFCF'}
                            textColor={'#DDFFF4'}
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}