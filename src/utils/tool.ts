/**
 * 判断是否为移动端
 * @returns Boolean true-移动端 false-非移动端
 */
export const isMobile = () => {
  // 方法1：User-Agent检测
  const ua = navigator.userAgent;
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|Mobile|Tablet|Silk|Kindle|PlayBook|BB10|Symbian|Palm|CriOS|FxiOS|SamsungBrowser/i;

  if (mobileRegex.test(ua)) {
    return true;
  }

  // 方法2：触摸支持 + 屏幕尺寸
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.innerWidth <= 768;

  // 方法3：检测iPad Pro（特殊情况）
  const isIPadPro =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;

  return (isTouch && isSmallScreen) || isIPadPro;
};
