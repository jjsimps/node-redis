import { RedisArgument, Command } from '@redis/client/dist/lib/RESP/types';
import { transformDoubleReply } from '@redis/client/dist/lib/commands/generic-transformers';

export default {
  FIRST_KEY_INDEX: 1,
  IS_READ_ONLY: true,
  transformArguments(
    key: RedisArgument,
    lowCutPercentile: number,
    highCutPercentile: number
  ) {
    return [
      'TDIGEST.TRIMMED_MEAN',
      key,
      lowCutPercentile.toString(),
      highCutPercentile.toString()
    ];
  },
  transformReply: transformDoubleReply
} as const satisfies Command;
