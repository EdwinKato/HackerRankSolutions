export default function matchingStrings(strings, queries) {
  const result = [];
  queries.forEach((query) => {
    const matchQuery = strings.filter(string => string === query);
    result.push(matchQuery.length);
  });
  return result;
}
