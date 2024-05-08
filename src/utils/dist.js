import http from "./http";
import db from "./db";
/**
 * 数据字典管理
 */
const dist = {
  get(type, callback, value, valueName) {
    dist.getList(type).then((list) => {
      for (let i = 0; i < list.length; i++) {
        const po = list[i];
        if (po[valueName] == value) {
          callback(po);
          return;
        }
      }
      callback(null);
    });
  },
  async getList(type) {
    let list = db.sessionGetObj(db.key.dict + type);
    if (list != null) {
      return new Promise((resolve, reject) => {
        resolve(list);
      });
    }
    const data = {
      code: type,
    };
    return new Promise((resolve, reject) => {
      http
        .get(http.service.upms + "dictionary/findByTypeName", data)
        .then((res) => {
          if (res.data && res.data.list) {
            list = res.data.list;
            db.sessionSetObj(db.key.dict + type, list);
            resolve(list);
          }
        });
    });
  },
};

export default dist;
