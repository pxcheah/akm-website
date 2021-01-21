import ColoredSection from '@/components/colored-section';

import CompanyValuesSlider, { CompanyValuesSliderProps } from './slider';

type CompanyValuesProps = CompanyValuesSliderProps;

const CompanyValues = (props: CompanyValuesProps) => (
  <ColoredSection bg="blue.500" heading="What we value">
    <CompanyValuesSlider {...props} />
  </ColoredSection>
);

export default CompanyValues;
