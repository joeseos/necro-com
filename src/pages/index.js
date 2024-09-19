import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/core-rules">
            CORE RULES
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{ marginLeft: '10px' }}
            to="/docs/gangs">
            GANGS
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{ marginLeft: '10px' }}
            to="/docs/trading-post">
            TRADING POST
          </Link>
        </div>
      </div>
    </header>
  );
}
