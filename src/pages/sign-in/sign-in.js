import React from 'react';
import { Form as AntForm, Icon, Input, Button, message } from 'antd';
import styled from 'styled-components';
import AV from 'leancloud-storage';

const Root = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Header = styled.header`
  font-size: 1.5em;
  margin-bottom: 1em;
`;

const Form = styled(AntForm)`
  && {
    width: 370px;
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
`;

class SignInPage extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        console.console(err);
        return;
      }

      console.log('Received values of form: ', values);

      const { username, password } = values;

      try {
        await AV.User.logIn(username, password);
        this.props.history.push('/');
      } catch (error) {
        console.error(error);
        message.error(`登录失败：${error.rawMessage}`);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Root>
        <Header>Eker Code CMS</Header>

        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入您的管理员账号！' }],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                size="large"
                placeholder="管理员账号"
              />,
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入您的密码！' }],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                size="large"
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>

          <Form.Item>
            <SubmitButton type="primary" htmlType="submit" size="large">
              登录
            </SubmitButton>
          </Form.Item>
        </Form>
      </Root>
    );
  }
}

const WrappedSignInPage = Form.create()(SignInPage);

export default WrappedSignInPage;
