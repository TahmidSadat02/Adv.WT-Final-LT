import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';



const MOCK_DB = [
  {
    id: "22-47904-2",
    name: "Shahriar Asif",
    avatar: "/image/asif.jpg",
    major: "Computer Science",
    gpa: 3.75,
    courses: [
      { name: "Web Tech", color: "#4f46e5" },
      { name: "Algorithms", color: "#10b981" }
    ]
  },
  {
    id: "22-47888-2",
    name: "SK. Nur Alam",
    avatar: "/image/nur.jpg",
    major: "Data Science",
    gpa: 3.80,
    courses: [
      { name: "Machine Learning", color: "#f59e0b" },
      { name: "Statistics", color: "#8b5cf6" }
    ]
  },
  {
    id: "22-47984-2",
    name: "EA. Sabid",
    avatar: "/image/sabid.jpg",
    major: "Cybersecurity",
    gpa: 3.9,
    courses: [
      { name: "System Design", color: "#ec4899" },
      { name: "Testing", color: "#3b82f6" }
    ]
  },
  {
    id: "22-47924-2",
    name: "Tahmid Sadat",
    avatar: "/image/sadat.jpg",
    major: "Software Engineering",
    gpa: 2.7,
    courses: [
      { name: "Cryptography", color: "#ef4444" },
      { name: "Networks", color: "#64748b" }
    ]
  }
];

export default function App() {

  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    const fetchTimer = setTimeout(() => {
      setStudents(MOCK_DB);
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

  // Task 4: Dynamic Document Title
  useEffect(() => {
    // Update the browser tab whenever filteredStudents changes
    document.title = `Dashboard - ${filteredStudents.length} Students`;
  }, [filteredStudents.length]); // This dependency array tells React to only run this when the count changes

  return (
    <div>

      <main style={{ padding: 'var(--spacing-lg) 40px' }}>
        {!isLoading && (
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        )}
        <DashboardHeader
          title="Student Dashboard"
          tagline="Manage and view student records"
          favoriteCount={favoriteCount}
        />
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '40px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
            Loading student data...
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}>

            {filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                id={student.id}
                name={student.name}
                avatar={student.avatar}
                major={student.major}
                gpa={student.gpa}
                courses={student.courses}
                onToggleFavorite={(isFav) => setFavoriteCount(prev => isFav ? prev + 1 : Math.max(0, prev - 1))}
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