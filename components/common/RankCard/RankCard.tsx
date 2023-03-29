import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Heart16Filled } from '@fluentui/react-icons';
import { Theme } from '@/styles/theme/Theme';
import * as _ from './style'

interface RankProps {
  photoID: number;
  photo: string;
  head: string;
  name: string;
  like: number;
  rank?: number;
}

const RankCard = ({photoID, photo, head, name, like, rank}: RankProps) => {
  const router = useRouter();
  const [good, setgood] = useState<boolean>(false);
  const click = useRef<boolean>(false);

  const move = () => {
    if(!click.current) router.push('/photo/' + photoID);
    click.current = false;
  }

  return (
    <_.Container onClick={() => move()}>
      {rank && 
        <_.Circle>
          <_.Text weight={900} size={16}>{rank}</_.Text>
        </_.Circle>
      }
      <_.Img src={photo}/>
      <_.BetweenBox>
        <_.GapBox>
          <_.UserImg />
          <_.NickName>{name}</_.NickName>
        </_.GapBox>
        <_.CursorBox onClick={() => {click.current = true; setgood(!good)}}>
          <_.Text color={good ? Theme.Red : Theme.Gray[50]}>{like}</_.Text>
          <Heart16Filled primaryFill={good ? Theme.Red : Theme.Gray[50]}/>
        </_.CursorBox>
      </_.BetweenBox>
      <_.Text weight={700} size={20}>{head}</_.Text>
    </_.Container>
  )
}

export default RankCard;