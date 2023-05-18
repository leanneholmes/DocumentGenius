import NavigationTree from './NavigationTree';
export default function DocNavigation(props: {
  index: string;
  onLinkClicked: (data: string) => void;
}) {
  if (props.index === '') {
    return <div></div>;
  }

  let parseData = JSON.parse(props.index);
  console.log(parseData);

  return (
    <>
      <NavigationTree
        data={parseData}
        onLinkClicked={props.onLinkClicked}
      ></NavigationTree>
    </>
  );
}
