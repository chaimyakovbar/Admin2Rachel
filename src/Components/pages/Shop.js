// import React from 'react';
// import { useProductList } from '../../Hooks/UseProducts';


// const Shop = () => {
//   const { productList, isLoading, error } = useProductList();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error fetching products.</div>;
//   }

//   return (
//     <div>
//       <h2 style={{ marginLeft: "15px" }}>Dress</h2>
//       <div style={styles.container}>
//         <div style={styles.cardContainer}>
//           {productList.map((product, index) => (
//             <div key={index} style={styles.card}>
//               {product.image && (
//                 <img
//                   src={`http://localhost:3010${product.image}`}
//                   alt="Product"
//                   style={styles.image}
//                 />
//               )}
//               <ul style={styles.list}>
//                 <li style={styles.listItem}>{product.name}</li>
//                 <li style={styles.listItem}>{product.price}₪</li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '20px',
//   },
//   cardContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     gap: '20px',
//   },
//   card: {
//     width: '180px',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//     overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     height: 'auto',
//   },
//   list: {
//     listStyle: 'none',
//     padding: '10px',
//     margin: 0,
//   },
//   listItem: {
//     fontSize: '1rem',
//     marginBottom: '10px',
//   },
// };

// export default Shop;
