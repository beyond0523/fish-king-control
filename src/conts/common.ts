import { isMobile } from "@/utils/tool";

/** 是否为移动端 */
export const bMobile = isMobile();

/** 阵营信息 */
export const FACTION = {
  // 大联盟
  big: {
    // 匹配关键字
    keywords: ['大联盟', '大'],
    key: 'big',
    // 显示文字
    label: '大联盟',
    // 背景颜色
    // var(--primary-color)
    bgColor: '#667eea',
  },
  // 龙盟
  dragon: {
    keywords: ['龙盟', '龍盟', '龙', '龍'],
    key: 'dragon',
    label: '龙盟',
    // var(--error-color)
    bgColor: '#d03050',
  },
  // 正义联盟
  justice: {
    keywords: ['正义联盟', '正义', '新正义', '正'],
    key: 'justice',
    label: '正义联盟',
    // var(--info-color)
    bgColor: '#2080f0',
  },
  // 曦盟
  xi: {
    keywords: ['曦盟', '曦'],
    key: 'xi',
    label: '曦盟',
    bgColor: '#9c27b0',
  },
  // 梦盟
  meng: {
    keywords: ['梦盟', '梦想之盟', '梦'],
    key: 'meng',
    label: '梦盟',
    // var(--success-color)
    bgColor: '#18a058',
  },
  // 未知联盟
  unknown: {
    keywords: [],
    key: 'unknown',
    label: '未知联盟',
    // var(--warning-color)
    bgColor: '#f5a623',
  },
}