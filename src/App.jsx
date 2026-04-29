import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import { StudentContext } from './context/StudentContext';
import AddStudentForm from './components/AddStudentForm';

export default function App() {
  const { students, searchQuery, sortOrder, favoriteCount } = useContext(StudentContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(fetchTimer);

    
  }, []);

  const filteredStudents = students.filter((student) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      student.name.toLowerCase().includes(lowerCaseQuery) ||
      student.major.toLowerCase().includes(lowerCaseQuery)
    );
  });


  useEffect(() => {
    if (!isLoading) {
      document.title = `Dashboard - ${filteredStudents.length} Students`;
    }
  }, [filteredStudents.length, isLoading]); // This dependency array tells React to only run this when the count changes

  const sortedAndFilteredStudents = [...filteredStudents].sort((a, b) => {
    if (sortOrder === 'name') {
      return a.name.localeCompare(b.name); 
    }
    if (sortOrder === 'gpa') {
      return b.gpa - a.gpa;
    }
    return 0; 
  });

  return (
    <div>

      <main style={{ padding: 'var(--spacing-lg) 40px' }}>
        <AddStudentForm />
        {!isLoading && (
          <SearchBar />
        )}
        <DashboardHeader
          title="Student Dashboard"
          tagline="Manage and view student records"
          favoriteCount={favoriteCount}
        />
        {!isLoading && (
          <SortControls />
        )}
        {isLoading ? (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <SearchBar />
              <SortControls />
            </div>
            <div style={{ textAlign: 'center', padding: '40px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
              Loading student data...
            </div>
          </>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}>

            {sortedAndFilteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                id={student.id}
                name={student.name}
                avatar={student.avatar}
                major={student.major}
                gpa={student.gpa}
                courses={student.courses}
              />
            ))}
            {filteredStudents.length === 0 && (
              <div style={{ color: 'var(--text-muted)' }}>No students found matching "{searchQuery}".</div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}