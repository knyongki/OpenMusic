const mapDBToModel = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId,
  createdAt,
  updateAt,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId,
  createdAt,
  updateAt,
});

module.exports = { mapDBToModel };
