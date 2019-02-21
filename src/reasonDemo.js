import {recordToObject, whatAboutNamedArguments} from './demo.gen.js';

console.log(JSON.stringify(recordToObject(), null, 2));

console.log(
  whatAboutNamedArguments(
    'First string',
    {hello: 'This', world: 'is grouped'},
    'Second string',
    {gimmeMore: 'Wow', evenMoreOptions: 'Amaze!!'}
  )
);
