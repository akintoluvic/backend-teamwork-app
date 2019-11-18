/* eslint-disable no-undef */
const request = require('request');
const posts = require('../controllers/posts');

const baseUrl = 'http://localhost:3000/api/v1';

describe('Post test contains', function() {
  it('should be able to lower case a string', function() {
    expect(response.status).toBe('401');
    expect(posts.toLowerCase).toBeDefined();
    expect(posts.toLowerCase('HELLO WORLD')).toEqual('hello world');
  });

  it('should be able to upper case a string', function() {
    expect(posts.toUpperCase).toBeDefined();
    expect(posts.toUpperCase('hello world')).toEqual('HELLO WORLD');
  });

  it('should be able to confirm if a string contains a substring', function() {
    expect(posts.contains).toBeDefined();
    expect(posts.contains('cloud_name')).toBeTruthy();
  });

  it('should be able repeat a string multiple times', function() {
    expect(posts.repeat).toBeDefined();
    expect(posts.getPosts()).toEqual('hellohellohello');
  });
});
