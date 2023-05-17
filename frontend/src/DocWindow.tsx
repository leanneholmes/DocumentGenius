import { useEffect, useState } from 'react';
import './App.css';

export default function DocWindow(props: { html: string }) {

  const [html, setHtml] = useState<string>('');

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
  } else {
  
      const anchors = document.querySelectorAll('.AnsFromDocument a');
      anchors.forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
          event.preventDefault();
          fetch('http://localhost:5001/api/get_docs', {

            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user: 'local',
              path: 'ditatest_CHECKPLEASE.zip/' + anchor.getAttribute('href'),
            }),
          })
            .then(async (response) => {
              return response.text();
            })
            .then((data) => {
              setHtml(data);
            })
            .catch((error) => {
              console.log('Error: ', error);
            });          
        });
      });
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
