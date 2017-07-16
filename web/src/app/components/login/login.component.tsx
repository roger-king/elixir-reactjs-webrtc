import './login.component.scss';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { UIRouterReact } from '@uirouter/react';
import { Form, Button, Input, Icon, Checkbox } from 'antd';
const FormItem = Form.Item;

/**
 * LoginComponent
 */

@inject('user_store')
@observer
class LoginForm extends React.Component<any, any> {
    constructor() {
        super();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.user_store
                    .login(values.email, values.password)
                    .then((response) => {
                        if (response.status === 201) {

                        } else {

                        }
                    });
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <Input prefix={<Icon type="email" style={{ fontSize: 13 }} />} placeholder="email" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                            )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        <p />
                        <a href="">register now!</a>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedLoginForm = Form.create()(LoginForm);

export class LoginComponent extends React.Component<any, any> {
    render() {
        return (
            <WrappedLoginForm />
        );
    }
}
