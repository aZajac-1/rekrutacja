import { __ } from "@wordpress/i18n";
import { RangeControl, SelectControl } from "@wordpress/components";

const ResponsiveRange = ({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  help,
}) => {
  const handleValueChange = (newValue) => {
    onChange({
      ...value,
      value: newValue,
    });
  };

  const handleUnitChange = (newUnit) => {
    onChange({
      ...value,
      unit: newUnit,
    });
  };

  const getMaxValue = (unit) => {
    switch (unit) {
      case 'px':
        return 1920;
      case '%':
      case 'vw':
      case 'vh':
        return 100;
      default:
        return max;
    }
  };

  return (
    <div style={{ display: "grid", }}>
      <RangeControl
        label={label}
        value={value?.value}
        onChange={handleValueChange}
        min={min}
        max={getMaxValue(value?.unit)}
        step={step}
        help={help}
      />

      <SelectControl
        value={value?.unit || "%"}
        onChange={handleUnitChange}
        options={[
          { label: "%", value: "%" },
          { label: "px", value: "px" },
          { label: "vw", value: "vw" },
          { label: "vh", value: "vh" },
        ]}
      />
    </div>
  );
};

export default ResponsiveRange;
