import type { Plugin } from '@opencode-ai/plugin';

export const SessionIdPlugin: Plugin = async ({ project, client, $, directory, worktree }) => {
  return {
    "chat.headers": async (input , output) => {
        output.headers["X-Session-ID"] = input.sessionID;
    }
  };
};
