require('dotenv').config();
const Hapi = require('@hapi/hapi');

// song
const songs = require('./api/songs');
const SongsService = require('./services/postgres/song_service');
const SongsValidator = require('./validator/songs');

// album
const albums = require('./api/albums');
const AlbumsService = require('./services/postgres/album_service');
const AlbumsValidator = require('./validator/albums');

// users
const users = require('./api/users');
const UsersService = require('./services/postgres/user_service');
const UsersValidator = require('./validator/users');

const init = async () => {
  const songService = new SongsService();
  const albumService = new AlbumsService();
  const userService = new UsersService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  await server.register([
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
    {
      plugin: users,
      options: {
        service: userService,
        validator: UsersValidator,
      },
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
