import React from "react";
import useAuth from './hooks/useAuth';
import Filter from 'components/filter';
import { HomeElement } from './styles';

function Home() {
  useAuth();

  return (
    <HomeElement>
      <Filter/>
    </HomeElement>
  );
}

export default Home;
