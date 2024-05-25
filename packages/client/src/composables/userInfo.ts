import { useStorage } from '@vueuse/core';
import type { UserInfo } from '@waline/api';
import type { Ref } from 'vue';

export const USER_KEY = 'WALINE_USER';

export type UserInfoRef = Ref<UserInfo | Record<string, never>>;

export const useUserInfo = (): UserInfoRef =>
  useStorage<UserInfo | Record<string, never>>(USER_KEY, {});
