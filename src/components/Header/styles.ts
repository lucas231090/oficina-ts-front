import styled from "styled-components";

export const Container = styled.header`
    background: #cccccc;
    display: flex;
    justify-content: center;
    height: 124px;
    align-items: center;
`
export const Content = styled.div`
width: 100%;
max-width: 1216px;
display: flex;
align-items: center;
justify-content: space-between;

.page-details{
    h1{
        color: #333;
        width: 69px;
        height: 29px;
        font-size: 32px;
        margin-bottom: 8px;
    }
    h2{
        color: #666666;
        width: 267px;
        height: 24px;
        opacity: 90%;
        font-weight: 400;
        font-size: 16px;
    }

}

.refresh {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  button {
    background: none;
    border: none;
    color: #D73035;
    font-size: 24px;
    padding: 0;
    font-weight: bold;
  }
}
`