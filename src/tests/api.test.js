import { getRoll } from './crypto'

test('roll returns the right result', () => {
  const serverSeed = '293d5d2ddd365f54759283a8097ab2640cbe6f8864adc2b1b31e65c14c999f04'
  const clientSeed = 'ClientSeedForDiceSites.com'
  const nonce = 0
  const result = getRoll({ serverSeed, clientSeed, nonce })
  expect(result).toEqual({
    hash:
      'aa671aad5e4565ebffb8dc5c185e4df1ae6d9aca2578b5c03ec9c7750f881922276d8044e5e3d84f158ce411f667e224e9b0c1ac50fc94e9c5eb883a678f6ca2',
    range: 79.69
  })
})
