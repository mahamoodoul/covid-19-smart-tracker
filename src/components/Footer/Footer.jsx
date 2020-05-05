import React from 'react';
import styles from './Footer.module.css';
import fb from '../../image/fb.png';
import github from '../../image/github.png';

const Footer = () => {
    return (
        <div className={styles.container}>
            <h3>Developed by Mahmud Shakil</h3>
            <a  href="https://www.facebook.com/mahamodul.shakil.3/" target="_blank" class="active"><img className={styles.fb} src={fb} alt="facebook"/></a>
            <a   href="https://github.com/mahamoodoul" target="_blank" class="active"><img className={styles.github} src={github} alt="github"/></a>
        </div>
    );
};

export default Footer;