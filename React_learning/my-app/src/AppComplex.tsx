// import  { useState, useEffect, useCallback, useMemo, useContext, createContext } from 'react';

// // Theme context
// const ThemeContext = createContext('light');


// // Dashboard component
// const Dashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 13;
//   const theme = useContext(ThemeContext);

//   // Fetch users data when the component mounts or when currentPage changes
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(`https://dummyjson.com/users?page=${currentPage}`);
//         const data = await response.json();
//         setUsers(data.users);
//       } catch (err) {
//         setError('Failed to fetch users.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [currentPage]);

//   // Filtered users list (memoized to avoid re-filtering unless searchQuery or users changes)
//   const filteredUsers = useMemo(() => {
//      let filteredUsers = users.filter(user => 
//       user.username.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     console.log(filteredUsers);
    
//     return filteredUsers
//   }, [searchQuery, users]);

//   // Paginated users list (splits filtered users into pages)
//   const paginatedUsers = useMemo(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     let paginated = filteredUsers.slice(startIndex, startIndex + itemsPerPage);
//     console.log(paginated);
    
//     return paginated
//   }, [filteredUsers, currentPage, itemsPerPage]);

//   // Handler to change page
//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   // Handler to update search query (debounced to avoid too frequent updates)
//   const handleSearchChange = useCallback((event) => {
//     setSearchQuery(event.target.value);
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
//       <h1>User Dashboard</h1>
      
//       <input 
//         type="text"
//         placeholder="Search users..."
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />

//       <ul>
//         {paginatedUsers.map(user => (
//           <li key={user.id}>{user.username}</li>
//         ))}
//       </ul>

//       <Pagination
//         currentPage={currentPage}
//         totalItems={filteredUsers.length}
//         itemsPerPage={itemsPerPage}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// // Pagination component
// const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   return (
//     <div>
//       {Array.from({ length: totalPages }, (_, index) => (
//         <button 
//           key={index}
//           onClick={() => onPageChange(index + 1)}
//           style={{ fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}
//         >
//           {index + 1}
//         </button>
//       ))}
//     </div>
//   );
// };

// // App component with ThemeContext provider
// const App = () => {
//   const [theme, setTheme] = useState('light');

//   return (
//     <ThemeContext.Provider value={theme}>
//       <div>
//         <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
//           Toggle Theme
//         </button>
//         <Dashboard />
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// export default App;
