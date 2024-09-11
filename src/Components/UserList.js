import React, { useState } from 'react';
import { useUsers } from '../Hooks/UseUser';
import AddNewProduct from '../Product/AddNewProduct';

const UserList = () => {
  const { users: initialUsers, isLoading, error } = useUsers();
  const [users, setUsers] = useState(initialUsers);

  // פונקציה למחיקת משתמש
  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index); // מסנן את המשתמש מתוך הרשימה
    setUsers(updatedUsers);
    
    // כאן תוכל להוסיף קריאה ל-API למחוק את המשתמש מהשרת אם נדרש
    // deleteUserFromAPI(user.id); // לדוגמה
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching users.</div>;
  }

  return (
    <div style={styles.container}>
      <AddNewProduct />
      {Array.isArray(users) && users.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.headerCell}>Name</th>
              <th style={styles.headerCell}>Number</th>
              <th style={styles.headerCell}>Dress</th>
              <th style={styles.headerCell}>Note</th>
              <th style={styles.headerCell}>Action</th> {/* עמודה חדשה לפעולה */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} style={styles.row}>
                <td style={styles.cell}><h2>{user.name}</h2></td>
                <td style={styles.cell}><h3>{user.number}</h3></td>
                <td style={styles.cell}><h3>{user.dress}</h3></td>
                <td style={styles.cell}><h3>{user.note}</h3></td>
                <td style={styles.cell}>
                  <button onClick={() => handleDelete(index)} style={styles.deleteButton}>
                    Delete
                  </button>
                </td> {/* כפתור מחיקה */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No users found</div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  table: {
    width: '80%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    marginBottom: '20px',
  },
  headerCell: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '15px',
    textAlign: 'left',
    borderBottom: '2px solid #ddd',
  },
  row: {
    backgroundColor: '#f2f2f2',
  },
  cell: {
    padding: '15px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default UserList;
