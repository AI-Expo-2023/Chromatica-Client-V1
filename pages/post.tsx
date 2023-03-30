import Input from "@/components/common/input";
import TagSelector from "@/components/post/addTag";
import { useState } from "react";
import { Button } from "@/components/common/button/style";
import { Add20Filled } from "@fluentui/react-icons";
import { Theme } from "@/styles/theme/Theme";
import { TextArea } from "@/components/post/textArea";
import { RemovableTag } from "@/components/post/tagRemovable";
import styled from "@emotion/styled";

type postType = {
    photo: string;
    head: string;
    tag: string[];
    description: string;
}

export default function PostPage(){
    const [title, setTitle] = useState<string>('');
    const [Desc, setDesc] = useState<string>('');
    const [Photo, setPhoto] = useState<string>('');
    const [TagList, setTagList] = useState<string[]>(["띵명작","자연","사이버펑크","현대적","도시"]);

    const [isTSenabled, setTSstatus] = useState<boolean>(false);

    return(
        <>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/6152bc164687275.63fb405a39dda.jpg" alt="업로드하려는 이미지 미리 보기" width='800' height='500' />
            <Input value={title} setValue={setTitle} title='제목' width="100%" />
            <TextArea value={Desc} setValue={setDesc} title='설명' width="100%"/>
            <Horizonal>
                <Button onClick={()=>setTSstatus(!isTSenabled)}><Add20Filled primaryFill={Theme.Black}/>태그 추가</Button>
                {isTSenabled ? <TagSelector close={setTSstatus}/> : null}
                {TagList.map((data)=>
                    {return <RemovableTag data={data} array={TagList} setArray={setTagList} />;
                })}
            </Horizonal>
        </>
    )
}

const Horizonal = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
`