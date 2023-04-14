import styled from "styled-components"

export const BlogContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    @media screen and (max-width: 768px) {
        margin-bottom: -60px;
        margin-top: 80px;
    }
`
export const BlogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const BlogTitle = styled.h1`
    font-size: 46px;
    font-weight: 600;
    @media screen and (max-width: 768px) {
        font-size: 30px;
        text-align: center;
    }
`
export const BlogInfo = styled.p`
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 80px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        text-align: center;
        margin-bottom: 50px;
    }
`
export const BlogSources = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr); 
    grid-gap: 20px;
    max-width: 880px;
    margin-bottom: 70px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, 1fr); 
        grid-gap: 15px;
        max-width: 680px;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
export const SourceItem = styled.div`
    border: 1px solid #707070;
    border-radius: 10px;
    padding: 17px 30px;
    max-width: 300px;
    position: relative;

    @media screen and (max-width: 768px) {
      max-width: 260px;
      padding: 16px 25px;
      padding-top: 30px;
    }
    @media screen and (max-width: 480px) {
      max-width: 300px;
      padding: 17px 30px;
      padding-top: 20px;
    }
`
export const ItemImg = styled.img`
   height: 30px;
   width: 30px;
   margin-bottom: 10px;

   @media screen and (max-width: 768px) {
      margin-bottom: 20px;
    }
`
export const ItemTitle = styled.h2`
    font-size: 20px;
    text-align: left;
    font-weight: 600;
    margin-bottom: 10px;
`
export const ItemText = styled.p`
    text-align: left;
    color: #707070;
    font-size: 14px;
    @media screen and (max-width: 768px) {
      margin-bottom: 10px;
    }
`

export const ItemLabel = styled.p`
    color: #4A7DE3;
    background: #102142;
    padding: 6px 10px;
    position: absolute;
    font-size: 12px;
    border-radius: 8px;
    top: 0;
    right: 0;
    margin-right: 10px;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
      margin-top: 15px;
      margin-right: 15px;
    }
`
