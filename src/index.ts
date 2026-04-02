import type { Plugin } from '@opencode-ai/plugin';

export const SessionIdPlugin: Plugin = async () => {
  return {
    'chat.headers': async (input, output) => {
      output.headers['x-session-id'] = input.sessionID;
    },
  };
};
