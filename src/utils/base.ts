import moment from "moment";

// 判断当前时间是否在本周内（周一00点重置）
export const isInCurrentWeek = (timestamp: number, weekStart = 1) => {
  // 设置周一为一周的开始
  moment.locale("zh-cn", {
    week: {
      dow: 1, // 周一为一周的第一天
      doy: 4,
    },
  });
  const t = moment(timestamp);
  const today = moment();
  return t.isSame(today, "week");
};

/** 生成 [min,max] 的随机整数 */
export const randInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

/** Promise 版 sleep */
export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

/**
 * 判断是否为数字
 * @param value any 输入
 * @returns Boolean 是否为数字
 */
export const isNumber = (value: any) => {
  return typeof value === "number" && Number.isFinite(value);
};

/**
 * 计算击杀比
 * @param nWin  Number 击杀次数
 * @param nLose Number 死亡次数
 * @returns Number 击杀比
 */
export const computedKD = (nWin: number, nLose: number) => {
  if (isNumber(nWin) && isNumber(nLose)) {
    let nKd = 0;

    switch (nLose) {
      // 死亡数为0时特殊处理
      case 0:
        nKd = nWin;
        break;
      default:
        nKd = nWin / nLose;
        break;
    }

    return nKd.toFixed(2);
  }

  return 0;
};

/**
 * 格式化显示数字
 * @param num Number 数字
 * @returns
 */
export const formatNumber = (num: number) => {
  const n = Number(num || 0);
  if (n >= 1e12) return (n / 1e12).toFixed(2) + "兆";
  if (n >= 1e8) return (n / 1e8).toFixed(2) + "亿";
  if (n >= 1e4) return (n / 1e4).toFixed(2) + "万";
  return String(n);
};