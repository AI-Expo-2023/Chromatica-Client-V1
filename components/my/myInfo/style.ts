import styled from '@emotion/styled';
import { Theme } from '@/styles/theme/Theme';

export const Flex = styled.div`
  width: 80%;
  height: 170px;
  background-color: ${Theme.Gray[5]};
  border-radius: 8px;
  padding: 20px;
`;

export const Warpper = styled.div`
  display: flex;
  align-items: center;
  & > div {
    margin-left: 20px;
  }
`;

export const Profile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 999px;
  border: none;
  background-color: gray;
`;

export const Nickname = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const Email = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: ${Theme.Gray[50]};
`;

export const ButtonWarpper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;
