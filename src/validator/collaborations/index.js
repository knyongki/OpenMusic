const InvarianError = require('../../exceptions/InvarianError');
const { CollaborationPayloadSchema } = require("./schema");

const CollaborationsValidator = {
  validateCollaborationPayload: (payload) => {
    const validationResult = CollaborationPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvarianError(validationResult.error.message);
    }
  },
};

module.exports = CollaborationsValidator;
