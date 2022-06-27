import styled from 'styled-components';

export const FriendBox = styled.ul`
    display: block;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    list-style: none;
`;
export const FriendListCard = styled.li`
    display: flex;
    align-items: center ;
    background: #ffffff;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.59);
        -webkit-box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.59);
        -moz-box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.59);
`;
export const FriendStatus = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 15px;
    background: ${p => (p.isOnline ? 'green' : 'red')}; 
`;
export const FriendAvatar = styled.img`
    width: 70px;
    margin: 15px 20px;
    
`;
export const FriendName = styled.p`
    font-size: 25px;
    font-weight: 600;
    
`;