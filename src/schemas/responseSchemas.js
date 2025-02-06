export const successResponseFormat = (
  data,
  message = "Request was successful"
) => ({
  status: "success",
  message,
  data,
});

export const errorResponseFormat = (error) => ({
  status: "error",
  error,
});
