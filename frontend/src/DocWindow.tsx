import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { handleClick } from './helper/getDocsHelper';
import { selectSelectedDocs } from './preferences/preferenceSlice';
import { useUser } from '@clerk/clerk-react';

import './App.css';

export default function DocWindow(props: {
  html: string;
  onSourceDocLinkClicked: (data: string) => void;
}) {
  const docs = useSelector(selectSelectedDocs);
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (props.html !== '' && isSignedIn) {
      const anchors = document.querySelectorAll('.AnsFromDocument a');
      anchors?.forEach((anchor) => {
        const tempURL = anchor.getAttribute('href');
        const URL = tempURL?.replace('../', '');
        const activeFilename = docs?.description;
        const path = ((activeFilename as string) + '/' + URL) as string;
        anchor.setAttribute('href', path as string);

        anchor.addEventListener('click', (event) => {
          event.preventDefault();

          const mouseEvent = event as MouseEvent;
          handleClick(mouseEvent, props.onSourceDocLinkClicked, user.id);
        });
      });
    }
  }, [props.html]);

  if (props.html === '') {
    return (
      <div className="docWindows">
        {/* <h1>This AI doesn&apos;t make up answers.</h1>

        <p>
          This is where we show you the documents you&apos;ve uploaded that we
          base our answers on.
        </p>

        <p>
          Our goal is to make you more efficient without having to validate the
          answers you receive from the AI.
        </p> */}
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
