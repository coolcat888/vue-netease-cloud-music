import { request } from "@/plugins/axios";

// 歌单分类
export const getCatList = () => request.get("/playlist/catlist");

// 热门歌单分类
export const getHotCatList = () => request.get("/playlist/hot");

// 歌单 ( 网友精选碟 )
/**
 * @param {String} order "new" 或者 "hot"，默认为 "hot"
 * @param {Number} cat tag, 比如 " 华语 "、" 流行 ", 默认为 "全部"
 * @param {Number} limit 返回数量 , 默认为 50
 * @param {Number} offset 偏移数量，用于分页 , 如 :(页数 -1) * 50, 其中 50 为 limit 的值 , 默认为 0
 */
export const getTopPlayList = params =>
  request.get(`/top/playlist`, { params });
