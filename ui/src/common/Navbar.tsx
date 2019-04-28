import React from 'react'

import CategoriesLinks from './CategoriesLinks'
import LinkIcon from './LinkIcon'
import styles from './Navbar.module.css'
import UserInfos from './UserInfos'

export default () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <h1>
          <img src={process.env.PUBLIC_URL + '/logo_white.svg'} />
        </h1>
        <UserInfos />
      </li>
      <li className={styles.links}>
        <span>Articles</span>
        <ul>
          <li>
            <LinkIcon to="/unread" icon="view_list">
              Articles to read
            </LinkIcon>
          </li>
          <li>
            <LinkIcon to="/offline" icon="signal_wifi_off">
              Offline articles
            </LinkIcon>
          </li>
          <li>
            <LinkIcon to="/history" icon="history">
              History
            </LinkIcon>
          </li>
        </ul>
      </li>
      <li className={styles.links}>
        <span>Categories</span>
        <CategoriesLinks />
      </li>
      <li className={styles.links}>
        <ul>
          <li>
            <LinkIcon to="/settings" icon="settings">
              Settings
            </LinkIcon>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
)
