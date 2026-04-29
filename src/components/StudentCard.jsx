import PropTypes from 'prop-types';
import CourseTag from './CourseTag';
import StatBadge from './StateBadge';
import { useState } from 'react';

export default function StudentCard({ name, id, avatar, gpa, major, courses, onToggleFavorite }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteClick = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    onToggleFavorite(newFavoriteStatus);
  };
  const cardStyle = {
    backgroundColor: 'var(--color-surface)',
    borderRadius: 'var(--radius-md)',
    padding: 'var(--spacing-lg)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid #e5e7eb',
    borderColor: isFavorite ? '#ef4444' : '#e5e7eb',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-md)'
  };

  const headerStyle = { 
    display: 'flex', 
    alignItems: 'center', 
    gap: 'var(--spacing-md)' 
  };
  
  const avatarStyle = { 
    width: '64px', 
    height: '64px', 
    borderRadius: 'var(--radius-full)', 
    objectFit: 'cover' 
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <img src={avatar} alt={`${name}'s profile`} style={avatarStyle} />
        <div>
          <h3 style={{ margin: 0, color: 'var(--text-main)', fontSize: '1.25rem' }}>{name}</h3>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>Student ID: {id}</p>
        </div>
      </div>

      <button
        onClick={handleFavoriteClick}
        style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: isFavorite ? '#ef4444' : '#d1d5db',
            transition: 'color 0.2s ease'
          }}
          aria-label="Toggle Favorite"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
      </button>

      <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
        <StatBadge label="Major" value={major} />
        <StatBadge label="GPA" value={gpa.toFixed(2)} />
      </div>

      <div>
        <h4 style={{ margin: '0 0 var(--spacing-sm) 0', color: 'var(--text-main)', fontSize: '0.9rem' }}>
          Enrolled Courses:
        </h4>
        <div>
          {courses.map((course, index) => (
            <CourseTag key={index} courseName={course.name} color={course.color} />
          ))}
        </div>
      </div>
    </div>
  );
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired,
  onToggleFavorite: PropTypes.func.isRequired
};