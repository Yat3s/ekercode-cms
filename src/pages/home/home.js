import React from 'react';
import { Alert } from 'antd';
import styled from 'styled-components';

export default function() {
  return (
    <>
      <Alert
        type="info"
        message={<>Eker Code 内容管理平台</>}
        description={<>请点击左侧导航侧边栏中的菜单项进入对应的功能模块。</>}
      />
    </>
  );
}
