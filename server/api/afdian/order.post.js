/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-04-03 16:40:25
 * @LastEditTime: 2023-04-04 15:06:07
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxtjs-touxiang\server\api\afdian\order.post.js
 */

import CryptoJS from "crypto-js";

function handleBodyParams(params) {
  // 保证{}按key排序后，转换为string
  const sortedParams = Object.keys(params)
    .sort()
    .reduce((total, key) => {
      total[key] = params[key];
      return total;
    }, {});
  return JSON.stringify(sortedParams);
}

// 生成签名
function generateSign(token, user_id, params, ts) {
  // 拼接后的字符串
  var sign_str = token + "params" + params + "ts" + ts + "user_id" + user_id;
  // 计算md5值
  var sign = CryptoJS.MD5(sign_str).toString();
  return sign;
}

export default defineEventHandler(async (event) => {
  const { AFD_user_id, AFD_api_token } = useRuntimeConfig();
  const body = await readBody(event);
  const params = handleBodyParams(body);
  const ts = Math.floor(new Date().getTime() / 1000);
  const sign = generateSign(AFD_api_token, AFD_user_id, params, ts);

  const res = await $fetch("https://afdian.net/api/open/query-order", {
    method: "POST",
    body: {
      user_id: AFD_user_id,
      params,
      ts,
      sign,
    },
  });
  // res.value = res;
  return res;
});
