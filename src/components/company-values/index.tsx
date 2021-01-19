import ColoredSection from '@/components/colored-section';

import CompanyValuesSlider, { CompanyValuesSliderProps } from './slider';

type CompanyValuesProps = CompanyValuesSliderProps;

const CompanyValues = (props: CompanyValuesProps) => (
  <ColoredSection bg="blue.400" heading="What we value">
    <CompanyValuesSlider {...props} />
  </ColoredSection>
);

export default CompanyValues;
