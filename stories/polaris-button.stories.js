import { html } from 'lit';
import '../src/polaris-button.js';

export default {
  title: 'PolarisButton',
  component: 'polaris-button',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <polaris-button
      style="--polaris-button-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </polaris-button>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
