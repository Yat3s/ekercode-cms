import AV from 'leancloud-storage';

export default class Trial extends AV.Object {}

// 手动加上第二个参数避免代码经过压缩后丢失原本的名称
AV.Object.register(Trial, 'Trial');
