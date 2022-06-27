import PropTypes from 'prop-types';
import { ProfileUser, Description, Avatar, TextName, TextProf, Stats, StatsItem, LabelProf, QuantityProf} from './Profile.styled';

export const Profile = ({username, tag, location, avatar, followers, views, likes}) => {
    return (
        <ProfileUser>
            <Description>
                <Avatar
                    src={avatar}
                    alt={username}
                
                />
                <TextName>{username}</TextName>
                <TextProf>@{tag}</TextProf>
                <TextProf>{location}</TextProf>
            </Description>

            <Stats>
                <StatsItem>
                    <LabelProf>Followers</LabelProf>
                    <QuantityProf>{followers}</QuantityProf>
                </StatsItem>
                <StatsItem>
                    <LabelProf>Views</LabelProf>
                    <QuantityProf>{views}</QuantityProf>
                </StatsItem>
                <StatsItem>
                    <LabelProf>Likes</LabelProf>
                    <QuantityProf>{likes}</QuantityProf>
                </StatsItem>
            </Stats>
        </ProfileUser>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}