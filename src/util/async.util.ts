export const reducerUtils = {
  initial: (data = null) => ({
    loading: false,
    data,
    error: null,
  }),
  loading: (preveState = null) => ({
    data: preveState,
    loading: true,
    error: null,
  }),
  success: (data = null) => ({
    data,
    loading: false,
    error: null,
  }),
  error: (error = null) => ({
    data: null,
    loading: false,
    error,
  }),
};
