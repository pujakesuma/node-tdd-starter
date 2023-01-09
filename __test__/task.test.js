import { sum } from '../src/task'

describe('test task module', () => {
  it('should return 2', () => {
    expect(sum(1, 1)).toEqual(2)
  })

  it('should return 5', () => {
    expect(sum(1, 4)).toEqual(5)
  })
})
