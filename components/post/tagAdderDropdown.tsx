import { AddCircle20Filled, Dismiss24Filled } from '@fluentui/react-icons';
import { useEffect, useRef, useState } from 'react';
import * as _ from './style'
import Input from '../common/input';
import { Theme } from "@/styles/theme/Theme";
import styled from '@emotion/styled';

interface main {
    setTSstatus:React.Dispatch<React.SetStateAction<boolean>>;
    array: string[];
    setArray: React.Dispatch<React.SetStateAction<string[]>>;
}

interface option{
    tagName: string;
    array: string[];
    setArray: React.Dispatch<React.SetStateAction<string[]>>;
}

function TagSelector({setTSstatus, array, setArray}:main){
    const [searchKeyword, setKeyword] = useState<string>('');
    const tagEnum = ["인간", "가구", "개", "경찰", "고양이", "곰", "교사", "기린", "꽃", "나무", "남성", "노인", "다람쥐", "도시", "독수리", "드워프", "따뜻한", "물고기", "바다", "밝은", "배", "뱀", "별", "사이버펑크", "사자", "산", "새", "석양", "시골", "식물", "아이", "안개", "어두운", "엘프", "여성", "여우", "연못", "우주", "우주선", "음식", "이구아나", "자동차", "차가운", "초원", "하늘", "학교", "학생", "해변", "햄스터", "호랑이", "호수", "오크"];

    return(
        <_.addTagMain className='tag-selector'>
            <IconButton onClick={()=>setTSstatus(false)}>
                <Dismiss24Filled primaryFill={Theme.Black} />
            </IconButton>
            <Input title='태그 검색' width='100%' value={searchKeyword} setValue={setKeyword}/>
            <_.tagOptionList>
                {tagEnum.filter(data=> {return data.includes(searchKeyword)}).map((text)=>(<TagListOption tagName={text} array={array} setArray={setArray} key={text} />))}
            </_.tagOptionList>
        </_.addTagMain>
    )
}

function TagListOption({tagName, array, setArray}:option){
    function addTag(){
        if(array.length>4) {
            alert('태그는 5개까지만 추가할 수 있습니다');
            return null;
        }
        setArray([...array,tagName]);
    }

    if(!array.includes(tagName)){
        return(
        <_.tagOptionDiv>
            <IconButton onClick={addTag}>
                <AddCircle20Filled primaryFill={Theme.Gray[25]}/>
            </IconButton>
            <p>{tagName}</p>
        </_.tagOptionDiv>
        )
    }
    else return null;
}

const IconButton = styled.button`
    border: none;
    background: none;
    width: 24px;
    cursor: pointer;
`

export default TagSelector;