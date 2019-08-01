import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card } from 'antd';

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </PageHeaderWrapper>
);
