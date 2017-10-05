import * as classNames from "classnames";
import * as React from "react";

import { Levels } from "../common/levels";
import { StyleProperties } from "../common/properties";
import { Sizes } from "../common/sizes";

export enum ButtonType {
    Default = "default",
    Negative = "negative",
    Outline = "outline",
    Transparent = "transparent",
}

export type ButtonProperties = {
    className?: string;
    disabled?: boolean;
    level?: Levels;
    negative?: boolean;
    size?: Sizes;
    text?: string | JSX.Element;
    type?: ButtonType;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
} & StyleProperties;

/**
 * Atoms: button component
 */
export class Button extends React.Component<ButtonProperties, {}> {

    public render(): any {
        return (
            <button
                onClick={(e) => this.onClick(e)}
                className={this.className()}
                style={this.props.style}
                type="button"
            >
                {this.props.text} {this.props.children}
            </button>
        );
    }

    private className(): string {
        return classNames(
            this.props.type && this.props.type !== ButtonType.Default ? `a-button-${this.props.type}` : "a-button",
            this.props.level ? `a-button--${this.props.level}` : "",
            this.props.size ? `a-button--${this.props.size}` : "",
            { disabled: this.props.disabled },
            this.props.className,
        );
    }

    private onClick(e: React.MouseEvent<HTMLButtonElement>): void {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }
}