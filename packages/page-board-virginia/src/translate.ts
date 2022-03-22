// Copyright 2017-2022 @polkadot/app-board-virginia authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { UseTranslationResponse } from 'react-i18next';

import { useTranslation as useTranslationBase } from 'react-i18next';

export function useTranslation (): UseTranslationResponse<'app-board-virginia', undefined> {
  return useTranslationBase('app-board-virginia');
}
