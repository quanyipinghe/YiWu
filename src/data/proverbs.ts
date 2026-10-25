import { Proverb } from './types';
import { LEGACY_PROVERBS } from './batches/legacyProverbs';
import { BATCH_SUYU } from './batches/batch1-suyu';
import { BATCH_CHENGYU } from './batches/batch2-chengyu';
import { BATCH_GUANYONGYU } from './batches/batch3-guanyongyu';
import { BATCH_GEYAN } from './batches/batch4-geyan';
import { BATCH_ZHENYAN } from './batches/batch5-zhenyan';
import { BATCH_JINGJU } from './batches/batch6-jingju';
import { BATCH_FAMILIAR } from './batches/batch7-familiar';

// 统一汇总完整内容库，保留全部 33 条历史 ID。
export const PROVERBS: Proverb[] = [
  ...LEGACY_PROVERBS,
  ...BATCH_SUYU,
  ...BATCH_CHENGYU,
  ...BATCH_GUANYONGYU,
  ...BATCH_GEYAN,
  ...BATCH_ZHENYAN,
  ...BATCH_JINGJU,
  ...BATCH_FAMILIAR
];
