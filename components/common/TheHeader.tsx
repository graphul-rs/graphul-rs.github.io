import styles from './TheHeader.module.scss';

import { Component } from 'react';
import { GenericLink } from '../../typings';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface TheHeaderState {
  opened: boolean;
}

class TheHeader extends Component<{}, TheHeaderState> {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };

    this.toggleHamburger = this.toggleHamburger.bind(this);
  }

  private readonly links: GenericLink[] = [
    { url: 'https://crates.io/crates/graphul', text: '📖 Docs' },
    { url: 'https://github.com/graphul-rs/graphul/tree/main/examples', text: '🍳 Examples' },
    { url: 'https://github.com/graphul-rs/graphul', text: '📝 GitHub' },
    { url: 'https://www.patreon.com/samuelbonilla', text: '☕ Buy a Coffee' },
  ];

  private toggleHamburger() {
    this.setState({
      opened: !this.state.opened,
    });
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={`mid ${styles.headerMid}`}>
          <div className={styles.headerLeft}>
            <a href="/">
              <img
                src="/assets/images/logo.png"
                alt="Graphul"
                className={styles.logo}
              />
            </a>
          </div>

          <div>
            <nav className={this.state.opened ? styles.opened : undefined}>
              {this.links.map((link, idx) => (
                <a href={link.url} key={idx}>
                  {link.text}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className={styles.hamburgerOpener}>
          <a href="#" onClick={this.toggleHamburger}>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      </header>
    );
  }
}

export default TheHeader;
