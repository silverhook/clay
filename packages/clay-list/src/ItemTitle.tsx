/**
 * SPDX-FileCopyrightText: (c) 2019 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLink from '@clayui/link';
import classNames from 'classnames';
import React from 'react';

const ClayListItemTitle = React.forwardRef<
	HTMLDivElement,
	React.BaseHTMLAttributes<HTMLAnchorElement>
>(({children, className, href, ...otherProps}, ref) => {
	const TagName = href ? 'div' : 'p';

	const content = href ? (
		<ClayLink href={href} {...otherProps}>
			{children}
		</ClayLink>
	) : (
		children
	);

	return (
		<TagName
			className={classNames('list-group-title', className)}
			ref={ref}
		>
			{content}
		</TagName>
	);
});

ClayListItemTitle.displayName = 'ClayListItemTitle';

export default ClayListItemTitle;
