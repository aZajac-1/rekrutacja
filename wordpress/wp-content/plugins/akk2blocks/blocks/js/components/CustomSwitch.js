import { __ } from "@wordpress/i18n";
import { ToggleControl } from "@wordpress/components";

const CustomSwitch = ({ label, checked, onChange, help }) => {
    return (
        <ToggleControl
            label={label}
            checked={checked}
            onChange={onChange}
            help={help}
        />
    );
};

export default CustomSwitch;
