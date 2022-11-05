import styles from './TheFooter.module.scss';
import { Component } from 'react';
import { GenericLink } from '../../typings';

class FooterLink extends Component<GenericLink> {
  render() {
    return (
      <a href={this.props.url} target="_blank">
        {this.props.text}
      </a>
    );
  }
}

const Links = {
  Fenny: () => <FooterLink url="https://github.com/fenny" text="Fenny" />,
  Contributors: () => (
    <FooterLink
      url="https://github.com/gofiber/fiber/graphs/contributors"
      text="Contributors"
    />
  ),
  ProjectLicense: () => (
    <FooterLink
      url="https://github.com/graphul-rs/graphul/blob/main/LICENSE"
      text="MIT License"
    />
  ),
  LogoDesigner: () => (
    <FooterLink url="https://github.com/koddr" text="Vic Shóstak" />
  ),
  LogoLicense: () => (
    <FooterLink
      url="https://creativecommons.org/licenses/by-sa/4.0"
      text="Creative Commons"
    />
  ),
  GitBook: () => <FooterLink url="https://gitbook.com" text="GitBook.com" />,
  WebsiteBy: () => <FooterLink url="https://sallai.me" text="József Sallai" />,
  EditedBy: () => <FooterLink url="https://github.com/SamuelBonilla" text="Samuel Bonilla" />,
};

class TheFooter extends Component {
  render() {
    return (
      <footer className={styles.mainFooter}>
        <div className="mid">
          Copyright (c) 2019-present <Links.Fenny />.
          Graphul is free and open-source software licensed under the{' '}
          <Links.ProjectLicense />.
          Website by <Links.WebsiteBy />.
          Edited by <Links.EditedBy />.
        </div>
      </footer>
    );
  }
}

export default TheFooter;
