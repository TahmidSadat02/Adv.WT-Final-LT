
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { StudentContext } from '../context/StudentContext';

export default function SortControls() {
  const { sortOrder, setSortOrder } = useContext(StudentContext);

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
      <button style={buttonStyle(sortOrder === 'default')} onClick={() => setSortOrder('default')}>
        Default
      </button>
      <button style={buttonStyle(sortOrder === 'name')} onClick={() => setSortOrder('name')}>
        Name (A-Z)
      </button>
      <button style={buttonStyle(sortOrder === 'gpa')} onClick={() => setSortOrder('gpa')}>
        GPA (High - Low)
      </button>
    </div>
  );
}

SortControls.propTypes = {
  sortOrder: PropTypes.string,
  onSortChange: PropTypes.func,
};