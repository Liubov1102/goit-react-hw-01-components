
import { FriendListItem } from 'components/FriendList/FriendListItem';
import { FriendBox } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendBox>
            {friends.map(({ id, avatar, name, isOnline }) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline} />        
            ))}
        </FriendBox>
    );
};
