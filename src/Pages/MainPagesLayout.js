import React from 'react';
import Nav from '../Components/Nav';
import Title from './Title';

function MainPagesLayout({children}) {
  return (
    <div>
        <Title title = "Box Office" subtitle = "Are you looking for a movie or an actor" />
        <Nav/>
        {children}
    </div>
  );
};

export default MainPagesLayout