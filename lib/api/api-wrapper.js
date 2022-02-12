export default function apiWrapper(handler) {
  return async (req, res) => {
    try {
      res.json(await handler(req, res));
    } catch (error) {
      if (error?.isApiException) {
        const { message, statusCode, data } = error;

        res
          .status(statusCode || 400)
          .json({ message, error: statusCode, data });
      } else {
        console.warn(error);
        res.status(500).json({
          message: "Internal Server Error",
          error: 500,
        });
      }
    }
  };
}
