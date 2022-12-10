import React from 'react';

import * as Components from '../components';

export default {
	title: 'strings/CanvasShader',
	component: Components.strings.GlobalWrapper,
	argTypes: {
		title: { control: 'text' },
	},
};

const Template = ({title}) => (
	<Components.strings.GlobalWrapper title={title}>
		<Components.strings.CanvasShader>
			{title}
		</Components.strings.CanvasShader>
	</Components.strings.GlobalWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
	title: 'CanvasShader',
};
