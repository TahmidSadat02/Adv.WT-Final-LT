import PropTypes from "prop-types";

export default function CourseTag({ courseName, color }) {
    const style = {
        backgroundColor: color,
        color: '#fff',
        padding: '4px 12px',
        borderRadius: 'var(--radius-full)',
        fontSize: '0.8rem',
        fontWeight: '600',
        display: 'inline-block',
        marginRight: 'var(--spacing-sm)'
    };
    return
        <span style={style}>
            {courseName}
        </span>;
}

CourseTag.propTypes = {
    courseName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};