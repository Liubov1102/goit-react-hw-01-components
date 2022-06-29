import PropTypes from 'prop-types';
import { StatItem, LabelStat, PercentageStat } from './Statistics.styled';

export const StatisticsItem = ({ label, percentage }) => {
    return (           
        <StatItem style={colorCell()}>
            <LabelStat>{label}</LabelStat>
            <PercentageStat>{percentage}%</PercentageStat>
        </StatItem>
    );
};

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
};

function colorCell() {
    const color = '#' + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16);
    return {background: color}
};
