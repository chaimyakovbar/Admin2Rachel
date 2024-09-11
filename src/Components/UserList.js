import React from 'react';
import { useUsers } from '../Hooks/UseUser';
import AddNewProduct from '../Product/AddNewProduct';

const UserList = () => {
  const { users, isLoading, error } = useUsers();

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
              <th style={styles.headerCell}>Email</th>
              <th style={styles.headerCell}>Note</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} style={styles.row}>
                <td style={styles.cell}> <h2>{user.name}</h2></td>
                <td style={styles.cell}> <h3>{user.number}</h3></td>
                <td style={styles.cell}> <h3>{user.email} </h3></td>
                <td style={styles.cell}> <h3>{user.note}</h3></td>
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
};

export default UserList;
