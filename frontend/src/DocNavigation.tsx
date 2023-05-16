import NavigationTree from './NavigationTree';
interface DocNavigationProps {
  onLinkClicked: (data: string) => void;
}

export default function DocNavigation(props: {
  index: string;
  onLinkClicked: DocNavigationProps;
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
        onLinkClicked={onLinkClicked}
      ></NavigationTree>
    </>
  );
}
