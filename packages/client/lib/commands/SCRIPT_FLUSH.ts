import { SimpleStringReply, Command } from '../RESP/types';

export default {
  FIRST_KEY_INDEX: undefined,
  IS_READ_ONLY: true,
  transformArguments(mode?: 'ASYNC' | 'SYNC') {
    const args = ['SCRIPT', 'FLUSH'];

    if (mode) {
      args.push(mode);
    }

    return args;
  },
  transformReply: undefined as unknown as () => SimpleStringReply<'OK'>
} as const satisfies Command;
