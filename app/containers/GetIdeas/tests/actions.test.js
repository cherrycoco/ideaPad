import {
  loadIdeas,
  ideasLoaded,
  ideasLoadingError,
} from '../actions';

describe('getIdeas Actions', () => {
  describe('loadIdeas', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: 'LOAD_IDEA',
      };

      expect(loadIdeas()).toEqual(expectedResult);
    });
  });

  describe('ideasLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = [{
        id: 'heislf',
        subject: 'My Test',
        text: 'testing',
      }];
      const expectedResult = {
        type: 'LOAD_IDEA_SUCCESS',
        ideas: fixture,
      };

      expect(ideasLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('ideasLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: 'LOAD_IDEA_ERROR',
        error: fixture,
      };

      expect(ideasLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
