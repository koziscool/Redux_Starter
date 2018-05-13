import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving){

  let props = {
    course: {}, saving: saving, errors: {}, allAuthors: [],
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return { props, output, renderer };
}


describe('CourseForm via react test utils', () => {

  it( 'renders form and h1', ()=>{
    const {output} = setup();
    let [ h1 ] = output.props.children;
    expect( output.type ).toBe('form');
    expect( h1.type ).toBe('h1');
  });

  it( 'save button works when not saving', ()=>{
    const {output} = setup(false);
    const submitButton = output.props.children[5];
    expect( submitButton.props.value ).toBe('Save');
  });

  it( 'save button works when saving', ()=>{
    const {output} = setup(true);
    const submitButton = output.props.children[5];
    expect( submitButton.props.value ).toBe('Saving...');
  });


});
