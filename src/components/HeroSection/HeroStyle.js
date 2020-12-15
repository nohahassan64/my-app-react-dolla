import styled from 'styled-components'
import { MdArrowForward , MdKeyboardArrowRight} from 'react-icons/md'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0c0c0c;
    padding: 0 30px;
    position: relative;
    z-index: 1;
    height: 800px;

    :before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        background: linear-gradient(
            180deg,
            rgba(0 , 0 , 0 , .2) 0% ,
            rgba(0 , 0 , 0 , .6) 100%
        ),
        linear-gradient(
            180deg,
            rgba(0 , 0 , 0 , .2) 0% ,
            transparent 100%
        )

    }
`;
export const HeroBg = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export const VideoBg = styled.video`
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;
export const HeroContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    padding: 8px 24px;
    max-width: 1200px;
    z-index: 3;
`;
export const HeroHead = styled.h1`
    text-align: center;
    font-size: 48px;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;
export const HeroDesc = styled.p`
   text-align: center;
    font-size: 24px;
    color: #fff;
    margin-top: 24px;
    max-width: 600px;

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;
export const HeroBtnWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 32px;
`;
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;