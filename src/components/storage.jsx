export const localStorageSet = (post) => {
  localStorage.setItem("post", JSON.stringify(post));
};

export const getPostData = (id) => {
  const data = localStorage.getItem("post");
  const initialValue = JSON.parse(data);
  const post = initialValue.find((item) => item.id === id);
  if (!post) {
    return;
  }
  return post;
};
