import PropTypes from 'prop-types';

export default function DashboardHeader({ title, tagline, favoriteCount }) {
  const headerStyle = {
    backgroundColor: 'var(--color-surface)',
    padding: 'var(--spacing-lg) 40px',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const navStyle = {
    display: 'flex',
    gap: 'var(--spacing-md)',
    fontWeight: '500',
    color: 'var(--text-muted)'
  };

  return (
    <header style={headerStyle}>
      <div>
        <h1 style={{ margin: 0, color: 'var(--text-main)', fontSize: '1.5rem' }}>{title}</h1>
        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{tagline}</p>
      </div>
      <nav style={navStyle}>
        <span style={{ cursor: 'pointer', color: 'var(--color-primary)' }}>Dashboard</span>
        <span style={{ cursor: 'pointer' }}>Settings</span>
        <span style={{ 
          backgroundColor: '#fee2e2', 
          color: '#ef4444', 
          padding: '4px 12px', 
          borderRadius: 'var(--radius-full)',
          fontWeight: 'bold'
        }}>
          ❤️ Favorites: {favoriteCount}
        </span>
      </nav>
    </header>
  );
}

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  favoriteCount: PropTypes.number.isRequired,
};