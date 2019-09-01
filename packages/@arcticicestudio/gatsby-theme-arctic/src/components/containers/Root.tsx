/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

import React from "react";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

/**
 * A core component that serves as data and context provider.
 */
export default function Root({ children }: Props): JSX.Element {
  return <>{children}</>;
}
