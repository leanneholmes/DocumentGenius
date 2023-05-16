import './App.css';

export default function DocWindow(props: { html: string }) {
  if (props.html === '') {
    return <div className="docWindows">
      <h1>This AI doesn't make up answers.</h1>

      <p>This is where we show you the documents you've uploaded that we base our answers on.</p>
      
      <p>Our goal is to make you more efficient without having to validate the answers you receive from the AI.</p>
    

    </div>;
  }

  return (
    <>
      <div className="AnsFromDocument" dangerouslySetInnerHTML={{ __html: props.html }} />
    </>
  );
}
