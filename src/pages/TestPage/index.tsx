import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card } from 'antd';

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </PageHeaderWrapper>
);
