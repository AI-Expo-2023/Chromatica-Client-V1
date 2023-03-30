import { Theme } from "@/styles/theme/Theme"
import styled from "@emotion/styled";
import { Dismiss20Filled } from "@fluentui/react-icons"

type tagType = {
    data: string;
    onClick?: ()=>void;
}

export const RemovableTag = ({data, onClick}:tagType)=>{
    return(
        <TagContainer>
            <button>
                <Dismiss20Filled primaryFill={Theme.Gray[50]} />
            </button>
            {data}
        </TagContainer>
    )
}

const TagContainer = styled.div`
    border: 1px ${Theme.Gray[75]} solid;
    border-radius: 888px;
    padding: 6px 12px;
    display: flex;
    align-items: center;

    & > button{
        background: none;
        border: none;
    }
`