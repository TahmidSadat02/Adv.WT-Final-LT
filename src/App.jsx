import { useContext, useEffect, useState } from 'react';
import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import AddStudentForm from './components/AddStudentForm';
import { StudentContext } from './context/StudentContext';

export default function App() {
  const { students, searchQuery, sortOrder, favoriteCount, notification } = useContext(StudentContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTimer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(fetchTimer);
  }, []);

  const filteredStudents = students.filter((student) => {
    const query = searchQuery.toLowerCase();
    return student.name.toLowerCase().includes(query) || student.major.toLowerCase().includes(query);
  });

  useEffect(() => {
    if (!isLoading) {
      document.title = `Dashboard - ${filteredStudents.length} Students`; 
    }
  }, [filteredStudents.length, isLoading]);

  const sortedAndFilteredStudents = [...filteredStudents].sort((a, b) => {
    if (sortOrder === 'name') return a.name.localeCompare(b.name); 
    if (sortOrder === 'gpa') return b.gpa - a.gpa;
    return 0; 
  });

  return (
    <div>

      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage and view student records"
        favoriteCount={favoriteCount}
      />

      {notification && (
        <div
          style={{
            margin: '16px 40px 0',
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: '#dcfce7',
            color: '#166534',
            border: '1px solid #86efac',
            fontWeight: 600,
          }}
        >
          {notification}
        </div>
      )}

      <main style={{ padding: 'var(--spacing-lg) 40px' }}>
        <AddStudentForm />

        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>Loading...</div>
        ) : (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', marginBottom: '20px' }}>
              <SearchBar />
              <SortControls />
              <p style={{ margin: 0, color: 'var(--text-muted)', fontWeight: 600 }}>
                Showing {sortedAndFilteredStudents.length} {sortedAndFilteredStudents.length === 1 ? 'student' : 'students'}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
              {sortedAndFilteredStudents.map((student) => (
                <StudentCard key={student.id} {...student} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );}
