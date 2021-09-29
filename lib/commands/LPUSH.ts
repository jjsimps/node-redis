import { TransformArgumentsReply } from '.';
import { pushVerdictArguments } from './generic-transformers';

export const FIRST_KEY_INDEX = 1;

export function transformArguments(key: string, elements: string | Array<string>): TransformArgumentsReply {
    return pushVerdictArguments(['LPUSH', key], elements);}

export declare function transformReply(): number;