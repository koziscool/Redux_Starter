
import expect from 'expect';
import courseReducer from './courseReducer';
import *  as actions from '../actions/courseActions';

describe('Course Reducer', ()=>{
  it('should add course when passed correct token', ()=>{
    const initialState = [
      { title: 'A' },
      { title: 'B' }
    ];

    const newCourse = { title: 'C' };

    const action = actions.createCourseSuccess(newCourse);

    //act
    const newState = courseReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update course when passed correct token', ()=>{
    const initialState = [
      { id: 'A', title: 'A' },
      { id: 'B', title: 'B' },
      { id: 'C', title: 'C' },
    ];

    const course = { id: 'B', title: 'New title' };
    const action = actions.updateCourseSuccess(course);

    //act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find( a => a.id === course.id );
    const prevCourse = newState.find( a => a.id === 'A' );


    //assert
    expect(newState.length).toEqual(3);
    expect(updatedCourse.title).toEqual('New title');
    expect(prevCourse.title).toEqual('A');
  });


});




