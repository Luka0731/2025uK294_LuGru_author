import api from "./api";

export const getAuthors = () => {
  return api.get("/author");
};

export const getAuthorById = (id: string) => {
  return api.get(`/author/${id}`);
};

export const createAuthor = (data: {
  author_name: string;
  birth_date: string;
}) => {
  return api.post("/author", data);
};

export const updateAuthor = (
  id: string,
  data: { author_name: string; birth_date: string }
) => {
  return api.put(`/author/${id}`, data);
};

export const deleteAuthor = (id: string) => {
  return api.delete(`/author/${id}`);
};
