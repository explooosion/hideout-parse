export default (data) => data.replace(/\r\n/g, '\n').split('\n').reduce((res, line) => {
  if (line === '') return res;
  const kv = (new RegExp('^(.+) = (.+)$')).exec(line);
  const [, key, value] = kv;
  const isObjectLike = (new RegExp('^{(.+)}$')).test(value);

  if (isObjectLike) {
    const obj = JSON.parse(value.replace(/(\s*?{\s*?|\s*?,\s*?)(['"])?([a-zA-Z0-9]+)(['"])?=/g, '$1"$3":'));
    const { Objects } = res;

    return {
      ...res,
      Objects: [
        ...Objects,
        {
          ...obj,
          Name: key,
        },
      ],
    };
  }
  return {
    ...res,
    [key]: value.replace(/"/g, ''),
  };
}, {
    Objects: []
  });
