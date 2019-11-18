const db = require('../db');

exports.createComment = (request, response) => {
  const { comment, authorId, Id } = request.body;
  db.query(
    'INSERT INTO comments (comment, authorId, postid) VALUES ($1, $2, $3) RETURNING commentId',
    [comment, authorId, Id],
    (error, results) => {
      if (error) {
        response.status(400).json({
          status: 'error',
          error
        });
      }
      response.status(201).json({
        status: 'success',
        data: {
          message: 'Comment created Successfully',
          commentId: results.rows[0].commentid,
          comment,
          authorId,
          Id,
          createdOn: results.rows[0].createdOn
        }
      });
    }
  );
};

exports.deleteComment = (request, response) => {
  // eslint-disable-next-line radix
  const commentId = parseInt(request.params.id);

  db.query('DELETE FROM comments WHERE commentId = $1', [commentId], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Comment deleted with ID: ${commentId}`);
  });
};
