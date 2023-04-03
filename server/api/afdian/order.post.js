export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const res = { a: 1, b: 2 };
  res.config = config;
  // const res = await $fetch("https://afdian.net/api/open/query-order", {});
  // res.value = res;
  return res;
});
