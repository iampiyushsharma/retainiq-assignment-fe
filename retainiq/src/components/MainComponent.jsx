import React from 'react';
import Top from './Top';
import Content from './Content';

function MainComponent() {
  return (
    <div className="ml-[4vw] flex-col max-w-[96vw]" >
      <Top />
      <div className='p-14'>
      <Content />
      </div>
      
    </div>
  );
}

export default MainComponent;
