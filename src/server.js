const Hapi = require('@hapi/hapi');

// song
const songs = require('./api/songs');
const SongsService = require('./services/postgres/song_service');
const SongsValidator = require('./validator/songs');

// album
const albums = require('./api/albums');
const AlbumsService = require('./services/postgres/album_service');
const AlbumsValidator = require('./validator/albums');

const init = async () => {
  const songService = new SongsService();
  const albumService = new AlbumsService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  await server.register(
    [
      {
        plugin: songs,
        options: {
          service: songService,
          validator: SongsValidator,
        },
      },
      {
        plugin: albums,
        options: {
          service: albumService,
          validator: AlbumsValidator,
        },
      },
    ],
  );

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
