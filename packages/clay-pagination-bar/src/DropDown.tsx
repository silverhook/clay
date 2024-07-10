/**
 * SPDX-FileCopyrightText: (c) 2019 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayDropDownWithItems} from '@clayui/drop-down';
import classNames from 'classnames';
import React from 'react';

/**
 * @deprecated since v3.84.0 - use `Picker` component instead.
 */
const ClayPaginationBarDropDown = ({
	className,
	messages = 'Items Per Page',
	trigger,
	...otherProps
}: React.ComponentProps<typeof ClayDropDownWithItems>) => {
	return (
		<ClayDropDownWithItems
			className={classNames(className, 'pagination-items-per-page')}
			trigger={React.cloneElement(trigger, {
				'aria-label': messages,
			})}
			{...otherProps}
		/>
	);
};

export default ClayPaginationBarDropDown;
