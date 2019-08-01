import { Icon, Tooltip } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { ConnectProps, ConnectState } from '@/models/connect';
import Avatar from './AvatarDropdown';
import { isDev } from '@/utils/index';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';
export interface GlobalHeaderRightProps extends ConnectProps {
  theme?: SiderTheme;
  layout: 'sidemenu' | 'topmenu';
}

const handleGoToHome = (): void => {
  if (isDev()) {
    window.location.href = 'http://localhost:8000';
  } else {
    window.location.href = 'http://beta-tsp.coocaa.com/ui';
  }
};

const GlobalHeaderRight: React.SFC<GlobalHeaderRightProps> = props => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      <Tooltip title="返回平台管理中心">
        <a
          target="_blank"
          // eslint-disable-next-line no-script-url
          href="javascript:void(0);"
          onClick={() => handleGoToHome()}
          rel="noopener noreferrer"
          className={styles.action}
        >
          <Icon type="home" />
        </a>
      </Tooltip>
      <Avatar />,
    </div>
  );
};

export default connect(({ settings }: ConnectState) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
