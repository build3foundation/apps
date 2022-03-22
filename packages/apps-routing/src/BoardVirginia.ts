// Copyright 2017-2022 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { Route } from './types';

import Component, { useCounter } from '@polkadot/app-board-virginia';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsAccounts: true,
      needsApi: [
        'query.boardVirginia.members'
      ],
      needsApiInstances: true
    },
    group: 'governance',
    icon: 'bird',
    name: 'boardVirginia',
    text: t('nav.boardVirginia', 'Virginia Board', { ns: 'apps-routing' }),
    useCounter
  };
}
