import styled from 'styled-components';

export const ProfileUser = styled.div`
    background-color: #ffffff;
    padding-top: 30px;
    border-radius: 5px;
    width: 270px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
            0px 2px 1px rgba(0, 0, 0, 0.2);
  
`;
export const Description = styled.div`
    background-color: inherit;
    text-align: center;
    margin-block-end: 0;
    margin-block-start: 10px;
    margin-bottom: 20px;
`;
export const Avatar = styled.img`
    width: 120px;
    
`;
export const TextName = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #6b6b6b;
`;
export const TextProf = styled.p`
    font-weight: 600;
    color: #afafaf;
`;
export const Stats = styled.ul`
    display: flex;
    background-color: #eceaea;
    padding: 0;
    list-style: none;
`;
export const StatsItem = styled.li`
    width: 90px;
    border: 1px solid #cacaca;
    background-color: #eceaea;
    text-align: center;
    padding-bottom: 15px;
    padding-top: 15px;
`;
export const LabelProf = styled.span`
    display: block;
    text-align: center;
    background-color: #eceaea;
    font-size: 12px;
    font-weight: 700;
    color: #a0a0a0;
`;
export const QuantityProf = styled.span`
    display: block;
    text-align: center;
    background-color: #eceaea;
    font-size: 15px;
    font-weight: 700;
    color: #424242;
`;