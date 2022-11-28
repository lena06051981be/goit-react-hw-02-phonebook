import PropTypes from "prop-types";
import {
    SectionStatistics,
    StatisticTitle,
    StatistiList,
    StatistiItem,
} from './Statistics.stlyled'

export const Statistics = ({ title, stats }) => {
    return (
        <SectionStatistics>
            <StatisticTitle>{title}</StatisticTitle>
            <StatistiList>
                {stats.map(stat => (
                    <StatistiItem key={stat.id}>
                        <span>{stat.label}</span>
                        <span>{stat.percentage}%</span>
                    </StatistiItem>
                ) )}        
            </StatistiList>
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
