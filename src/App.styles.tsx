import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    text-align: center;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;

export const QueryInput = styled.input`
    width: 60%;
    padding: 10px;
    margin-top: 20px;
    font-size: 1.2em;
`;

export const SubmitButton = styled.button`
    padding: 10px 20px;
    margin-top: 20px;
    font-size: 1.2em;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
`;

export const ResultContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ImagePreview = styled.div`
    margin: 10px;
    img {
        max-width: 100px;
        max-height: 100px;
        object-fit: cover;
        border-radius: 10px;
    }
`;
