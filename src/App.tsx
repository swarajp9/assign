
import React, { useEffect, useState } from 'react';
import { fetchData } from './api.ts';
import Dashboard from './components/Dashboard.tsx';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #f0f4f8, #d9e8f5);
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 0px;
  text-align: center;
`;

const H3 = styled.h3`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 25px;
  text-align: center;
`;

const App: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  return (
    <AppContainer>
      <Title>Developer Activity Dashboard</Title>
      <H3>Track and Visualize Weekly Developer Activities</H3>
      <Dashboard data={data} />
    </AppContainer>
  );
};

export default App;
