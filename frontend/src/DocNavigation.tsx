import NavigationTree from './NavigationTree';
export default function DocNavigation(props: {
  index: string;
  onSourceDocLinkClicked: (data: string) => void;
}) {
  if (props.index === '') {
    return <div></div>;
  }

  const parseData = JSON.parse(props.index);
  console.log(parseData);

  return (
    <>
      <NavigationTree
        data={parseData}
        onSourceDocLinkClicked={props.onSourceDocLinkClicked}
      ></NavigationTree>
    </>
  );
}
