import React from "react";
import useAuth from './hooks/useAuth';
import Filter from 'components/Filter';
import Playlist from 'components/Playlist';
import { HomeElement } from './styles';

function Home() {
  useAuth();

  return (
    <HomeElement>
      <Filter/>
      <Playlist/>
    </HomeElement>
  );
}

export default Home;
