import RankCard from "@/components/common/RankCard/RankCard"
import styled from "@emotion/styled";

interface propsType{
    data: postDataType[];
}

interface postDataType {
    photo: string;
    user: string;
    head: string;
    like: number;
}

export const PostLister = ({data}:propsType)=>{
    console.log(data);
    return(
        <SixHorizon>
            {data.map((aa)=>
                (<RankCard head={aa.head} like={aa.like} name={aa.user} photo={aa.photo} key={aa.photo+aa.like} photoID={aa.photo} />
            ))}
        </SixHorizon>
    )
}

const SixHorizon = styled.div`
    width: 1300px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`