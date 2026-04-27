import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import './App.css'; // This imports the CSS variables we made earlier

export default function App() {
  // Simulating a database of students
  const studentData = [
    {
      id: "S-1001",
      name: "Alice Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
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
      avatar: "https://i.pravatar.cc/150?img=11",
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
      avatar: "https://i.pravatar.cc/150?img=12",
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
      avatar: "https://i.pravatar.cc/150?img=5",
      major: "Cybersecurity",
      gpa: 3.7,
      courses: [
        { name: "Cryptography", color: "#ef4444" },
        { name: "Networks", color: "#64748b" }
      ]
    }
  ];

  return (
    <div>
      {/* Passing data to the Header via props */}
      <DashboardHeader 
        title="Student Dashboard" 
        tagline="Manage and view student records" 
      />
      
      {/* Main content area */}
      <main style={{ padding: 'var(--spacing-lg) 40px' }}>
        
        {/* A simple CSS grid to make the cards sit side-by-side nicely */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--spacing-lg)' 
        }}>
          
          {/* Looping over the array to render 4 cards */}
          {studentData.map((student) => (
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