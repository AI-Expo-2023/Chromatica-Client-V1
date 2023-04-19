import AuthBox from '@/components/common/authBox';
import { Button } from '@/components/common/button/style';
import Input from '@/components/common/input';
import styled from '@emotion/styled';
import { useState } from 'react';
import router from 'next/router';
import axios from 'axios';

const BASEURL = 'http://192.168.102.169:8080';

const PwChangeC = (): JSX.Element => {
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  const NPWPost = () => {
    const token = window.localStorage.getItem('token');

    const regExpPw = /(?=.*[!@#$%^&*]{1,})(?=.*[a-zA-Z]{1,}).{8,20}$/;
    if (!regExpPw.test(newPassword)) {
      alert('비밀번호 규칙 위반');
      return false;
    } 
    else if (password == newPassword) {
      alert('기존 비밀번호와 새 비밀번호가 같습니다');
      return false;
    }
    else {
      console.log(token);
      axios
      .request({
        url: `${BASEURL}/user/updatePW`,
        method: 'patch',
        data: {
          PW: password,
          newPW: newPassword,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) => {
        console.log("성공");
        router.push('/auth/complete');
      })
      .catch((error: any) => {
        alert('비밀번호 변경 실패');
      });
    };
  }
    
  return (
    <AuthBox title="비밀번호 변경">
      <Content>
        <Input value={password} setValue={setPassword} title="기존 비밀번호" isPassword />
        <Input
          value={newPassword}
          setValue={setNewPassword}
          title="새 비밀번호"
          text="8~20자 이내, 영문 알파벳, 특수문자(!, @, #, $, %, ^, &, *)를 1자 이상 포함해야 합니다"
          isPassword
        />
        <Button MainColor onClick={() => NPWPost()}>
          다음
        </Button>
      </Content>
    </AuthBox>
  );
};

export default PwChangeC;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 20px 0 0 0;
`;
