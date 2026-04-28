import PropTypes from 'prop-types';
import CourseTag from './CourseTag';
import StatBadge from './StateBadge';
import { useState } from 'react';

export default function StudentCard({ name, id, avatar, gpa, major, courses, onTaggleFavourite }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const handleFavouriteClick = () => {
    setIsFavorite(newFavoriteStatus); 
    onToggleFavorite(newFavoriteStatus);
  }
  const cardStyle = {
    backgroundColor: 'var(--color-surface)',
    borderRadius: 'var(--radius-md)',
    padding: 'var(--spacing-lg)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid #e5e7eb',
    borderColor: isFavourite ? '#ef4444' : '#e5e7eb',
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
      {/* 1. Header with Avatar and Name */}
      <div style={headerStyle}>
        <img src={avatar} alt={`${name}'s profile`} style={avatarStyle} />
        <div>
          <h3 style={{ margin: 0, color: 'var(--text-main)', fontSize: '1.25rem' }}>{name}</h3>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>Student ID: {id}</p>
        </div>
      </div>

      {/* 2. Reusing our StatBadge atom for Major and GPA */}
      <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
        <StatBadge label="Major" value={major} />
        <StatBadge label="GPA" value={gpa.toFixed(2)} />
      </div>

      {/* 3. Reusing our CourseTag atom for Enrolled Courses */}
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

// Strict PropTypes validation as required by the lab
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
  onTaggleFavourite: PropTypes.func.isRequired
};