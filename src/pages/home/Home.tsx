import React from "react";
import useAuth from './hooks/useAuth';
import { Redirect } from "react-router-dom";
import Filter from 'components/Filter';
import Playlist from 'components/Playlist';
import { HomeElement } from './styles';

function Home() {
  const { shouldRedirect } = useAuth();

  if (shouldRedirect) {
    return <Redirect to="/login" /> 
  }

  return (
    <HomeElement>
      <Filter/>
      <Playlist/>
    </HomeElement>
  );
}

export default Home;
