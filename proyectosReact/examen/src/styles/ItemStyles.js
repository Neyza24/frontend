import styled from 'styled-components'

export const Card = styled.div`
    border: 0.5px solid #ddd;
    padding: 20px;
    width: 28%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 12px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    
` ;

export const Image = styled.img`
    width: 120px;
    
` ;

export const Name = styled.h3`
    text-align: center;
    
` ;

export const H5 = styled.h5`
    margin-top: 12px;
    
` ;

export const Span = styled.span`
    background-color: rgb(255, 178, 178);
    padding: 3px;
    font-weight: lighter;
    color: rgb(155, 0, 0);
    border-radius: 3px;  
` ;

export const Button = styled.button`
    background: #DBDFFD;
    padding: 12px 96px;
    border-radius: 4px;
    margin-top: 12px;
    text-transform: uppercase;
    border-style: none;
    transition: all 0.5s ease-out;
    &:hover{
        background: #09F;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        border-style: none;
        cursor: pointer;
    }
` ;