// 通过XHR 的方式加载本地文件，这样可以随意修改返回类型
export function loadXHR(url) {
  return new Promise(function(resolve, reject) {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.onerror = function() {
        reject('Network error.');
      };
      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject('Loading error:' + xhr.statusText);
        }
      };
      xhr.send();
    } catch (err) {
      reject(err.message);
    }
  });
}
