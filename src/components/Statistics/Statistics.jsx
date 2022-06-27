import PropTypes from 'prop-types';

import { StatisticsItem } from "components/Statistics/StatisticsItem";
import { SectionStat, TitleStat, ListStat} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        < SectionStat>
            <TitleStat>{title}</TitleStat>
            <ListStat>

                {stats.map(stat => (
                    <StatisticsItem
                        key={stat.id}
                        label={stat.label}
                        percentage={stat.percentage}
                    />
                )
                )
                }         
            </ListStat>
        </SectionStat>
    );
};
Statistics.propTypes = {
    title: PropTypes.string,
     
}; 