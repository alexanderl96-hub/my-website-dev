import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img2  } from '../InfoSection/InfoElements'

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, img1, img2, img3,
                          img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16,alt, primary, dark, dark2  }) => {
       
 
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine> 
                    <Heading lightText={lightText} >{headline}</Heading>
                    <Subtitle darkText={darkText} >{description}</Subtitle>
                    {/* <BtnWrapper>
                        <Button to='/skillsmore' 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                        >{buttonLabel}</Button>
                    </BtnWrapper> */}
                </TextWrapper>
                </Column1>
                <Column2>
                   <ImgWrap>  
                     <Img2 src={img} alt={alt} />
                     <Img2 src={img1} alt={alt} />
                     <Img2 src={img2} alt={alt} />
                     <Img2 src={img3} alt={alt} />
                     <Img2 src={img5} alt={alt} />
                     <Img2 src={img6} alt={alt} />    
                     <Img2 src={img8} alt={alt} /> 
                     <Img2 src={img10} alt={alt} />
                     <Img2 src={img11} alt={alt} />
                     <Img2 src={img12} alt={alt} />
                     <Img2 src={img13} alt={alt} />
                     <Img2 src={img14} alt={alt} />
                     <Img2 src={img15} alt={alt} />
                     <Img2 src={img16} alt={alt} />
                     <Img2 src={img9} alt={alt} />
                     <Img2 src={img7} alt={alt} /> 
                   </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
   </>
  )
}

export default InfoSection