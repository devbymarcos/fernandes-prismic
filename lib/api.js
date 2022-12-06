export const GRUPO_GET = () => {
  return {
    url: `${process.env.NEXT_PUBLIC_URL_API}/api/categorias?sort[0]=id  `,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "bearer " + process.env.NEXT_PUBLIC_TOKEN_API,
      },
    },
  };
};

export const PRODUCTS_GET = (id) => {
  const qs = {
    id: `filters[id][$eq]=${id}`,
    populate: `populate=*`,
  };

  return {
    url: `${process.env.NEXT_PUBLIC_URL_API}/api/categorias?${qs.id}&${qs.populate}`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "bearer " + process.env.NEXT_PUBLIC_TOKEN_API,
      },
    },
  };
};
