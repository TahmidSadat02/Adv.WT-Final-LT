import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StudentContext = createContext();

const MOCK_DB = [
  {
    id: '22-47904-2',
    name: 'Shahriar Asif',
    avatar: '/image/asif.jpg',
    major: 'Computer Science',
    gpa: 3.75,
    courses: [
      { name: 'Web Tech', color: '#4f46e5' },
      { name: 'Algorithms', color: '#10b981' },
    ],
  },
  {
    id: '22-47888-2',
    name: 'SK. Nur Alam',
    avatar: '/image/nur.jpg',
    major: 'Data Science',
    gpa: 3.8,
    courses: [
      { name: 'Machine Learning', color: '#f59e0b' },
      { name: 'Statistics', color: '#8b5cf6' },
    ],
  },
  {
    id: '22-47984-2',
    name: 'E.A. Sabid',
    avatar: '/image/sabid.jpg',
    major: 'Cybersecurity',
    gpa: 4.99,
    courses: [
      { name: 'System Design', color: '#ec4899' },
      { name: 'Testing', color: '#3b82f6' },
    ],
  },
  {
    id: '22-47924-2',
    name: 'Tahmid Sadat',
    avatar: '/image/sadat.jpg',
    major: 'Software Engineering',
    gpa: 3.01,
    courses: [
      { name: 'Cryptography', color: '#ef4444' },
      { name: 'Networks', color: '#64748b' },
    ],
  },
];

export function StudentProvider({ children }) {
  const [students] = useState(MOCK_DB);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('default');
  const [favoriteCount, setFavoriteCount] = useState(0);

  const handleToggleFavorite = (isFavorite) => {
    setFavoriteCount((prevCount) => (isFavorite ? prevCount + 1 : Math.max(0, prevCount - 1)));
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        searchQuery,
        setSearchQuery,
        sortOrder,
        setSortOrder,
        favoriteCount,
        handleToggleFavorite,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

StudentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};