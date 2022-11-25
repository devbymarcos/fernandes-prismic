console.log(process.env.TOKEN_API);
export const GRUPO_GET = () => {
  return {
    url: `${process.env.NEXT_PUBLIC_URL_API}/api/grupos`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "bearer " + process.env.NEXT_PUBLIC_TOKEN_API,
      },
    },
  };
};
