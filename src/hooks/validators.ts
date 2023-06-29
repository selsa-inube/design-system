const validateArrayType = (arr: unknown[]): void => {
  if (!Array.isArray(arr)) {
    throw new Error(`Invalid parameter: queries must be an array`);
  }
};

const validateArrayNotEmpty = (arr: unknown[]): void => {
  if (arr.length <= 0) {
    throw new Error(`Invalid parameter: queries must not be an empty array`);
  }
};

const validateNonEmptyString = (value: unknown): void => {
  if (typeof value !== "string") {
    throw new Error(`Invalid queries: must be a string`);
  }
  if ((value as string).trim().length === 0) {
    throw new Error(`Invalid queries: must not be an empty string`);
  }
};

const validateQueries = (queries: string[]): void => {
  queries.forEach((query) => {
    try {
      validateNonEmptyString(query);
    } catch (error) {
      throw new Error(`Invalid queries: ${error}`);
    }
  });
};

export {
  validateArrayType,
  validateQueries,
  validateArrayNotEmpty,
  validateNonEmptyString,
};
