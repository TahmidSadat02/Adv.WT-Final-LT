import { useContext } from 'react';
import PropTypes from 'prop-types';
import { StudentContext } from '../context/StudentContext';

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useContext(StudentContext);

  return (
    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
      <input
        type="text"
        placeholder="Search students by name or major..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '500px',
          padding: '12px 16px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid #d1d5db',
          fontSize: '1rem',
          outline: 'none',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
        }}
      />
    </div>
  );
}