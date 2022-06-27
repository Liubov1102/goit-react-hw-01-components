import styled from 'styled-components';

export const TransactionTable = styled.table`
    width: 480px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    border: 1px solid lightgray;
    border-spacing: 1px;
    border-collapse: separate;
    background: #ffffff;
    box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.59);
        -webkit-box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.59);
        -moz-box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.59);
`;
export const TransactionHead = styled.thead`   
    color: #ffffff;
    font-size: 15px;
    height: 40px;
`;
export const TransactionItem = styled.th`
    text-transform: uppercase;
    font-weight: 600;
    width: 160px;
`;
export const TransBox = styled.tr`
    :nth-child(2n){
    background: #e2e2e2 ;
    }
`;
export const TransItem = styled.td`
    color: gray;
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;   
    text-transform: capitalize;    
`;
export const TransactionBody = styled.tbody`
    text-align: center;
`;
export const TransHead = styled.tr`
    background: mediumturquoise;
`;
