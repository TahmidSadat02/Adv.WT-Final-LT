import PropTypes from 'prop-types';

export default function StatBadge({ label, value }) {
  const style = {
    backgroundColor: 'var(--color-surface)',
    padding: 'var(--spacing-sm) var(--spacing-md)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid #e5e7eb',
    display: 'inline-flex',
    gap: '8px',
    fontWeight: '500'
  };

  return (
    <div style={style}>
      <span style={{ color: 'var(--text-muted)' }}>{label}:</span>
      <span>{value}</span>
    </div>
  );
}

StatBadge.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};