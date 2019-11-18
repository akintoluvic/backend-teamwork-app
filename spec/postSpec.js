/* eslint-disable no-undef */
const posts = require('../controllers/posts');
const comments = require('../controllers/comments');
const users = require('../controllers/users');

describe('Controllers', () => {
  it('posts', () => {
    // expect(response.status).toBe('401');
    expect(posts.getPosts).toBeDefined();
    expect(posts.getMyPosts).toBeDefined();
    expect(posts.getPostById).toBeDefined();
    expect(posts.getPostsWithAtag).toBeDefined();
    expect(posts.createArticle).toBeDefined();
    expect(posts.createGif).toBeDefined();
    expect(posts.updateGif).toBeDefined();
    expect(posts.deleteArticle).toBeDefined();
    expect(posts.deleteGif).toBeDefined();
    expect(posts.updateArticle).toBeDefined();
    expect(posts).toContain('dotenv');
    // expect(posts).toContain('error');
    // expect(posts.getPosts).toContain(response.status);
  });
  it('comments', () => {
    // expect(response.status).toBe('401');
    expect(comments.getComments).toBeDefined();
    expect(comments.createComment).toBeDefined();
    expect(comments.deleteComment).toBeDefined();
  });
  it('comments', () => {
    // expect(response.status).toBe('401');
    expect(users.getUsers).toBeDefined();
    expect(users.getProfile).toBeDefined();
    expect(users.createUser).toBeDefined();
    expect(users.deleteUser).toBeDefined();
    expect(users.updateUser).toBeDefined();
  });
  //   expect(posts.toUpperCase('hello world')).toEqual('HELLO WORLD');
  //   expect(posts.contains('cloud_name')).toBeTruthy();
});
