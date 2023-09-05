const mapDBToModel = ({
  id,
  name,
  year,
  songs,
  createdAt,
  updateAt,
}) => ({
  id,
  name,
  year,
  songs,
  createdAt,
  updateAt,
});

module.exports = { mapDBToModel };
