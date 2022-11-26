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

export const PRODUCTS_GET = (slug) => {
  const qs = {
    slug: `filters[slug][$eq]=${slug}`,
    populate: `populate=*`,
  };

  return {
    url: `${process.env.NEXT_PUBLIC_URL_API}/api/grupos?${qs.slug}&${qs.populate}`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "bearer " + process.env.NEXT_PUBLIC_TOKEN_API,
      },
    },
  };
};
