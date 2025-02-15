export const handleClick = (
  event: MouseEvent,
  onSourceDocLinkClicked: {
    (data: string): void;
    (data: string): void;
    (arg0: string): void;
  },
  userid: string,
) => {
  event.preventDefault();
  const anchor = event.target as HTMLAnchorElement;
  const url = new URL(anchor.href.replace(/%5C/g, '/'));
  // console.log('Path:', url.pathname);
  let path = url.pathname;
  if (path.startsWith('/')) {
    path = path.slice(1);
  }
  // console.log('new path ', path);
  fetch(import.meta.env.VITE_API_HOST + '/api/get_docs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: userid,
      path: path,
    }),
  })
    .then(async (response) => {
      return response.text();
    })
    .then((data) => {
      // console.log(data);
      onSourceDocLinkClicked(data);
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
};

export const updateNavigation = (
  indexData: { user: string; activedoc: string | undefined },
  setIndexState: (arg0: string) => void,
) => {
  const { user, activedoc } = indexData;

  if (
    !user ||
    user.trim() === '' ||
    !activedoc ||
    activedoc.trim() === '' ||
    activedoc === 'default'
  ) {
    return;
  }
  fetch(import.meta.env.VITE_API_HOST + '/api/get_index', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(indexData),
    mode: 'cors',
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((data) => {
      if (data) {
        const stringData = JSON.stringify(data);
        setIndexState(stringData);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
