

import expect from 'expect';
import {formattedAuthorData} from './selectors';

describe('Author selectors', ()=>{
  describe('formattedAuthorData', ()=>{
    it('should return author data formatted for dropdown', ()=>{
      const authors = [
        { id: 'cory-house', firstName: 'Cory', lastName:'House' },
        { id: 'scott-allen', firstName: 'Scott', lastName:'Allen' }
      ];

      const expected = [
        { value: 'cory-house', text: 'Cory House' },
        { value: 'scott-allen', text: 'Scott Allen' }
      ];

      expect( formattedAuthorData(authors)).toEqual(expected);
    });
  });

});

