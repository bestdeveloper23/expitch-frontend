import {
    Container, 
    UploadingBox,
    CustomSVG,
    SmallTitle,
    UploadText,
    Button,
    RecordingBox,
    RoundButton
} from './styled'

import UploadIcon from '../../assets/images/arrow-up-tray.svg'
import MicIcon from '../../assets/images/microphone.svg'

export default function Uploading(){
    return (
        <Container>
            <UploadingBox>
                <CustomSVG src={UploadIcon} width={64} height={64}></CustomSVG>
                <SmallTitle
                    color="black"
                >
                    Drag & drop or choose file to upload
                </SmallTitle>
                <UploadText
                    color='#6B7280'
                >
                Upload a 2-5 minute pitch of your startup.<br/>MP3, MP4, WAV, up to 20 MB, up to 5 MIN
                </UploadText>
                <Button>Choose file</Button>
            </UploadingBox>
            <RecordingBox>
                <UploadText color='#111827'>Or record your voice</UploadText>
                <RoundButton href={"/processing"} width={32} height={32}>
                    <CustomSVG src={MicIcon}></CustomSVG>
                </RoundButton>
                <UploadText color="#6B7280" fontsize={16}>Just click on the button and start talking. <br/>You have 5 minutes.</UploadText>
            </RecordingBox>
        </Container>
    );
}