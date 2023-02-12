import FeatureItem from '@site/src/models/FeatureItem';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';


function Feature({ title, Svg, description, index, five }: Extract<FeatureItem, {  index: number, five: boolean }>) {
    if (five) {
        return (
            <div className={clsx('col col--3')}>
                <div className={clsx("text--center", styles.iconContainer)}>
                    <Svg className={clsx(styles.icons, styles.svgFill)} role="img" />
                </div>
                <div className={`text--center padding-horiz--md`} >
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
    return (
        <div className={clsx('col col--6')}>
            <div className={index == 0 ? "text--right" : "text--left"}>
                <Svg style={{maxWidth: "100%"}} role="img" />
            </div>
            <div className={index == 0 ? "text--right padding-right--lg" : "text--left padding-left--lg" + ` padding-horiz--md`} >
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Feature;