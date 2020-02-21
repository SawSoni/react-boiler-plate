/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component, Suspense}from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import DefaultStyle from './Styles';
import Loader from '../../base-components/Loader';

export default function HomePage() {
  return (
    <DefaultStyle>
      <Suspense fallback={<Loader />}>
          <FormattedMessage {...messages.header} />
      </Suspense>
    </DefaultStyle>
  );
}
