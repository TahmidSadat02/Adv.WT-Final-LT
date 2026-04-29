import { useState, useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

export default function AddStudentForm() {
  const { students } = useContext(StudentContext);
  const [formData, setFormData] = useState({ name: '', id: '', major: '', gpa: '', courses: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required'; 
    if (!formData.id.trim()) {
       newErrors.id = 'Student ID is required'; 
    } else if (students.some(s => s.id === formData.id)) {
       newErrors.id = 'ID must be unique';
    }
    if (!formData.major.trim()) newErrors.major = 'Major is required'; 
    const gpaNum = parseFloat(formData.gpa);
    if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4.0) newErrors.gpa = 'GPA must be 0-4.0'; 
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form is valid! Ready for Task 4.");
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-surface)', padding: '20px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #ddd' }}>
      <h3 style={{ color: 'var(--text-main)', marginTop: 0 }}>Register New Student</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input style={{ padding: '8px' }} placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
        {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}
        
        <input style={{ padding: '8px' }} placeholder="Student ID" value={formData.id} onChange={e => setFormData({...formData, id: e.target.value})} />
        {errors.id && <span style={{ color: 'red', fontSize: '12px' }}>{errors.id}</span>}

        <input style={{ padding: '8px' }} placeholder="Major" value={formData.major} onChange={e => setFormData({...formData, major: e.target.value})} />
        {errors.major && <span style={{ color: 'red', fontSize: '12px' }}>{errors.major}</span>}

        <input style={{ padding: '8px' }} placeholder="GPA" value={formData.gpa} onChange={e => setFormData({...formData, gpa: e.target.value})} />
        {errors.gpa && <span style={{ color: 'red', fontSize: '12px' }}>{errors.gpa}</span>} 

        <button type="submit" style={{ padding: '10px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Student
        </button>
      </form>
    </div>
  );
}