'use strict';

// 获取文件夹或者文件的操作权限表示符
module.exports = function permsToString(stat) {
  if (!stat.isDirectory || !stat.mode) {
    return '???!!!???';
  }

  const dir = stat.isDirectory() ? 'd' : '-';
  // 将数值转换为八进制的数字字符串
  const mode = stat.mode.toString(8);

  // 基本上，windows 中：
  // 文件夹操作权限为：drw-rw-rw-
  // 文件操作权限为：-rw-rw-rw-
  return dir + mode.slice(-3).split('').map(n => [
    '---',
    '--x',
    '-w-',
    '-wx',
    'r--',
    'r-x',
    'rw-',
    'rwx',
  ][parseInt(n, 10)]).join('');
};
