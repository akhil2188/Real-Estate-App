import React from "react";
import styles from './styles.module.css';
import classnames from 'classnames';

const Hero = () => {
    const classes = classnames('hero', 'hero-lg', 'mb-3', styles.hero)
    return (
        <div className={classes}>
            <div className="hero-body text-center text-light">
                <h2 className="hero-title mb-0">Find a home that suits your lifestyle.</h2>
            </div>
        </div>
      )
}

export default Hero;
