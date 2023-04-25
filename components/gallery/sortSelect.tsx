import styled from "@emotion/styled";
import { Button } from "../common/button/style";

interface propsType{
    sort: string;
    setSort: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SortSelecter = ({sort, setSort}:propsType)=>{
    if(sort==='new'){
        return(
            <HzDiv>
                <Button Gray25>최신순</Button>
                <Button Gray5 onClick={()=>setSort(true)}>인기순</Button>
            </HzDiv>
        )
    }
    else{
        return(
            <HzDiv>
                <Button Gray5 onClick={()=>setSort(false)}>최신순</Button>
                <Button Gray25>인기순</Button>
            </HzDiv>
        )
    }
}

const HzDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    padding: 20px 0;
`