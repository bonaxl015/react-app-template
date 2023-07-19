import React, { useRef, useState } from 'react'
import { Form, Input, Button } from 'antd'
import styles from './login.scss'

interface LoginFormProps {
  isLogin: boolean
  login: () => void
  register: () => void
}

const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const { isLogin, login, register } = props
  const formRef = useRef(null)

  const processSubmit = () => {
    formRef?.current
      .validateFields()
      .then(value => {
        console.log(value)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <Form ref={formRef}>
        <Form.Item
          label=""
          name="username"
          rules={[
            () => ({
              validator(_, value) {
                if (!value) {
                  return Promise.reject(new Error('Username is required'))
                }
                return Promise.resolve()
              }
            })
          ]}
        >
          <Input maxLength={15} autoComplete="off" placeholder="Username" />
        </Form.Item>
        <Form.Item
          label=""
          name="password"
          rules={[
            () => ({
              validator(_, value) {
                if (!value) {
                  return Promise.reject(new Error('Password is required'))
                }
                return Promise.resolve()
              }
            })
          ]}
        >
          <Input.Password autoComplete="off" placeholder="Password" />
        </Form.Item>
        {!isLogin && (
          <Form.Item
            label=""
            name="name"
            rules={[
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.reject(new Error('Name is required'))
                  }
                  return Promise.resolve()
                }
              })
            ]}
          >
            <Input maxLength={15} autoComplete="off" placeholder="Name" />
          </Form.Item>
        )}
      </Form>
      <Button type="primary" block onClick={processSubmit}>
        {isLogin ? 'Login' : 'Register'}
      </Button>
      {isLogin ? (
        <div className={styles.bottomFormItem}>
          <span>No account yet? </span>
          <span className={styles.linkTextButton} onClick={register}>
            Sign up
          </span>
        </div>
      ) : (
        <div className={styles.bottomFormItem}>
          <span>Already have an account? </span>
          <span className={styles.linkTextButton} onClick={login}>
            Sign in
          </span>
        </div>
      )}
    </>
  )
}

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  const register = () => setIsLogin(false)

  const login = () => setIsLogin(true)

  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.formContainer}>
          <span className={styles.formTitle}>
            {isLogin ? 'Login' : 'Register'}
          </span>
          <LoginForm isLogin={isLogin} register={register} login={login} />
        </div>
      </div>
    </div>
  )
}

export default Login
