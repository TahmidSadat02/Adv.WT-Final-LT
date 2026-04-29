
import PropTypes from 'prop-types';

export default function SortControls({ sortOrder, onSortChange }) {
  const buttonStyle = (isActive) => ({
    padding: '8px 16px',
    borderRadius: 'var(--radius-md)',
    border: isActive ? '2px solid var(--color-primary)' : '1px solid #d1d5db',
    backgroundColor: isActive ? '#e0e7ff' : 'var(--color-surface)',
    color: isActive ? 'var(--color-primary)' : 'var(--text-muted)',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.2s ease'
  });

  return (
    <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)', alignItems: 'center' }}>
      <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Sort By:</span>
      <button style={buttonStyle(sortOrder === 'default')} onClick={() => onSortChange('default')}>
        Default
      </button>
      <button style={buttonStyle(sortOrder === 'name')} onClick={() => onSortChange('name')}>
        Name (A-Z)
      </button>
      <button style={buttonStyle(sortOrder === 'gpa')} onClick={() => onSortChange('gpa')}>
        GPA (High - Low)
      </button>
    </div>
  );
}

SortControls.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};