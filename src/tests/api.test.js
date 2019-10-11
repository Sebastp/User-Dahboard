import fetchDataFromApi from '../helpers/dataFetching'



test('external api call response should have 10 keys', async (done) => {
  const response = await fetchDataFromApi('https://jsonplaceholder.typicode.com/users/1')
  const responseKeys = Object.keys(response)


  console.log(responseKeys.length);
  expect(responseKeys.length).toEqual(10);
  done();
})
