import * as React from 'react'
import {useState,useCallback,useEffect} from 'react'
import {Form,Input,Button, message} from 'antd'
import {User} from '@/typings/api'
import request, { AxiosResponse } from '@/api/request';
import {UserAddResponse} from '@/typings/api'
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps
function UserAdd(props:Props) {
  let [user, setUser] = useState<User>({} as User)
  // useCallback包装的函数 会被返回，不会重复创建，会有数据缓存问题，一定要关联里面的数据，一旦数据更新函数重新返回
  const handleSubmit = useCallback(() => {
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
  }, [user])
  const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      username: event.target.value
    })
  }
  // setUser之后 立即取值 使用useEffect包装
  useEffect(() => {
    console.log('new user', user)
  },[user])
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