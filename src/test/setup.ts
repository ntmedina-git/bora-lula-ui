import { setProjectAnnotations } from '@storybook/react';
import * as preview from '../../.storybook/preview';

setProjectAnnotations(preview.default ?? preview);
