import PropTypes from "prop-types";
import {
    SectionStatistics,
    StatisticTitle,
    StatisticList,
    StatisticItem,
    StatisticLabel,
    StatisticPercentage
} from './Statistics.stlyled'
import getRandomHexColor from '../utils/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
    return (
        <SectionStatistics>
            <StatisticTitle>{title}</StatisticTitle>
            <StatisticList>
                {stats.map(stat => (
                    <StatisticItem style={{
                        backgroundColor: getRandomHexColor(),
                      }} 
                      key={stat.id}>
                        <StatisticLabel>{stat.label}</StatisticLabel>
                        <StatisticPercentage>{stat.percentage}%</StatisticPercentage>
                    </StatisticItem>
                ) )}        
            </StatisticList>
        </SectionStatistics>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}
