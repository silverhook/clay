/**
 * SPDX-FileCopyrightText: (c) 2019 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import QuickActionMenuItem from './QuickActionMenuItem';

const ClayListQuickActionMenu = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...otherProps}, ref) => {
	return (
		<div
			{...otherProps}
			className={classNames('quick-action-menu', className)}
			ref={ref}
		>
			{children}
		</div>
	);
});

ClayListQuickActionMenu.displayName = 'ClayListQuickActionMenu';

export default Object.assign(ClayListQuickActionMenu, {
	Item: QuickActionMenuItem,
});
