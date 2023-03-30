import { Theme } from "@/styles/theme/Theme"
import styled from "@emotion/styled";
import { Dismiss20Filled } from "@fluentui/react-icons"

type tagType = {
    data: string;
    array: string[];
    setArray: React.Dispatch<React.SetStateAction<string[]>>;
}

export const RemovableTag = ({data, array, setArray}:tagType)=>{
    function arrayMod(){
        setArray(array.filter((tag)=>{return tag != data}))
    }
    return(
        <TagContainer>
            <button onClick={arrayMod}>
                <Dismiss20Filled primaryFill={Theme.Gray[50]} />
            </button>
            <p>{data}</p>
        </TagContainer>
    )
}

const TagContainer = styled.div`
    border: 1px ${Theme.Gray[75]} solid;
    border-radius: 888px;
    padding: 6px 12px;
    display: flex;
    align-items: center;
    gap: 4px;

    & > button{
        background: none;
        border: none;
        height: 20px;
        cursor: pointer;
    }
    &>p{
        line-height: 20px;
        font-size: 18px;
    }
`