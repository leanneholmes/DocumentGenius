import { useEffect, useState } from 'react';
import './App.css';
import { handleClick } from './helper/getDocsHelper';



export default function DocWindow(props: { html: string, onLinkClicked: (data: string) => void; }) {

  useEffect(() => {
    // const anchors = endMessageRef?.current?.querySelectorAll('a');

    console.log('THE HTML IS CHANGED.');

    if ( props.html !== '') {
    const anchors = document.querySelectorAll('.AnsFromDocument a');
    anchors?.forEach((anchor) => {
      console.log('ANCHOR URL:' + anchor.getAttribute('href'));
      anchor.addEventListener('click', (event) => {
        event.preventDefault();
      
        
        const mouseEvent = event as MouseEvent;
        handleClick(mouseEvent, props.onLinkClicked);
      });
      });
    }
  }, [props.html]);

  if (props.html === '') {
    
    return (
      <div className="docWindows">
        <h1>This AI doesn't make up answers.</h1>

        <p>
          This is where we show you the documents you've uploaded that we base
          our answers on.
        </p>

        <p>
          Our goal is to make you more efficient without having to validate the
          answers you receive from the AI.
        </p>
      </div>
    );
  } 

  return (
    <>
      <div
        className="AnsFromDocument"
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
    </>
  );
}
