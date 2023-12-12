const InvarianError = require('../../exceptions/InvarianError');
const { UserPayloadSchema } = require('./schema');

const UsersValidator = {
  validateUserPayload: (payload) => {
    const validationResukt = UserPayloadSchema.validate(payload);

    if (validationResukt.error) {
      throw new InvarianError(validationResukt.error.message);
    }
  },
};

module.exports = UsersValidator;
