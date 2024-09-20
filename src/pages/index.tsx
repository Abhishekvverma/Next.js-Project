import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material'; // Using Material UI buttons for styling

const Home = () => {
  return (
    <div>
      <h1>Hello Kriotek</h1>
      
      {/* Login Button */}
      <Link href="/Login">
        <Button variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>
          Login
        </Button>
      </Link>

      {/* Register Button */}
      <Link href="/Register">
        <Button variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>
          Register
        </Button>
      </Link>

      <style jsx>{`
        a {
          color: grey;
          text-decoration: none;
        }
        h1 {
          color: blue;
        }
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        Button {
          margin: 10px;
        }
      `}</style>
    </div>
  );
};

export default Home;
