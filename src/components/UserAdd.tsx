import * as React from 'react'
import {useState} from 'react'
import {Form,Input,Button, message} from 'antd'
import {User} from '@/typings/api'
import request, { AxiosResponse } from '@/api/request';
import {UserAddResponse} from '@/typings/api'
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps
function UserAdd(props:Props) {
  let [user, setUser] = useState<User>({} as User)
  const handleSubmit = () => {
    if (user && user.username) {
      // request.post('/api/user', user).then((response:AxiosResponse<UserAddResponse>) => {
      //   let {data,code} = response.data
      //   if (code === 0) {
      //     message.success('保存成功')
      //   } else {
      //     message.error('保存失败')
      //   }
      // })
      message.success('保存成功')
      props.history.push('/user/list')
    } else {
      message.error('请输入用户名')
    }
  }
  const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      username: event.target.value
    })
  }
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        label="用户名"
        name="username"
        rules={[{required:true,message:'请输入用户名'}]}
      >
        <Input
          placeholder="用户名"
          style={{width:'120px'}}
          value={user.username}
          onChange={handleNameChange}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  )
}
export default UserAdd