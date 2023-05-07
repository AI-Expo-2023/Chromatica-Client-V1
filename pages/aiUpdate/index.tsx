import Canvas from "@/components/img2img/canvas";
import { useEffect, useRef, useState } from "react";
import * as _ from "../../styles/page/aiUpdateStyle";
import CanvasSetting from "@/components/img2img/canvasSetting";
import AIResponse from "@/components/img2img/aiKeyword";
import styled from "@emotion/styled";
import Tool from "@/components/img2img/tool";
import ToolSize from "@/components/img2img/toolSize";
import { PhotoFilter24Filled } from "@fluentui/react-icons";
import FilterModal from "@/components/img2img/filterModal";


const AiUpdate = () => {
  const [imgData, setImgData] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [settingOptions, setSettingOptions] = useState<CanvasOptions>({
    //color: "#FADD75",
    color: "#ffffff",
    tool: true,
    backgroundColor: "#f2222f"
  });
  const [toolWidth, setToolWidth] = useState<ToolSize>({
    brush: 5,
    eraser: 5,
  })
  const [canvasSize, setCanvasSize] = useState<CanvasSize>({
    width: 512,
    height: 512
  });
  const [aiSetting, setAiSetting] = useState<AiSetting>({
    quality: 20,
    count: 4
  })
  const [filter, setFilter] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [baseImgUrl, setBaseUrl] = useState("");

  const getImage = async () => {
    const imgData = await localStorage.getItem("imgData");
    setImgData(String(imgData));
    setBaseUrl(String(imgData));
    const img = new Image();
    img.src = String(imgData);
    img.onload = () => {
      setCanvasSize({ width: Number(img.width), height: Number(img.height) })
    }
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <>
      <FilterModal openModadl={openModal} setOpenModal={setOpenModal} filter={filter} setFilter={setFilter} />
      <_.Conatiner>
        <PositionDiv>
          <ImgBackGround src={baseImgUrl} width={canvasSize.width * 0.75} height={canvasSize.height * 0.75} />
        </PositionDiv>
        <CanvasPaint>
          <Canvas update canvasRef={canvasRef} canvasSize={canvasSize} toolWidth={toolWidth} settingOptions={settingOptions} />
          <_.CanvasTools>
            <div>
              <Tool settingOptions={settingOptions} setSettingOptions={setSettingOptions} />
              <_.SettingContainer onClick={() => setOpenModal(true)}><PhotoFilter24Filled primaryFill="black" />필터</_.SettingContainer>
            </div>
            <CanvasSetting update settingOptions={settingOptions} canvasRef={canvasRef} aiSetting={aiSetting} setAiSetting={setAiSetting} />
          </_.CanvasTools>
          <ToolSize toolWidth={toolWidth} setToolWidth={setToolWidth} settingOptions={settingOptions} />
        </CanvasPaint>
        <AIResponse getImage={getImage} filter={filter} imgData={imgData} canvasRef={canvasRef} aiSetting={aiSetting} update={true} canvasSize={canvasSize} />
      </_.Conatiner>
    </>
  )
}

export default AiUpdate;
const CanvasPaint = styled(_.CanvasContainer)`
  z-index: 100;
`;
const PositionDiv = styled.div`
  position: relative;
  z-index: 0;
`;
const ImgBackGround = styled.img`
  position: absolute;
  left:20px;
  border-radius: 8px;
`;