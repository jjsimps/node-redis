import { TransformArgumentsReply } from '.';
import { pushVerdictArguments } from './generic-transformers';

export function transformArguments(key: string | Array<string>): TransformArgumentsReply {
    return pushVerdictArguments(['WATCH'], key);
}

export declare function transformReply(): string;