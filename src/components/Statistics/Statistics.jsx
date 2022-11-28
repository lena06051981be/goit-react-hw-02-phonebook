export const Statistics = ({title, stats}) => {
    return (
        <section>
            <h2>{title}</h2>
            <ul>
                {stats.map(stat => (
                    <li>
                        <span>{stat.label}</span>,
                        <span>{stat.percentage}%</span>
                    </li>
                ) )}        
            </ul>
        </section>
    )
}