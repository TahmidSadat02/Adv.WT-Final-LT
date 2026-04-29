import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const StudentContext = createContext();
const STUDENTS_STORAGE_KEY = 'students';

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
  
  const [students, setStudents] = useState(() => {
    try {
      const storedStudents = localStorage.getItem(STUDENTS_STORAGE_KEY);
      if (storedStudents) {
        const parsedStudents = JSON.parse(storedStudents);
        return Array.isArray(parsedStudents) ? parsedStudents : MOCK_DB;
      }
      return MOCK_DB;
    } catch {
      return MOCK_DB;
    }
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('default');
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [notification, setNotification] = useState('');

  const handleToggleFavorite = (isFavorite) => {
    setFavoriteCount((prevCount) => (isFavorite ? prevCount + 1 : Math.max(0, prevCount - 1)));
  };

  const addStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
    setNotification(`${newStudent.name} was added successfully.`);
  };

  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
    setNotification('Student removed successfully.');
  };

  
  useEffect(() => {
    localStorage.setItem(STUDENTS_STORAGE_KEY, JSON.stringify(students));
  }, [students]);

  
  useEffect(() => {
    if (!notification) return;

    const clearNotificationTimer = setTimeout(() => {
      setNotification('');
    }, 3000);

    return () => clearTimeout(clearNotificationTimer);
  }, [notification]);

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        removeStudent,
        searchQuery,
        setSearchQuery,
        sortOrder,
        setSortOrder,
        favoriteCount,
        notification,
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