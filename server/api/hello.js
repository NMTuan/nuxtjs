/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-03-31 17:19:15
 * @LastEditTime: 2023-03-31 17:26:22
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtjs-touxiang\server\api\hello.js
 */
export default defineEventHandler(async (event) => {
  console.log(event);
  const query = getQuery(event);
  // const body = await readBody(event);
  return {
    ec: 200,
    query,
    // body,
    method: event.req.method,
  };
});
