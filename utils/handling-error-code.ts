export const handlingErrorCode = (response: Response) => {
  const { status, ok } = response;

  if (status === 404) {
    throw new Error("Page not found");
  } else if (status === 500) {
    throw new Error("Server error");
  } else if (!ok) {
    throw new Error(`HTTP error! status: ${status}`);
  }
};
