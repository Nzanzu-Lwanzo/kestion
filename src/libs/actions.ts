"use server";

export const createPostAction = async (data: FormData) => {
  console.log(Object.fromEntries(data));
};
