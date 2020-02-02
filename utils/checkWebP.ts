export const useCheckWebP = () => {
  const isWebp = checkWebp();
  function checkWebp() {
    try {
      return (
        document
          .createElement('canvas')
          .toDataURL('image/webp')
          .indexOf('data:image/webp') == 0
      );
    } catch (err) {
      return false;
    }
  }
  function autoWebP(src) {
    src = src.replace(/\s/g, '');
    // https 协议访问存在问题 IE8，去 schema
    if (/^http:/.test(src)) {
      src = src.slice(5);
    }
    // 支持 webp 格式
    if (
      isWebp &&
      /(taobaocdn|alicdn)\.com/.test(src) &&
      (src.indexOf(/.jpe?g/) || src.indexOf('.png')) &&
      !/webp/.test(src) &&
      !/\/s\.gif$/.test(src)
    ) {
      src += '_.webp';
    } else if (src.lastIndexOf('_.webp') >= 0) {
      src = src.split('_.webp')[0];
    }
    return src;
  }
  return {autoWebP, isWebp};
};
