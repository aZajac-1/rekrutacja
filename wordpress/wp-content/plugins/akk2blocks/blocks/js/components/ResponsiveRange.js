import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

const ResponsiveRange = ({
    label,
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    help,
}) => {
    return (
        <RangeControl
            label={label}
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            step={step}
            help={help}
        />
    );
};

export default ResponsiveRange;
