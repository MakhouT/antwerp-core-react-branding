import { Location } from "../../common/locations";

export enum InputTypes {
    Color = "color",
    Date = "date",
    Datetime = "datetime",
    DatetimeLocal = "datetime-local",
    Default = "text",
    Email = "email",
    Month = "month",
    Number = "number",
    Password = "password",
    Search = "search",
    Tel = "tel",
    Text = "text",
    TextArea = "textarea",
    Time = "time",
    Url = "url",
    Week = "week",
}

/**
 * Meta props for Redux-Form compatibility
 */
export type FieldMetaProperties = {
    active?: boolean;
    dirty?: boolean;
    error?: boolean;
    invalid?: boolean;
    pristine?: boolean;
    valid?: boolean;
};

export type InputProperties<T> = {
    addon?: string;
    addonLocation?: Location;
    checked?: boolean;
    description?: string | JSX.Element;
    icon?: string;
    iconLocation?: Location;
    inline?: boolean;
    label?: string | JSX.Element;
    meta?: FieldMetaProperties;
    name: string;
    onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onChange?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onDragStart?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onDrop?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onIconClick?: (e: React.SyntheticEvent<HTMLElement>) => void;
    placeholder?: string;
    required?: boolean;
    triggerChangeOnNextProps?: boolean,
    value?: T;
};

export type TypedInputProperties = { type: InputTypes | string } & InputProperties<any>;