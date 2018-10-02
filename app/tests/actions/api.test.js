import { getSimilarBeersUrl, getRandomBeersUrl } from 'actions/api';

describe('api urls', () => {
  describe('get similar beers', () => {
    it('does not return negatives when given min values', () => {
      const num = 4;
      const abv = 0;
      const ibu = 0;
      const ebc = 4;
      const expectation = getRandomBeersUrl(num,abv,ibu,ebc);
      expect(expectation).not.toMatch(/=-/);
    });
  });
});
