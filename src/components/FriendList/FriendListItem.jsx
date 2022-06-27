import PropTypes from 'prop-types';
import { FriendListCard, FriendStatus, FriendAvatar, FriendName, } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <FriendListCard>
            <FriendStatus isOnline={isOnline}></FriendStatus>
            <FriendAvatar src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
        </FriendListCard>
    );
};
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}