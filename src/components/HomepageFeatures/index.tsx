import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Feature from '../atoms/Feature/Feature';
import RoutingContent from '../atoms/TabFeatureContent/RoutingContent';
import ServeStaticFilesContent from '../atoms/TabFeatureContent/ServeStaticFilesContent';
import MiddlewareContent from '../atoms/TabFeatureContent/MiddlewareContent';
import TemplateEnginesContent from '../atoms/TabFeatureContent/TemplateEnginesContent';
import WebsocketsContent from '../atoms/TabFeatureContent/WebsocketsContent';
import RateLimitContent from '../atoms/TabFeatureContent/RateLimitContent';
import FeatureCardList from './FeatureCardList';
import FeatureTwoCols from './FeatureTwoColList';

export default function HomepageFeatures(): JSX.Element {
  const tabs = [
    { value: "routing", label: "Routing", Content: RoutingContent },
    { value: "serve-static-files", label: "Serve Static Files", long: true, Content: ServeStaticFilesContent },
    { value: "middlewares", label: "Middleware Support", long: true, Content: MiddlewareContent },
    { value: "template-engines", label: "Template Engines", Content: TemplateEnginesContent },
    { value: "websocket", label: "WebSocket Support", Content: WebsocketsContent },
    { value: "rate-limiter", label: "Rate Limiter", Content: RateLimitContent },
  ]

  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <Tabs className={styles.tabsAlign} >
            {tabs.map((value, index) => (
              <TabItem value={value.value} key={value.value} label={value.label} default={index == 0} attributes={value.long ? { className: styles.tabs } : { className: styles.colorTabs }}>
                {value.Content ? <value.Content /> : value.value}
              </TabItem>
            ))}
          </Tabs>
        </div>
      </section>
      <section>
        <div className={clsx(styles.separator)}>
          <div className="container card">
            <div className='row'>
              {FeatureCardList.map((props, idx) => (
                <Feature key={idx} {...props} index={idx} five={true} />
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {FeatureTwoCols.map((props, idx) => (
              <Feature key={idx} {...props} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
