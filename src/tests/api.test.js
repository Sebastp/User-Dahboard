import { getRoll } from './crypto'

import fetchDataFromApi from '../helpers/dataFetching'


test('Test external api call', () => {
  fetchDataFromApi('https://jsonplaceholder.typicode.com/users/1')
  .then(data => {
    setBoardData(data)
    setBoardLoading(false)
  })
  .catch(error => setError(true));

  expect(result).toEqual({
    hash:
      'aa671aad5e4565ebffb8dc5c185e4df1ae6d9aca2578b5c03ec9c7750f881922276d8044e5e3d84f158ce411f667e224e9b0c1ac50fc94e9c5eb883a678f6ca2',
    range: 79.69
  })
})
