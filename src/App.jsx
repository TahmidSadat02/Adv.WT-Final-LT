import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import './App.css'; 
import { useState, useEffect } from 'react';

  
  const MOCK_DB = [
    {
      id: "S-1001",
      name: "Alice Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      major: "Computer Science",
      gpa: 3.8,
      courses: [
        { name: "Web Tech", color: "#4f46e5" },
        { name: "Algorithms", color: "#10b981" }
      ]
    },
    {
      id: "S-1002",
      name: "Bob Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
      major: "Data Science",
      gpa: 3.5,
      courses: [
        { name: "Machine Learning", color: "#f59e0b" },
        { name: "Statistics", color: "#8b5cf6" }
      ]
    },
    {
      id: "S-1003",
      name: "Charlie Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie",
      major: "Software Engineering",
      gpa: 3.9,
      courses: [
        { name: "System Design", color: "#ec4899" },
        { name: "Testing", color: "#3b82f6" }
      ]
    },
    {
      id: "S-1004",
      name: "Diana Prince",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana",
      major: "Cybersecurity",
      gpa: 3.7,
      courses: [
        { name: "Cryptography", color: "#ef4444" },
        { name: "Networks", color: "#64748b" }
      ]
    }
  ];

  export default function App() {

  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTimer = setTimeout(() => {
      setStudents(MOCK_DB);    
      setIsLoading(false); 
    }, 1500);

    return () => clearTimeout(fetchTimer);
  }, []);

  return (
    <div>
      <DashboardHeader 
        title="Student Dashboard" 
        tagline="Manage and view student records" 
      />
    
      <main style={{ padding: 'var(--spacing-lg) 40px' }}>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--spacing-lg)' 
        }}>
          
          {students.map((student) => (
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
          
        </div>
      </main>
    </div>
  );
}